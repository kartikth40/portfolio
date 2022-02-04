import React, { useEffect } from 'react'
import useWindowSize from '../../brain/useWindowSize'
import { size as devSize } from '../../juice/mediaQueries'
import { Container, Hero, HeroSecondary, Logo, ScrollAssist } from './styles'
function Home() {
  let windowSize = useWindowSize()
  useEffect(() => {
    document.body.classList.add('no-scroll')
    setTimeout(() => {
      document.body.classList.remove('no-scroll')
    }, 3500)
  }, [])
  useEffect(() => {
    if (windowSize > devSize.tablet) {
      import('../../brain/homePageLogic')
    }
  }, [windowSize])
  return (
    <Container id="home">
      <Hero className="hero">
        <h1>Hi, I'm Kartik</h1>
        <p>A Front-end Developer</p>
      </Hero>
      <HeroSecondary className="hero-secondary" aria-hidden="true">
        <h1>Hi, I'm Kartik</h1>
        <p>A Front-end Developer</p>
        <Logo>
          <img src="/icons/skeleton_logo.svg" alt="skeleton logo" />
        </Logo>
      </HeroSecondary>
      <Logo>
        <img src="/icons/blue_logo.svg" alt="main blue logo" />
      </Logo>
      <ScrollAssist></ScrollAssist>
    </Container>
  )
}

export default Home
