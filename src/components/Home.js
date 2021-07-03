import React, { useEffect } from 'react'
import styled from 'styled-components'

function Home() {
  useEffect(() => {
    import('../brain/homePageLogic')
  }, [])
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

const Container = styled.main`
  cursor: default;
  position: relative;
  font-size: 2rem;
  font-weight: 900;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
`
const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10%;
  text-transform: uppercase;

  & h1 {
    letter-spacing: 0.3rem;
    -webkit-text-stroke: 1px var(--primary);
    filter: drop-shadow(0 0 0.35rem var(--primary));
    color: transparent;
  }

  & p {
    font-weight: 400;
    color: white;
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
    color: rgba(0, 0, 0, 0.7);
  }
`
const Logo = styled.div`
  pointer-events: none;
  position: absolute;
  left: 45vw;
  z-index: -1;
`
const ScrollAssist = styled.div`
  background: var(--primary-dark);
  height: 50px;
  width: 25px;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;

  &::after {
    content: '';
    height: 5px;
    width: 3px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translate(-50%, -50%);
    animation: scrolldownAnime 1.5s infinite ease-in;
    opacity: 0;
  }

  @keyframes scrolldownAnime {
    0% {
      opacity: 0;
      height: 5px;
      top: 10px;
    }
    20% {
      opacity: 1;
    }
    50% {
      opacity: 1;
      height: 15px;
      top: 15px;
    }
    80% {
      opacity: 1;
      height: 5px;
      top: 23px;
    }
    100% {
      opacity: 0;
      top: 23px;
    }
  }
`
