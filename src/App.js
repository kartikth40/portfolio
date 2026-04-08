import { useEffect, useRef, useState, useCallback } from 'react'
import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Experience from './components/Experience/index'
import Projects from './components/Projects/index'
import Footer from './components/Footer/index'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop/index'
import { ParticleCanvas, AmbientBlobs } from './components/Home/styles'
import { initParticles, getAnimationsEnabled, setAnimationsEnabled, isMobileDevice } from './brain/homePageLogic'
import { ToggleBtn, AnimHint, FpsGaugeWrapper, FpsNumber } from './App.styles'

function useFps() {
  const [fps, setFps] = useState(null)
  const maxRef = useRef(60)

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let rafId

    function tick() {
      frameCount++
      const now = performance.now()
      if (now - lastTime >= 500) {
        const current = Math.round(frameCount / ((now - lastTime) / 1000))
        if (current > maxRef.current) maxRef.current = current
        setFps(current)
        frameCount = 0
        lastTime = now
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return { fps, maxFps: maxRef }
}

function App() {
  const canvasRef = useRef(null)
  const cleanupRef = useRef(null)
  const [animOn, setAnimOn] = useState(getAnimationsEnabled())
  const { fps, maxFps } = useFps()
  const [showHint, setShowHint] = useState(false)
  const [hintHiding, setHintHiding] = useState(false)
  const [hintInstant, setHintInstant] = useState(false)

  useEffect(() => {
    if (isMobileDevice) return
    const seen = localStorage.getItem('anim-hint-seen')
    if (!seen && getAnimationsEnabled()) {
      setShowHint(true)
      setHintInstant(false)
      localStorage.setItem('anim-hint-seen', '1')
      const timer = setTimeout(() => {
        setHintHiding(true)
        setTimeout(() => setShowHint(false), 300)
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    window.scroll({ top: 0 })
    document.documentElement.setAttribute('data-anim', getAnimationsEnabled() ? 'on' : 'off')
    function handleScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0
      const hueShift = ratio * 15
      document.documentElement.style.setProperty('--scroll-hue', `${hueShift}deg`)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const startParticles = useCallback(() => {
    if (canvasRef.current) {
      if (cleanupRef.current) cleanupRef.current()
      const cleanup = initParticles(canvasRef.current, () => {
        setShowHint(true)
        setHintHiding(false)
        setHintInstant(true)
        setTimeout(() => {
          setHintHiding(true)
          setTimeout(() => setShowHint(false), 300)
        }, 8000)
      })
      cleanupRef.current = cleanup
    }
  }, [])

  useEffect(() => {
    if (!getAnimationsEnabled()) return
    const timer = setTimeout(startParticles, 3500)
    return () => {
      clearTimeout(timer)
      if (cleanupRef.current) cleanupRef.current()
    }
  }, [startParticles])

  function toggleAnimations(e) {
    e.stopPropagation()
    const next = !animOn
    setAnimOn(next)
    setAnimationsEnabled(next)
    document.documentElement.style.setProperty('--anim-play', next ? 'running' : 'paused')

    if (next) {
      document.documentElement.setAttribute('data-anim', 'on')
      startParticles()
    } else {
      document.documentElement.setAttribute('data-anim', 'off')
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d')
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }
  }

  const fpsGauge = fps !== null && (() => {
    const max = maxFps.current
    const clamped = Math.min(Math.max(fps, 0), max)
    const ratio = clamped / max
    const circumference = 2 * Math.PI * 18
    const offset = circumference * (1 - ratio)
    const color = ratio >= 0.8 ? 'rgba(180,150,255,0.9)' : ratio >= 0.4 ? 'rgba(200,160,255,0.7)' : 'rgba(255,120,120,0.8)'
    return (
      <FpsGaugeWrapper>
        <svg viewBox="0 0 40 40">
          <circle className="gauge-bg" cx="20" cy="20" r="18" />
          <circle
            className="gauge-fill"
            cx="20" cy="20" r="18"
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <FpsNumber style={{ color }}>{fps}</FpsNumber>
      </FpsGaugeWrapper>
    )
  })()

  return (
    <div>
      {!isMobileDevice && (
        <>
          <ToggleBtn
            $on={animOn}
            onClick={toggleAnimations}
            title={animOn ? 'Disable animations' : 'Enable animations'}
            aria-label={animOn ? 'Disable animations' : 'Enable animations'}
          >
            ✦
          </ToggleBtn>
          {showHint && (
            <AnimHint
              $instant={hintInstant}
              className={hintHiding ? 'hiding' : ''}
              onClick={() => { setHintHiding(true); setTimeout(() => setShowHint(false), 300) }}
            >
              lagging ? toggle animations here
            </AnimHint>
          )}
          <ParticleCanvas ref={canvasRef} />
          <AmbientBlobs aria-hidden="true" style={{ display: animOn ? 'block' : 'none' }} />
        </>
      )}
      {fpsGauge}
      <Header />
      <Home />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
