import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Hero>
        <HeroHeading>Hi, I'm Kartik</HeroHeading>
        <Para>A web developer.</Para>
      </Hero>
      <HeroSecondary aria-hidden="true">
        <HeroHeading>Hi, I'm Kartik</HeroHeading>
        <Para>A web developer.</Para>
      </HeroSecondary>
    </Container>
  )
}

export default Home

const Container = styled.main``
const Hero = styled.div``
const HeroHeading = styled.h1``
const HeroSecondary = styled(Hero)``
const Para = styled.p``
