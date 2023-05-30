import React, { useEffect } from 'react'
import useWindowSize from '../../brain/useWindowSize'
import { size as devSize } from '../../juice/mediaQueries'
import {
  Container,
  Hero,
  HeroSecondary,
  Logo,
  ScrollAssist,
  Spinner,
} from './styles'
import {
  handlePointerAnimations,
  handleTouchAnimations,
} from '../../brain/homePageLogic.js'

function Home() {
  let windowSize = useWindowSize()

  useEffect(() => {
    document.body.classList.add('no-scroll')
    setTimeout(() => {
      document.body.classList.remove('no-scroll')
    }, 1000)
  }, [])

  useEffect(() => {
    if (windowSize > devSize.tablet) {
      handlePointerAnimations()
    } else {
      handleTouchAnimations()
    }
  }, [windowSize])

  function scroll() {
    window.scroll({
      top: 600,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Container id="home">
      <Spinner></Spinner>
      <Hero className="hero">
        <h1>
          <span>Hi, I'm Kartik</span>
        </h1>
        <p>A Front-end Web Developer</p>
      </Hero>
      <HeroSecondary className="hero-secondary" aria-hidden="true">
        <h1>Hi, I'm Kartik</h1>
        <p>A Front-end Web Developer</p>
        <Logo>
          <img src="/icons/skeleton_logo.svg" alt="skeleton logo" />
        </Logo>
      </HeroSecondary>
      <Logo>
        <img src="/icons/blue_logo.svg" alt="main blue logo" />
      </Logo>
      <ScrollAssist onClick={scroll}></ScrollAssist>
    </Container>
  )
}

export default Home
