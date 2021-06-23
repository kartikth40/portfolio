import React, { useEffect } from 'react'
import styled from 'styled-components'

function Home() {
  useEffect(() => {
    import('../brain/homePageLogic')
  }, [])
  return (
    <Container>
      <Hero>
        <h1>Hi, I'm Kartik</h1>
        <p>A web developer.</p>
      </Hero>
      <HeroSecondary className="hero-secondary" aria-hidden="true">
        <h1>Hi, I'm Kartik</h1>
        <p>A web developer.</p>
      </HeroSecondary>
    </Container>
  )
}

export default Home

const Container = styled.main`
  background-color: #090e17;
  font-size: 2rem;
  font-weight: 900;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h1 {
    -webkit-text-stroke: 1px var(--primary);
    filter: drop-shadow(0 0 0.35rem var(--primary));
    color: transparent;
  }

  & p {
    color: transparent;
  }
`
const HeroSecondary = styled(Hero)`
  --mask: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    black var(--maskSize1, 0%),
    transparent 0,
    transparent var(--maskSize2, 0%),
    black var(--maskSize2, 0%),
    black var(--maskSize3, 0%),
    transparent 0
  );
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #40e0d0, #9932cc, #ff1493, orange);
  mask-image: var(--mask);
  -webkit-mask-image: var(--mask);

  & h1 {
    -webkit-text-stroke: 1px var(--primary);
    filter: drop-shadow(0 0 0.35rem var(--primary));
    color: transparent;
    background: radial-gradient(circle at center, #090e17 0.06rem, transparent 0);
    background-size: 0.15rem 0.15rem;
    filter: none;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: unset;
  }

  & p {
    color: rgb(255, 255, 255);
  }
`
