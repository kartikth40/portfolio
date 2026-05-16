// Links page configuration
var LINKS_CONFIG = {
  // ── Status pill ──────────────────────────────────────────
  // Set to true to show "Open to opportunities", false to hide
  statusActive: true,
  statusText: 'Open to opportunities',

  // ── Project link IDs to track clicks ─────────────────────
  trackedLinks: ['resume', 'portfolio', 'github', 'purrfect-focus', 'have-small-bytes', 'interview-master'],

  // ── Email ─────────────────────────────────────────────────
  email: 'kartikthakur.2409@gmail.com',

  // ── Firebase ──────────────────────────────────────────────
  firebase: {
    apiKey: 'AIzaSyDnOOa-rog5OWE8_gsExP_vvMLqtTpd420',
    authDomain: 'kartikthakur-me.firebaseapp.com',
    databaseURL: 'https://kartikthakur-me-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'kartikthakur-me',
    storageBucket: 'kartikthakur-me.firebasestorage.app',
    messagingSenderId: '523396796054',
    appId: '1:523396796054:web:0ab0b7bd48bd6982127cb7',
  },
};

// ─── Arch: self-draw + scroll effects ────────────────────────
(function () {
  var isMobile = window.innerWidth <= 520;
  var arch = document.querySelector('.arch-decoration');
  var archPath = document.getElementById('arch-path');
  var archFill = document.getElementById('arch-fill');
  var portalInner = document.getElementById('portal-inner');
  var portalMid = document.getElementById('portal-mid');
  var portalOuter = document.getElementById('portal-outer');
  var archGradTop = document.getElementById('arch-grad-top');
  var archGradMid = document.getElementById('arch-grad-mid');
  var vignette = document.getElementById('portal-vignette');
  var portalVoid = document.getElementById('portal-void');
  var contactCards = document.querySelectorAll('.contact-row .link-card');
  if (!arch || !archPath) return;

  var BASE = { lx: 80, rx: 920, ly: 480, cx: 500, cy: 20 };

  // ── 1. Self-drawing stroke ──────────────────────────────
  var length = archPath.getTotalLength();
  archPath.style.strokeDasharray = length;
  archPath.style.strokeDashoffset = length;
  setTimeout(function () {
    archPath.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
    archPath.style.strokeDashoffset = '0';
  }, 500);
  // ── Spring settle after draw completes ──────────────────
  setTimeout(function () {
    var springFrames = [
      { cy: BASE.cy,      duration: 0   },  // start
      { cy: BASE.cy + 30, duration: 200 },  // dip down
      { cy: BASE.cy - 12, duration: 180 },  // overshoot up
      { cy: BASE.cy + 6,  duration: 140 },  // settle down
      { cy: BASE.cy - 2,  duration: 120 },  // tiny overshoot
      { cy: BASE.cy,      duration: 100 },  // rest
    ];

    var frame = 0;
    var springCY = BASE.cy;

    function runSpring() {
      if (frame >= springFrames.length - 1) return;
      var from = springFrames[frame].cy;
      var to = springFrames[frame + 1].cy;
      var dur = springFrames[frame + 1].duration;
      var start = performance.now();

      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(1, elapsed / dur);
        // ease in-out
        var ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        springCY = from + (to - from) * ease;

        // Only update if not scrolled
        if (window.scrollY < 10) {
          var scrollY = window.scrollY;
          var t = Math.min(1, scrollY / 400);
          var lx = BASE.lx + (500 - BASE.lx) * t * 0.7;
          var rx = BASE.rx - (BASE.rx - 500) * t * 0.7;
          var cyOffset = -t * 120;
          var finalCY = springCY + cyOffset;
          var ly = BASE.ly - cyOffset * 0.3;
          var path = 'M ' + lx + ' 1000 L ' + lx + ' ' + ly +
                     ' Q ' + lx + ' ' + finalCY + ' ' + BASE.cx + ' ' + finalCY +
                     ' Q ' + rx + ' ' + finalCY + ' ' + rx + ' ' + ly +
                     ' L ' + rx + ' 1000';
          archPath.setAttribute('d', path);
          if (archFill) archFill.setAttribute('d', path);
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          frame++;
          runSpring();
        }
      }
      requestAnimationFrame(tick);
    }

    runSpring();
  }, 2400); // after draw completes (500ms delay + 1800ms draw + 100ms buffer)

  function lerp(a, b, t) { return a + (b - a) * t; }

  function scrollColor(t) {
    var r, g, b, u;
    if (t < 0.5) {
      u = t / 0.5;
      r = Math.round(lerp(134, 64, u));
      g = Math.round(lerp(93, 224, u));
      b = Math.round(lerp(255, 208, u));
    } else {
      u = (t - 0.5) / 0.5;
      r = Math.round(lerp(64, 255, u));
      g = Math.round(lerp(224, 160, u));
      b = Math.round(lerp(208, 40, u));
    }
    return { r: r, g: g, b: b };
  }

  function buildPath(lx, rx, cyOffset) {
    var finalCY = BASE.cy + cyOffset;
    var ly = BASE.ly - cyOffset * 0.3;
    return 'M ' + lx + ' 1000 ' +
           'L ' + lx + ' ' + ly + ' ' +
           'Q ' + lx + ' ' + finalCY + ' ' + BASE.cx + ' ' + finalCY + ' ' +
           'Q ' + rx + ' ' + finalCY + ' ' + rx + ' ' + ly + ' ' +
           'L ' + rx + ' 1000';
  }

  // Optimization 2: skip arch update when scroll hasn't changed
  var lastScrollY = -1;
  var prevScrollY = 0;
  var wasScrolled = false;
  var archTabActive = true;
  document.addEventListener('visibilitychange', function () {
    archTabActive = !document.hidden;
  });

  function triggerSpring() {
    var frame = 0;
    var springCY = BASE.cy;
    var springFrames = [
      { cy: BASE.cy,      duration: 0   },
      { cy: BASE.cy + 20, duration: 160 },
      { cy: BASE.cy - 8,  duration: 140 },
      { cy: BASE.cy + 3,  duration: 100 },
      { cy: BASE.cy,      duration: 80  },
    ];
    function runSpring() {
      if (frame >= springFrames.length - 1) return;
      var from = springFrames[frame].cy;
      var to = springFrames[frame + 1].cy;
      var dur = springFrames[frame + 1].duration;
      var start = performance.now();
      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(1, elapsed / dur);
        var ease = progress < 0.5 ? 2*progress*progress : 1 - Math.pow(-2*progress+2,2)/2;
        springCY = from + (to - from) * ease;
        if (window.scrollY < 10) {
          var path = 'M ' + BASE.lx + ' 1000 L ' + BASE.lx + ' ' + BASE.ly +
                     ' Q ' + BASE.lx + ' ' + springCY + ' ' + BASE.cx + ' ' + springCY +
                     ' Q ' + BASE.rx + ' ' + springCY + ' ' + BASE.rx + ' ' + BASE.ly +
                     ' L ' + BASE.rx + ' 1000';
          archPath.setAttribute('d', path);
          if (archFill) archFill.setAttribute('d', path);
        }
        if (progress < 1) requestAnimationFrame(tick);
        else { frame++; runSpring(); }
      }
      requestAnimationFrame(tick);
    }
    runSpring();
  }

  function animate() {
    if (!archTabActive) { requestAnimationFrame(animate); return; }
    var scrollY = window.scrollY;
    if (scrollY === lastScrollY) {
      requestAnimationFrame(animate);
      return;
    }
    // Detect scroll back to top - trigger bounce
    if (scrollY < 10 && prevScrollY >= 10 && wasScrolled) {
      wasScrolled = false;
      setTimeout(triggerSpring, 50);
    }
    if (scrollY >= 10) wasScrolled = true;
    prevScrollY = scrollY;
    lastScrollY = scrollY;

    // On mobile: only handle scroll-to-top bounce, skip expensive updates
    if (isMobile) { requestAnimationFrame(animate); return; }

    var t = Math.min(1, scrollY / 400);

    var lx = BASE.lx + (500 - BASE.lx) * t * 0.7;
    var rx = BASE.rx - (BASE.rx - 500) * t * 0.7;
    var cyOffset = -t * 120;
    var scale = 1 - t * 0.15;
    var opacity = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;

    var newPath = buildPath(lx, rx, cyOffset);
    archPath.setAttribute('d', newPath);
    if (archFill) archFill.setAttribute('d', newPath);

    var col = scrollColor(t);
    var colStr = 'rgba(' + col.r + ',' + col.g + ',' + col.b + ',';
    if (archGradTop) archGradTop.setAttribute('stop-color', colStr + '0.65)');
    if (archGradMid) archGradMid.setAttribute('stop-color', colStr + '0.25)');

    if (portalInner && portalMid && portalOuter) {
      var peak = t < 0.6 ? t / 0.6 : 1 - (t - 0.6) / 0.4;
      peak = Math.max(0, Math.min(1, peak));
      portalInner.setAttribute('stop-color', colStr + (peak * 0.03) + ')');
      portalMid.setAttribute('stop-color', colStr + (peak * 0.06) + ')');
      portalOuter.setAttribute('stop-color', 'rgba(64,224,208,' + (peak * 0.03) + ')');
    }

    if (vignette) {
      vignette.style.opacity = 0;
    }

    // Contact cards border glow - only purple, never amber
    if (contactCards.length) {
      var pulseIntensity = t > 0.75 ? (t - 0.75) / 0.25 : 0;
      contactCards.forEach(function (card) {
        // Always use purple for contact cards regardless of arch color
        card.style.borderColor = pulseIntensity > 0
          ? 'rgba(134,93,255,' + (0.15 + pulseIntensity * 0.35) + ')'
          : '';
      });
    }

    arch.style.transform = 'translateX(-50%) scale(' + scale + ')';
    arch.style.opacity = opacity;
    requestAnimationFrame(animate);
  }

  animate();
})();

