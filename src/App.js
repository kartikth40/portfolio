import { useEffect, useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
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

const ToggleBtn = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  background: rgba(13, 13, 20, 0.7);
  border: 1px solid rgba(134, 93, 255, 0.3);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: ${({ $on }) => $on ? 'rgba(134,93,255,0.9)' : 'rgba(255,255,255,0.3)'};
  transition: 0.2s all;

  &:hover {
    border-color: rgba(134, 93, 255, 0.6);
    color: ${({ $on }) => $on ? 'rgba(134,93,255,1)' : 'rgba(255,255,255,0.6)'};
  }
`

function App() {
  const canvasRef = useRef(null)
  const cleanupRef = useRef(null)
  const [animOn, setAnimOn] = useState(getAnimationsEnabled())

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
      // clean up previous instance
      if (cleanupRef.current) cleanupRef.current()
      const cleanup = initParticles(canvasRef.current)
      cleanupRef.current = cleanup
    }
  }, [])

  // initial start with delay for loading screen
  useEffect(() => {
    if (!getAnimationsEnabled()) return
    const timer = setTimeout(startParticles, 1500)
    return () => {
      clearTimeout(timer)
      if (cleanupRef.current) cleanupRef.current()
    }
  }, [startParticles])

  function toggleAnimations(e) {
    e.stopPropagation() // prevent click lightning
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
      // clear canvas
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d')
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }
  }

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
          <ParticleCanvas ref={canvasRef} />
          <AmbientBlobs aria-hidden="true" style={{ display: animOn ? 'block' : 'none' }} />
        </>
      )}
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
