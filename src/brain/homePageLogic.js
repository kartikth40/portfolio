// Particle constellation — performance optimized

export let animationsEnabled = true

// respect OS preference and localStorage
const stored = localStorage.getItem('animations-enabled')
if (stored !== null) {
  animationsEnabled = stored === '1'
} else if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  animationsEnabled = false
}

export function getAnimationsEnabled() {
  return animationsEnabled
}

export function setAnimationsEnabled(val) {
  animationsEnabled = val
  localStorage.setItem('animations-enabled', val ? '1' : '0')
}

export function initParticles(canvas) {
  const ctx = canvas.getContext('2d')
  let width, height, particles, mouse, animId
  let cachedScrollY = 0
  let cachedSection = 0
  let sectionPulseTimer = 0
  let cursorTrail = []
  let heroScaleCurrent = 1
  let lastScrollY = 0
  let scrollVelocity = 0
  let debris = []
  let lineParticles = []
  let lightning = []
  let lightningTimer = 0
  let nextLightningAt = 1800 + Math.random() * 1800
  mouse = { x: -1000, y: -1000 }
  const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window

  const sectionIds = ['#home', '#about', '#projects', '#contact', '#footer']
  let sectionOffsets = []

  function cacheSectionOffsets() {
    sectionOffsets = sectionIds.map((id) => {
      const el = document.querySelector(id)
      return el ? el.offsetTop : Infinity
    })
  }

  function getCurrentSection() {
    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (cachedScrollY >= sectionOffsets[i] - height * 0.5) return i
    }
    return 0
  }

  function resize() {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
    cacheSectionOffsets()
  }

  // Nebulae removed

  function createParticles() {
    const count = Math.min(isMobile ? 80 : 200, Math.floor((width * height) / 6000))
    const centerX = width / 2
    const centerY = height / 2
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY)
    particles = new Array(count)
    for (let i = 0; i < count; i++) {
      const depth = Math.random()
      const baseSpeed = 0.15 + depth * 0.35
      const x = Math.random() * width
      const y = Math.random() * height
      const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
      particles[i] = {
        x, y,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        baseVx: (Math.random() - 0.5) * baseSpeed,
        baseVy: (Math.random() - 0.5) * baseSpeed,
        size: 0.5 + depth * 2,
        depth,
        spawnAlpha: 0,
        spawnDelay: (distFromCenter / maxDist) * 120,
        spawnTimer: 0,
        twinkleFreq: 0.002 + Math.random() * 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleAmount: 0.15 + Math.random() * 0.25,
      }
    }
  }

  let shootingStars = []
  let shootingStarTimer = 0
  let nextShootingStarAt = 1800 + Math.random() * 5400

  function spawnShootingStar(isMeteor) {
    const baseSize = isMeteor ? 6 + Math.random() * 3 : 3.5 + Math.random() * 2.5
    const trailLen = isMeteor ? 40 : 20
    const edge = Math.floor(Math.random() * 4)
    let startX, startY
    if (edge === 0) { startX = -20; startY = Math.random() * height }
    else if (edge === 1) { startX = width + 20; startY = Math.random() * height }
    else if (edge === 2) { startX = Math.random() * width; startY = -20 }
    else { startX = Math.random() * width; startY = height + 20 }
    const targetX = width * (0.35 + Math.random() * 0.3)
    const targetY = height * (0.3 + Math.random() * 0.4)
    const angle = Math.atan2(targetY - startY, targetX - startX)
    shootingStars.push({
      x: startX, y: startY, angle,
      baseSpeed: isMeteor ? 8 : 5,
      baseSize, size: baseSize,
      life: 1, trail: [], maxTrail: trailLen,
      isMeteor, z: 1,
      zSpeed: 0.008 + Math.random() * 0.006,
      gravityVy: 0,
    })
  }

  function spawnDebris(x, y) {
    for (let d = 0; d < 4; d++) {
      const angle = Math.random() * Math.PI * 2
      const speed = 1 + Math.random() * 2
      debris.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: 0.5 + Math.random() * 1.5,
      })
    }
  }

  function spawnLightning(startX, startY) {
    const segments = []
    let x = startX
    let y = startY
    const angle = Math.random() * Math.PI * 0.6 + Math.PI * 0.2 // mostly downward
    const length = 150 + Math.random() * 200
    const steps = 12 + Math.floor(Math.random() * 8)
    const stepLen = length / steps
    let curAngle = angle
    for (let s = 0; s < steps; s++) {
      curAngle += (Math.random() - 0.5) * 0.8 // jagged turns
      const nx = x + Math.cos(curAngle) * stepLen
      const ny = y + Math.sin(curAngle) * stepLen
      segments.push({ x1: x, y1: y, x2: nx, y2: ny })
      // branch ~25% chance, shorter
      if (Math.random() < 0.25) {
        const branchAngle = curAngle + (Math.random() - 0.5) * 1.2
        const bLen = stepLen * (0.5 + Math.random() * 0.8)
        let bx = nx, by = ny
        const bSteps = 2 + Math.floor(Math.random() * 3)
        let ba = branchAngle
        for (let bs = 0; bs < bSteps; bs++) {
          ba += (Math.random() - 0.5) * 0.6
          const bnx = bx + Math.cos(ba) * bLen
          const bny = by + Math.sin(ba) * bLen
          segments.push({ x1: bx, y1: by, x2: bnx, y2: bny, branch: true })
          bx = bnx
          by = bny
        }
      }
      x = nx
      y = ny
    }
    // store center for particle illumination
    const cx = (startX + x) / 2
    const cy = (startY + y) / 2
    lightning.push({ segments, life: 1, flashAlpha: 0.06, cx, cy, radius: length * 0.8 })
  }

  let grid = {}
  const cellSize = 130

  function buildGrid() {
    grid = {}
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      if (p.spawnAlpha < 0.1) continue
      const parallaxY = cachedScrollY * p.depth * 0.15
      const dy = p.y - parallaxY
      if (dy < -50 || dy > height + 50) continue
      const cx = (p.x / cellSize) | 0
      const cy = (dy / cellSize) | 0
      const key = cx + ',' + cy
      if (!grid[key]) grid[key] = []
      grid[key].push({ idx: i, drawX: p.x, drawY: dy })
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height)
    cachedScrollY = window.scrollY || 0
    scrollVelocity += (cachedScrollY - lastScrollY - scrollVelocity) * 0.1
    scrollVelocity *= 0.92
    lastScrollY = cachedScrollY
    const now = Date.now()
    const breathe = 1 + Math.sin(now * 0.0006) * 0.15

    const fadeStart = height * 0.5
    const fadeEnd = height
    let globalAlpha = 1
    if (cachedScrollY > fadeStart) {
      globalAlpha = Math.max(0.3, 1 - (cachedScrollY - fadeStart) / (fadeEnd - fadeStart))
    }
    ctx.globalAlpha = globalAlpha

    const connectDist = 120 * breathe
    const connectDistSq = connectDist * connectDist
    const mouseDist = 150
    const mouseDistSq = mouseDist * mouseDist
    const inHero = cachedScrollY < height
    const heroTarget = inHero ? 1.5 : 1
    heroScaleCurrent += (heroTarget - heroScaleCurrent) * 0.05
    const heroScale = heroScaleCurrent

    const currentSection = getCurrentSection()
    if (currentSection !== cachedSection) {
      cachedSection = currentSection
      sectionPulseTimer = 30
    }
    if (sectionPulseTimer > 0) sectionPulseTimer--

    const maxScroll = document.documentElement.scrollHeight - height
    const scrollRatio = maxScroll > 0 ? Math.min(cachedScrollY / maxScroll, 1) : 0
    const pR = Math.round(255 - scrollRatio * 30)
    const pG = Math.round(255 - scrollRatio * 50)
    const pB = 255

    // cursor trail — desktop only
    if (!isMobile && mouse.x > 0 && mouse.y > 0) {
      if (cursorTrail.length === 0 ||
          Math.abs(cursorTrail[cursorTrail.length - 1].x - mouse.x) > 1 ||
          Math.abs(cursorTrail[cursorTrail.length - 1].y - mouse.y) > 1) {
        cursorTrail.push({ x: mouse.x, y: mouse.y, life: 1 })
      }
    }
    if (cursorTrail.length > 25) cursorTrail.shift()

    if (inHero) buildGrid()

    // spawn line particles occasionally from close particle connections
    if (inHero && !isMobile && Math.random() < 0.02 && lineParticles.length < 8) {
      const keys = Object.keys(grid)
      if (keys.length > 0) {
        const cell = grid[keys[(Math.random() * keys.length) | 0]]
        if (cell && cell.length >= 2) {
          const a = cell[0]
          const b = cell[1]
          if (particles[a.idx].depth > 0.4 && particles[b.idx].depth > 0.4) {
            lineParticles.push({
              ax: a.drawX, ay: a.drawY,
              bx: b.drawX, by: b.drawY,
              t: 0, speed: 0.01 + Math.random() * 0.02,
            })
          }
        }
      }
    }

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      p.spawnTimer++
      if (p.spawnTimer <= p.spawnDelay) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > width) { p.vx *= -1; p.baseVx *= -1 }
        if (p.y < 0 || p.y > height) { p.vy *= -1; p.baseVy *= -1 }
        continue
      }

      const twinkleAge = p.spawnTimer - p.spawnDelay
      if (twinkleAge < 60) {
        const flickerSpeed = 0.3 - (twinkleAge / 60) * 0.25
        const flicker = Math.sin(twinkleAge * flickerSpeed * Math.PI * 2)
        p.spawnAlpha = Math.min(twinkleAge / 60, (flicker + 1) / 2 * (twinkleAge / 60))
      } else {
        p.spawnAlpha = 1
      }

      const twinkle = 1 - Math.sin(now * p.twinkleFreq * 0.3 + p.twinklePhase) * p.twinkleAmount * 0.3

      p.vx += (p.baseVx - p.vx) * 0.02
      p.vy += (p.baseVy - p.vy) * 0.02
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > width) { p.vx *= -1; p.baseVx *= -1 }
      if (p.y < 0 || p.y > height) { p.vy *= -1; p.baseVy *= -1 }

      const parallaxY = cachedScrollY * p.depth * 0.15
      const momentumOffset = scrollVelocity * p.depth * 0.8
      const drawX = p.x
      const drawY = p.y - parallaxY + momentumOffset
      if (drawY < -50 || drawY > height + 50) continue

      let distSq = Infinity
      if (inHero && !isMobile) {
        const dx = drawX - mouse.x
        const dy2 = drawY - mouse.y
        distSq = dx * dx + dy2 * dy2
        if (distSq < mouseDistSq && distSq > 0) {
          const dist = Math.sqrt(distSq)
          const force = (mouseDist - dist) / mouseDist
          p.x += dx / dist * force * 1.5
          p.y += dy2 / dist * force * 1.5
        }
      }

      const pAlpha = (0.15 + p.depth * 0.5) * p.spawnAlpha * twinkle
      const pulseScale = sectionPulseTimer > 0 ? 1 + (sectionPulseTimer / 30) * 0.5 : 1
      const drawSize = p.size * breathe * heroScale * pulseScale

      // soft glow
      ctx.beginPath()
      ctx.arc(drawX, drawY, drawSize * 2.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${pR},${pG},${pB},${pAlpha * 0.12})`
      ctx.fill()

      // depth-of-field: far = hollow rings (bokeh), mid = diamond, close = star
      if (p.depth < 0.33) {
        // far: bokeh ring (hollow circle)
        ctx.beginPath()
        ctx.arc(drawX, drawY, drawSize * 1.2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${pR},${pG},${pB},${pAlpha * 0.6})`
        ctx.lineWidth = 0.5
        ctx.stroke()
        // tiny center dot
        ctx.beginPath()
        ctx.arc(drawX, drawY, drawSize * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${pR},${pG},${pB},${pAlpha * 0.4})`
        ctx.fill()
      } else if (p.depth < 0.66) {
        // mid: diamond
        ctx.fillStyle = `rgba(${pR},${pG},${pB},${pAlpha})`
        const s = drawSize * 1.3
        ctx.beginPath()
        ctx.moveTo(drawX, drawY - s)
        ctx.lineTo(drawX + s, drawY)
        ctx.lineTo(drawX, drawY + s)
        ctx.lineTo(drawX - s, drawY)
        ctx.closePath()
        ctx.fill()
      } else {
        // close: 4-point star
        ctx.fillStyle = `rgba(${pR},${pG},${pB},${pAlpha})`
        const s = drawSize * 1.4
        const t = s * 0.3
        ctx.beginPath()
        ctx.moveTo(drawX, drawY - s)
        ctx.lineTo(drawX + t, drawY - t)
        ctx.lineTo(drawX + s, drawY)
        ctx.lineTo(drawX + t, drawY + t)
        ctx.lineTo(drawX, drawY + s)
        ctx.lineTo(drawX - t, drawY + t)
        ctx.lineTo(drawX - s, drawY)
        ctx.lineTo(drawX - t, drawY - t)
        ctx.closePath()
        ctx.fill()
      }

      // connections — only in hero
      if (inHero) {        const cx = (drawX / cellSize) | 0
        const cy = (drawY / cellSize) | 0
        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const cell = grid[(cx + ox) + ',' + (cy + oy)]
            if (!cell) continue
            for (let c = 0; c < cell.length; c++) {
              const other = cell[c]
              if (other.idx <= i) continue
              const p2 = particles[other.idx]
              if (Math.abs(p.depth - p2.depth) > 0.4) continue
              const cdx = drawX - other.drawX
              const cdy = drawY - other.drawY
              const cdistSq = cdx * cdx + cdy * cdy
              if (cdistSq < connectDistSq) {
                const cdist = Math.sqrt(cdistSq)
                const avgDepth = (p.depth + p2.depth) * 0.5
                const closeness = 1 - cdist / connectDist
                let opacity = closeness * (0.05 + avgDepth * 0.2) * Math.min(p.spawnAlpha, p2.spawnAlpha)
                const blue = (closeness * 80) | 0
                const green = (closeness * 40) | 0
                ctx.beginPath()
                ctx.moveTo(drawX, drawY)
                ctx.lineTo(other.drawX, other.drawY)
                ctx.strokeStyle = `rgba(${255 - blue},${255 - green},255,${opacity})`
                ctx.lineWidth = 0.3 + avgDepth * 0.4
                ctx.stroke()
              }
            }
          }
        }

        if (distSq < mouseDistSq && distSq > 0) {
          const dist = Math.sqrt(distSq)
          const opacity = (1 - dist / mouseDist) * 0.3 * p.spawnAlpha
          ctx.beginPath()
          ctx.moveTo(drawX, drawY)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(255,255,255,${opacity})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }

    // line particles — dots traveling along connections
    for (let li = lineParticles.length - 1; li >= 0; li--) {
      const lp = lineParticles[li]
      lp.t += lp.speed
      if (lp.t > 1) { lineParticles.splice(li, 1); continue }
      const lx = lp.ax + (lp.bx - lp.ax) * lp.t
      const ly = lp.ay + (lp.by - lp.ay) * lp.t
      const la = (1 - Math.abs(lp.t - 0.5) * 2) * 0.6
      ctx.beginPath()
      ctx.arc(lx, ly, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(134,93,255,${la})`
      ctx.fill()
    }

    // cursor trail — dashed neon (desktop only)
    if (!isMobile) {
    for (let ci = cursorTrail.length - 1; ci >= 0; ci--) {
      cursorTrail[ci].life -= 0.03
      if (cursorTrail[ci].life <= 0) cursorTrail.splice(ci, 1)
    }
    if (cursorTrail.length > 2) {
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.setLineDash([8, 6])
      ctx.beginPath()
      ctx.moveTo(cursorTrail[0].x, cursorTrail[0].y)
      for (let ci = 1; ci < cursorTrail.length; ci++) {
        ctx.lineTo(cursorTrail[ci].x, cursorTrail[ci].y)
      }
      const avgLife = cursorTrail[Math.floor(cursorTrail.length / 2)].life
      ctx.strokeStyle = `rgba(134,93,255,${avgLife * 0.1})`
      ctx.lineWidth = avgLife * 5
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cursorTrail[0].x, cursorTrail[0].y)
      for (let ci = 1; ci < cursorTrail.length; ci++) {
        ctx.lineTo(cursorTrail[ci].x, cursorTrail[ci].y)
      }
      ctx.strokeStyle = `rgba(${pR},${pG},${pB},${avgLife * 0.3})`
      ctx.lineWidth = avgLife * 1.2
      ctx.stroke()
      ctx.setLineDash([])
    }
    } // end !isMobile cursor trail

    // shooting stars
    shootingStarTimer++
    if (shootingStarTimer > nextShootingStarAt) {
      spawnShootingStar(Math.random() < 0.05)
      shootingStarTimer = 0
      nextShootingStarAt = 1800 + Math.random() * 5400
    }

    for (let si = shootingStars.length - 1; si >= 0; si--) {
      const s = shootingStars[si]
      s.z -= s.zSpeed
      s.life -= s.isMeteor ? 0.004 : 0.008
      const depthScale = s.z * s.z * s.z
      s.size = s.baseSize * (0.1 + depthScale * 3)
      const speed = s.baseSpeed * (0.2 + depthScale * 0.8)
      s.x += Math.cos(s.angle) * speed
      s.gravityVy += 0.03
      s.y += Math.sin(s.angle) * speed + s.gravityVy
      s.trail.push({ x: s.x, y: s.y, z: s.z })
      if (s.trail.length > s.maxTrail) s.trail.shift()

      // double trail + color gradient (white head → purple tail)
      if (s.trail.length > 2) {
        ctx.lineCap = 'round'
        for (let t = 1; t < s.trail.length - 1; t++) {
          const progress = t / s.trail.length
          const pz = s.trail[t].z || 0
          const ps = pz * pz * pz
          const alpha = progress * 0.6 * s.life * (0.1 + ps * 0.9)
          const tw = progress * s.baseSize * (0.1 + ps * 3) * 0.9
          // color gradient: tail=purple, head=white
          const tr = Math.round(134 + progress * 121)
          const tg = Math.round(93 + progress * 162)
          const tb = 255
          // main trail
          ctx.beginPath()
          ctx.moveTo(s.trail[t - 1].x, s.trail[t - 1].y)
          ctx.lineTo(s.trail[t].x, s.trail[t].y)
          ctx.strokeStyle = s.isMeteor ? `rgba(39,118,255,${alpha})` : `rgba(${tr},${tg},${tb},${alpha})`
          ctx.lineWidth = tw
          ctx.stroke()
          // second trail — thinner, offset
          ctx.beginPath()
          ctx.moveTo(s.trail[t - 1].x + 2, s.trail[t - 1].y - 1)
          ctx.lineTo(s.trail[t].x + 2, s.trail[t].y - 1)
          ctx.strokeStyle = s.isMeteor ? `rgba(100,180,255,${alpha * 0.4})` : `rgba(${tr},${tg},${tb},${alpha * 0.3})`
          ctx.lineWidth = tw * 0.4
          ctx.stroke()
        }
      }

      // head glow
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.size * (s.isMeteor ? 3 : 2), 0, Math.PI * 2)
      ctx.fillStyle = s.isMeteor
        ? `rgba(39,118,255,${0.1 * s.life * depthScale})`
        : `rgba(255,255,255,${0.08 * s.life * depthScale})`
      ctx.fill()
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${0.9 * s.life * depthScale})`
      ctx.fill()

      // sparkle debris on death
      if (s.life <= 0 || s.z <= 0) {
        spawnDebris(s.x, s.y)
        spawnLightning(s.x, s.y)
        shootingStars.splice(si, 1)
      }
    }

    // render debris
    for (let di = debris.length - 1; di >= 0; di--) {
      const d = debris[di]
      d.x += d.vx
      d.y += d.vy
      d.vx *= 0.96
      d.vy *= 0.96
      d.life -= 0.03
      if (d.life <= 0) { debris.splice(di, 1); continue }
      ctx.beginPath()
      ctx.arc(d.x, d.y, d.size * d.life, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${d.life * 0.6})`
      ctx.fill()
    }

    // lightning — random trigger
    lightningTimer++
    if (lightningTimer > nextLightningAt) {
      spawnLightning(Math.random() * width, Math.random() * height * 0.3)
      lightningTimer = 0
      nextLightningAt = 1800 + Math.random() * 1800
    }

    // render lightning — bolts everywhere, flash only in hero
    for (let li = lightning.length - 1; li >= 0; li--) {
      const l = lightning[li]
      if (l.flashAlpha > 0 && inHero) {
        ctx.fillStyle = `rgba(134,93,255,${l.flashAlpha * l.life})`
        ctx.fillRect(0, 0, width, height)
      }
      if (l.flashAlpha > 0) l.flashAlpha -= 0.04
      for (let layer = 0; layer < 3; layer++) {
        const widths = [6, 2.5, 0.8]
        const alphas = [0.15, 0.4, 0.9]
        const colors = ['134,93,255', '200,180,255', '255,255,255']
        // main bolt as single path
        ctx.beginPath()
        let started = false
        for (let si = 0; si < l.segments.length; si++) {
          const seg = l.segments[si]
          if (seg.branch) continue
          if (!started) { ctx.moveTo(seg.x1, seg.y1); started = true }
          ctx.lineTo(seg.x2, seg.y2)
        }
        ctx.strokeStyle = `rgba(${colors[layer]},${alphas[layer] * l.life})`
        ctx.lineWidth = widths[layer]
        ctx.lineJoin = 'bevel'
        ctx.lineCap = 'butt'
        ctx.stroke()
        // branches as separate paths
        for (let si = 0; si < l.segments.length; si++) {
          const seg = l.segments[si]
          if (!seg.branch) continue
          ctx.beginPath()
          ctx.moveTo(seg.x1, seg.y1)
          ctx.lineTo(seg.x2, seg.y2)
          ctx.strokeStyle = `rgba(${colors[layer]},${alphas[layer] * l.life * 0.5})`
          ctx.lineWidth = widths[layer] * 0.5
          ctx.stroke()
        }
      }
      l.life -= 0.05
      if (l.life <= 0) lightning.splice(li, 1)
    }

    ctx.globalAlpha = 1
    animId = requestAnimationFrame(draw)
  }

  function onMouseMove(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  function onMouseLeave() {
    mouse.x = -1000
    mouse.y = -1000
  }

  function onClick(e) {
    spawnLightning(e.clientX, e.clientY)
  }

  resize()
  createParticles()
  draw()

  function onVisibilityChange() {
    if (document.hidden) {
      cancelAnimationFrame(animId)
    } else {
      animId = requestAnimationFrame(draw)
    }
  }

  function onWindowBlur() {
    cancelAnimationFrame(animId)
  }

  function onWindowFocus() {
    animId = requestAnimationFrame(draw)
  }

  window.addEventListener('resize', () => { resize(); createParticles() })
  if (!isMobile) {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
  }
  window.addEventListener('click', onClick)
  window.addEventListener('blur', onWindowBlur)
  window.addEventListener('focus', onWindowFocus)
  document.addEventListener('visibilitychange', onVisibilityChange)

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
    if (!isMobile) {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
    window.removeEventListener('click', onClick)
    window.removeEventListener('blur', onWindowBlur)
    window.removeEventListener('focus', onWindowFocus)
    document.removeEventListener('visibilitychange', onVisibilityChange)
  }
}