// ─── Event Stream animation ───────────────────────────────────
(function () {
  if (window.innerWidth <= 520) return; // skip on mobile
  var canvas = document.getElementById('stream-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var dots = [];
  var pipeLeft, pipeRight, pipeCY, pipeH;

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    // Map SVG pipe coords to canvas coords
    // SVG viewBox 600x80, pipe from x=30 to x=570, cy=40, h=36
    var scaleX = rect.width / 600;
    var scaleY = rect.height / 80;
    pipeLeft  = 30  * scaleX;
    pipeRight = 570 * scaleX;
    pipeCY    = 40  * scaleY;
    pipeH     = 18  * scaleY; // half-height of pipe interior
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  var tabActive = true;
  document.addEventListener('visibilitychange', function () {
    tabActive = !document.hidden;
  });

  // Spawn dots at varying intervals
  function spawnDot(burst) {
    var size = burst ? Math.random() * 5 + 2 : Math.random() * 3.5 + 1.5;
    var yOffset = (Math.random() - 0.5) * pipeH * 0.7;
    var speed = (burst ? 0.9 : 0.35) + Math.random() * 0.5;
    speed *= (canvas.width / 400);
    var alpha = burst ? 0.7 + Math.random() * 0.3 : 0.4 + Math.random() * 0.6;
    // ~12% chance of heart on normal dots; LinkedIn burst = always heart
    var isHeart = burst ? true : Math.random() < 0.12;
    dots.push({
      x: pipeLeft,
      y: pipeCY + yOffset,
      size: size,
      speed: speed,
      alpha: alpha,
      phase: Math.random() * Math.PI * 2,
      isHeart: isHeart,
      grd: null
    });
  }

  // Draw a heart shape centered at (0,0) with given size
  function drawHeart(ctx, size) {
    var s = size * 0.9;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s * 0.1, s * 0.1, -s * 0.6, -s * 0.2, -s * 0.5, -s * 0.5);
    ctx.bezierCurveTo(-s * 0.4, -s * 0.9, 0, -s * 0.7, 0, -s * 0.3);
    ctx.bezierCurveTo(0, -s * 0.7, s * 0.4, -s * 0.9, s * 0.5, -s * 0.5);
    ctx.bezierCurveTo(s * 0.6, -s * 0.2, s * 0.1, s * 0.1, 0, s * 0.3);
    ctx.closePath();
  }

  var spawnTimer = 0;
  var lastTime = 0;

  function animate(now) {
    requestAnimationFrame(animate);
    if (!tabActive) return; // stop all work when tab hidden
    var dt = Math.min(now - lastTime, 50);
    lastTime = now;
    spawnTimer += dt;

    // Spawn a new dot every ~120ms
    if (spawnTimer > 120) {
      spawnDot();
      spawnTimer = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = dots.length - 1; i >= 0; i--) {      var d = dots[i];
      d.x += d.speed * (dt / 16) * (tabActive ? 1 : 0.2);
      d.phase += 0.05;

      if (d.x > pipeRight - 5) {
        dots.splice(i, 1);
        continue;
      }

      var progress = (d.x - pipeLeft) / (pipeRight - pipeLeft);
      // Fade in over first 8%, fade out over last 15% (before right ellipse)
      var edgeFade = Math.min(progress / 0.08, 1) * Math.min((1 - progress) / 0.15, 1);
      edgeFade = Math.max(0, edgeFade);
      var pulse = 1 + Math.sin(d.phase) * 0.15;
      var r = d.size * pulse;

      // Optimization 1: create gradient once, reuse (translate canvas instead)
      ctx.save();
      ctx.translate(d.x, d.y);
      if (!d.grd || Math.abs(r - d.lastR) > 0.5) {
        d.grd = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 3);
        d.grd.addColorStop(0, 'rgba(196,177,255,0.9)');
        d.grd.addColorStop(0.4, 'rgba(134,93,255,0.4)');
        d.grd.addColorStop(1, 'rgba(134,93,255,0)');
        d.lastR = r;
      }
      ctx.globalAlpha = d.alpha * edgeFade;
      if (d.isHeart) {
        // Heart: soft glow behind + filled heart
        ctx.beginPath();
        ctx.arc(0, 0, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = d.grd;
        ctx.fill();
        drawHeart(ctx, r * 1.6);
        ctx.fillStyle = 'rgba(255,180,200,0.85)';
        ctx.fill();
      } else {
        // Circle dot
        ctx.beginPath();
        ctx.arc(0, 0, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = d.grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(220,210,255,0.9)';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    }

  }

  // Pre-populate with some dots so it doesn't start empty
  for (var i = 0; i < 12; i++) {
    spawnDot();
    dots[dots.length - 1].x = pipeLeft + (pipeRight - pipeLeft) * (i / 12);
  }

  requestAnimationFrame(animate);

  // LinkedIn hover burst
  var linkedinCard = document.querySelector('a[href*="linkedin"]');
  if (linkedinCard) {
    linkedinCard.addEventListener('mouseenter', function () {
      for (var i = 0; i < 8; i++) {
        setTimeout(function() { spawnDot(true); }, Math.random() * 200);
      }
    });
  }
})();
// ─── Wave planes converging to terminal ──────────────────────
(function () {
  if (window.innerWidth <= 520) return;
  var svg = document.getElementById('wave-svg');
  var wrap = document.querySelector('.git-graph-wrap');
  var center = document.getElementById('view-count');
  if (!svg || !wrap || !center) return;

  var W, H, cx, cy;
  var waves = [];
  var t = 0;
  var waveTabActive = true;
  // Throttle to 30fps on low-end devices (< 4 cores)
  var isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  var frameSkip = isLowEnd ? 2 : 1;
  var frameCount = 0;

  document.addEventListener('visibilitychange', function () {
    waveTabActive = !document.hidden;
  });

  function resize() {
    var rect = wrap.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    cx = W / 2;
    cy = H / 2;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    buildWaves();
    buildFeedLine();
  }

  // Each wave: a filled path from edge to terminal, layered for depth
  var waveConfigs = [
    // Left waves - outer dim, inner bright
    { side: 'left', yStart: 0.05, amp: 0.10, phase: 0,    opacity: 0.06,  strokeOp: 0.18,  color: '134,93,255' },
    { side: 'left', yStart: 0.18, amp: 0.09, phase: 0.8,  opacity: 0.10,  strokeOp: 0.32,  color: '196,177,255' },
    { side: 'left', yStart: 0.32, amp: 0.07, phase: 1.6,  opacity: 0.16,  strokeOp: 0.50,  color: '196,177,255' },
    // Right waves - outer dim, inner bright
    { side: 'right', yStart: 0.05, amp: 0.10, phase: 0.4,  opacity: 0.06,  strokeOp: 0.18,  color: '134,93,255' },
    { side: 'right', yStart: 0.18, amp: 0.09, phase: 1.2,  opacity: 0.10,  strokeOp: 0.32,  color: '180,150,255' },
    { side: 'right', yStart: 0.32, amp: 0.07, phase: 2.0,  opacity: 0.16,  strokeOp: 0.50,  color: '196,177,255' },
  ];

  function buildWaves() {
    svg.innerHTML = '';
    waves = [];
    // Add blur filter defs
    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var filter1 = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter1.setAttribute('id', 'waveBlur1');
    var blur1 = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    blur1.setAttribute('stdDeviation', '3');
    filter1.appendChild(blur1);
    var filter2 = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter2.setAttribute('id', 'waveBlur2');
    var blur2 = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    blur2.setAttribute('stdDeviation', '1.2');
    filter2.appendChild(blur2);
    defs.appendChild(filter1);
    defs.appendChild(filter2);
    svg.appendChild(defs);

    waveConfigs.forEach(function (cfg, i) {
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', 'rgba(' + cfg.color + ',' + cfg.opacity + ')');
      path.setAttribute('stroke', 'rgba(' + cfg.color + ',' + cfg.strokeOp + ')');
      path.setAttribute('stroke-width', '0.8');
      // Outer waves (index 0,3) get most blur, middle (1,4) get slight blur, inner (2,5) sharp
      var blurIdx = i % 3;
      if (blurIdx === 0) path.setAttribute('filter', 'url(#waveBlur1)');
      else if (blurIdx === 1) path.setAttribute('filter', 'url(#waveBlur2)');
      svg.appendChild(path);
      waves.push({ el: path, cfg: cfg });
    });
  }

  var feedSvg = document.getElementById('feed-svg');
  var feedLine = null;
  var feedDot = null;

  function buildFeedLine() {
    if (!feedSvg) return;
    feedSvg.innerHTML = '';
    var svgH = feedSvg.offsetHeight || (H + 80);
    feedSvg.setAttribute('viewBox', '0 0 ' + W + ' ' + svgH);
    feedSvg.setAttribute('width', W);
    feedSvg.setAttribute('height', svgH);

    feedLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    feedLine.setAttribute('x1', cx);
    feedLine.setAttribute('y1', 0);
    feedLine.setAttribute('x2', cx);
    feedLine.setAttribute('y2', svgH - H + cy);
    feedLine.setAttribute('stroke', 'rgba(64,224,208,0.2)');
    feedLine.setAttribute('stroke-width', '1');
    feedLine.setAttribute('stroke-dasharray', '3,6');
    feedSvg.appendChild(feedLine);

    feedDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    feedDot.setAttribute('r', '2');
    feedDot.setAttribute('fill', 'rgba(64,224,208,0.7)');
    feedDot.setAttribute('cx', cx);
    feedDot.setAttribute('cy', 0);
    feedSvg.appendChild(feedDot);
  }

  // A - Breathing: amplitude multiplier oscillates slowly
  var breathPhase = 0;
  var surgeActive = false;
  var surgeT = 0;

  // E - Convergence pulse: waves slowly draw inward then relax back
  window._waveConverge = function () {
    surgeActive = true;
    surgeT = 0;
  };

  function buildPath(cfg, time) {
    var steps = 40;
    var termX = cx;
    var termY = cy;
    var startX = cfg.side === 'left' ? 0 : W;

    // E - convergence: yStart pulls toward cy during surge
    // surge follows: ease in (0→0.4), hold (0.4→0.6), ease out (0.6→1)
    var convergeFactor = 0;
    if (surgeActive) {
      if (surgeT < 0.4) {
        convergeFactor = surgeT / 0.4;
      } else if (surgeT < 0.6) {
        convergeFactor = 1;
      } else {
        convergeFactor = 1 - (surgeT - 0.6) / 0.4;
      }
      convergeFactor = convergeFactor * convergeFactor; // ease
    }

    var baseY = cfg.yStart * H;
    var startY = baseY + (cy - baseY) * convergeFactor * 0.5;

    // A - breathing multiplier
    var breathMult = 1 + Math.sin(breathPhase + cfg.phase * 0.3) * 0.4;
    // During convergence, slightly reduce amplitude for cleaner look
    var ampMult = breathMult * (1 - convergeFactor * 0.3);

    // Build top edge of wave (from edge to terminal)
    var pts = [];
    for (var i = 0; i <= steps; i++) {
      var progress = i / steps;
      var x = startX + (termX - startX) * progress;
      // Wave amplitude decreases as it approaches terminal
      var waveAmp = cfg.amp * H * (1 - progress * 0.8) * ampMult;
      var y = startY + (termY - startY) * progress
              + Math.sin(progress * Math.PI * 2.5 + time + cfg.phase) * waveAmp;
      pts.push([x, y]);
    }

    // Build bottom edge (slightly offset, reversed)
    var bpts = [];
    for (var i = steps; i >= 0; i--) {
      var progress = i / steps;
      var x = startX + (termX - startX) * progress;
      var waveAmp = cfg.amp * H * (1 - progress * 0.8) * 0.6 * ampMult;
      var y = startY + (termY - startY) * progress
              + Math.sin(progress * Math.PI * 2.5 + time + cfg.phase + 0.5) * waveAmp
              + H * 0.04;
      bpts.push([x, y]);
    }

    var all = pts.concat(bpts);
    var d = 'M ' + all[0][0] + ' ' + all[0][1];
    for (var i = 1; i < all.length; i++) {
      d += ' L ' + all[i][0] + ' ' + all[i][1];
    }
    d += ' Z';
    return d;
  }

  buildWaves();
  resize();
  window.addEventListener('resize', resize, { passive: true });

  var lastTime = 0;
  function animate(now) {
    requestAnimationFrame(animate);
    if (!waveTabActive) return;
    // Throttle: skip frames on low-end devices
    frameCount++;
    if (frameCount % frameSkip !== 0) return;

    var dt = Math.min(now - lastTime, 50);
    lastTime = now;
    t += dt * 0.0008;

    // A - advance breath phase slowly (~5s cycle)
    breathPhase += dt * 0.00025;

    // E - advance surge and deactivate when done
    if (surgeActive) {
      surgeT += dt * 0.0004;
      if (surgeT >= 1) { surgeActive = false; surgeT = 0; }
    }

    waves.forEach(function (w) {
      w.el.setAttribute('d', buildPath(w.cfg, t));
    });

    // Animate feed dot down the line
    var feedT = (t * 0.3) % 1;
    var feedFade = feedT < 0.1 ? feedT / 0.1 : feedT > 0.85 ? (1 - feedT) / 0.15 : 1;
    if (feedDot) {
      var svgH = feedSvg ? (feedSvg.offsetHeight || H + 80) : H + 80;
      var lineEnd = svgH - H + cy;
      feedDot.setAttribute('cy', feedT * lineEnd);
      feedDot.setAttribute('opacity', feedFade * 0.8);
    }
  }
  requestAnimationFrame(animate);
})();

(function () {
  var latencyEl = document.getElementById('sys-latency');
  var uptimeEl = document.getElementById('sys-uptime');
  if (!latencyEl || !uptimeEl) return;

  // Latency: fluctuates realistically
  var baseLatency = 28 + Math.floor(Math.random() * 20);
  function updateLatency() {
    var jitter = Math.floor((Math.random() - 0.5) * 8);
    latencyEl.textContent = Math.max(12, baseLatency + jitter) + 'ms';
  }

  // Session timer: counts up from page load
  var sessionStart = Date.now();
  function updateSession() {
    var elapsed = Math.floor((Date.now() - sessionStart) / 1000);
    var h = Math.floor(elapsed / 3600);
    var m = Math.floor((elapsed % 3600) / 60);
    var s = elapsed % 60;
    if (h > 0) {
      uptimeEl.textContent = h + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    } else {
      uptimeEl.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    }
  }

  updateLatency();
  updateSession();
  setInterval(updateLatency, 3000 + Math.random() * 2000);
  setInterval(updateSession, 1000);
})();

// ─── Arch particles ───────────────────────────────────────────
(function () {
  var archPath = document.getElementById('arch-path');
  if (!archPath) return;

  var particles = [];
  var MAX = 1;
  // Cache path length — getTotalLength() is expensive, don't call every frame
  var cachedLen = null;
  var particleTabActive = true;
  document.addEventListener('visibilitychange', function () {
    particleTabActive = !document.hidden;
  });

  function spawnParticle() {
    if (particles.length >= MAX) return;
    particles.push({ t: 0, speed: 0.0005 + Math.random() * 0.0003 });
  }

  // First particle after arch draws, then very infrequently
  setTimeout(spawnParticle, 3000);
  setInterval(function () {
    if (particles.length < MAX) spawnParticle();
  }, 8000 + Math.random() * 6000);

  var svgEl = document.getElementById('arch-svg');
  var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('r', '2');
  dot.setAttribute('fill', 'rgba(196,177,255,0.65)');
  dot.setAttribute('opacity', '0');
  svgEl.appendChild(dot);

  var lastTime = 0;
  function animate(now) {
    if (!particleTabActive) { requestAnimationFrame(animate); return; }
    var dt = Math.min(now - lastTime, 50);
    lastTime = now;
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.t += p.speed * (dt / 16);
      if (p.t > 1) { particles.splice(i, 1); dot.setAttribute('opacity', '0'); continue; }
      try {
        // Use cached length — only recalculate if path changed (scroll)
        if (!cachedLen) cachedLen = archPath.getTotalLength();
        var pt = archPath.getPointAtLength(p.t * cachedLen);
        var fade = p.t < 0.04 ? p.t / 0.04 : p.t > 0.96 ? (1 - p.t) / 0.04 : 1;
        dot.setAttribute('cx', pt.x);
        dot.setAttribute('cy', pt.y);
        dot.setAttribute('opacity', fade * 0.7);
      } catch(e) {}
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();

function formatCount(n) {
  if (n >= 1000000) return parseFloat((n / 1000000).toFixed(2)) + 'M';
  if (n >= 1000) return parseFloat((n / 1000).toFixed(2)) + 'k';
  return n.toString();
}

(function () {
  var pill = document.querySelector('.status-pill');
  if (!pill) return;
  if (LINKS_CONFIG.statusActive) {
    pill.setAttribute('data-active', 'true');
    var textEl = pill.querySelector('.status-text');
    if (textEl) textEl.textContent = LINKS_CONFIG.statusText;
  } else {
    pill.setAttribute('data-active', 'false');
  }
})();

// ─── Email copy ───────────────────────────────────────────────
window.copyEmail = function () {
  navigator.clipboard.writeText(LINKS_CONFIG.email).then(function () {
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }).catch(function () {
    window.location.href = 'mailto:' + LINKS_CONFIG.email;
  });
};

// ─── Firebase init + shared db ───────────────────────────────
function initFirebase() {
  import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js').then(function (firebaseApp) {
    return import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js').then(function (db) {
      var app = firebaseApp.initializeApp(LINKS_CONFIG.firebase, 'links');
      var database = db.getDatabase(app);

      // ── Visitor counter ──────────────────────────────────
      var badge = document.getElementById('view-count');
      var visitorId = getVisitorId();
      var visitorRef = db.ref(database, 'linksViews/visitors/' + visitorId);
      var totalRef = db.ref(database, 'linksViews/total');

      db.get(visitorRef).then(function (snapshot) {
        if (!snapshot.exists()) {
          // New visitor - increment and store full record
          return db.runTransaction(totalRef, function (current) {
            return (current || 0) + 1;
          }).then(function (result) {
            var num = result.snapshot.val();
            var today = new Date().toISOString().split('T')[0];
            var scr = window.screen ? window.screen.width + 'x' + window.screen.height : null;
            db.set(visitorRef, { num: num, firstVisit: today, lastVisit: today, visits: 1, screens: scr ? [scr] : [] });
            sessionStorage.setItem('visited_links_' + visitorId, '1');
            showVisitorCount(badge, num, num);
          });
        } else {
          var val = snapshot.val();
          var visitorNum = typeof val === 'object' && val !== null && val.num
            ? val.num
            : typeof val === 'number' ? val : null;
          // Calculate visits for display — only increment if new session
          var sessionKey = 'visited_links_' + visitorId;
          var alreadyCountedThisSession = sessionStorage.getItem(sessionKey);
          var displayVisits = null;
          // Update lastVisit and visits for returning visitor
          if (val && typeof val === 'object') {
            var today = new Date().toISOString().split('T')[0];
            var newVisits = alreadyCountedThisSession ? (val.visits || 1) : (val.visits || 1) + 1;
            displayVisits = newVisits;
            if (!alreadyCountedThisSession) sessionStorage.setItem(sessionKey, '1');
            db.set(visitorRef, Object.assign({}, val, {
              lastVisit: today,
              visits: newVisits,
              screens: (function() {
                var list = Array.isArray(val.screens) ? val.screens.slice() : (val.screen ? [val.screen] : []);
                var cur = window.screen ? window.screen.width + 'x' + window.screen.height : null;
                if (cur && list.indexOf(cur) === -1) list.push(cur);
                return list;
              })()
            }));
          }
          return db.get(totalRef).then(function (snap) {
            showVisitorCount(badge, snap.val() || 0, visitorNum, displayVisits);
          });
        }
      }).catch(function (err) { console.error('Links view count error:', err); });

      // ── Click counters ───────────────────────────────────
      var POINTER_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="rgba(196,177,255,0.9)" stroke="none" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-bottom:1px"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>';

      LINKS_CONFIG.trackedLinks.forEach(function (linkId) {
        var clickRef = db.ref(database, 'linkClicks/' + linkId);
        var countEl = document.getElementById('count-' + linkId);
        var card = document.querySelector('[data-link-id="' + linkId + '"]');
        if (!card || !countEl) return;

        function updateCount(count) {
          countEl.innerHTML = POINTER_SVG + formatCount(count);
          countEl.classList.add('has-count');
        }

        db.get(clickRef).then(function (snap) {
          var count = snap.val() || 0;
          if (count > 0) updateCount(count);
        });

        card.addEventListener('click', function () {
          db.runTransaction(clickRef, function (current) {
            return (current || 0) + 1;
          }).then(function (result) {
            var newCount = result.snapshot.val() || 0;
            if (newCount > 0) updateCount(newCount);
          }).catch(function () {});
        });
      });
    });
  });
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(initFirebase, { timeout: 3000 });
} else {
  setTimeout(initFirebase, 300);
}

// ─── Helpers ─────────────────────────────────────────────────
function getVisitorId() {
  var id = localStorage.getItem('visitor_id');
  if (!id) {
    id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('visitor_id', id);
  }
  return id;
}

function showVisitorCount(badge, count, visitorNum, visits) {
  var countText = document.getElementById('git-count-text');
  if (countText) {
    countText.innerHTML = formatCount(count);
    // Fade in the count
    requestAnimationFrame(function () {
      countText.classList.add('loaded');
    });
    badge.classList.add('visible');
    badge.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.07), 0 0 36px rgba(134,93,255,0.25), 0 8px 40px rgba(0,0,0,0.7)';
    setTimeout(function () { badge.style.boxShadow = ''; }, 800);
    if (window._waveConverge) window._waveConverge();
  }

  if (visitorNum) {
    var line = document.getElementById('visitor-num-line');
    var text = document.getElementById('visitor-num-text');
    if (line && text) {
      text.textContent = 'you are visitor #' + visitorNum;
      setTimeout(function () { line.classList.add('show'); }, 400);
    }
  }

  // Show returning visitor line only if visits > 1
  if (visits && visits > 1) {
    var retLine = document.getElementById('visitor-return-line');
    var retText = document.getElementById('visitor-return-text');
    if (retLine && retText) {
      retText.textContent = 'returning · ' + visits + ' visits';
      setTimeout(function () { retLine.classList.add('show'); }, 700);
    }
  }

  // Mobile pill — show counts on small screens
  var mobilePill = document.getElementById('mobile-counts');
  var mobileCount = document.getElementById('mobile-count-text');
  var mobileVisitor = document.getElementById('mobile-visitor-text');
  if (mobilePill && mobileCount && window.innerWidth <= 520) {
    mobileCount.textContent = formatCount(count) + ' visitors';
    if (visitorNum && mobileVisitor) {
      mobileVisitor.textContent = '#' + visitorNum;
    }
    mobilePill.style.display = 'flex';
    mobilePill.classList.add('visible');
  }
}
