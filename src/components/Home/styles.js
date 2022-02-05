import styled, { keyframes } from 'styled-components'
import device from '../../juice/mediaQueries'

const load = keyframes`
0% {
  opacity: 1;
  left: 0;
}
80% {
  opacity: 1;
}
100% {
  opacity: 0;
  left: 150%;
}
`
const loader = keyframes`
0% {
  left: 50%;
}
100% {
  background-color: var(--primary-dark);
  left: 100vw;
}
`
const loadLogo = keyframes`
0% {
  opacity: 0;
  transform: scale(0);
}

100% {
  opacity: 1;
  transform: scale(1);

}
`
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
  overflow: hidden;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
  &:before {
    content: '';
    z-index: 2000;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--primary-dark);
    animation: ${load} 1s ease-in-out 1s forwards;
  }

  &:after {
    content: '';
    z-index: 3000;
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #fff;
    animation: ${loader} 1s ease-in-out 1s forwards;
  }

  @media screen and ${device.tablet} {
    font-size: 2rem;
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and ${device.mobile} {
    font-size: 1.2rem;
    p {
      font-size: 0.7rem;
    }
  }
`
const spinner = keyframes`
0% {
 
  transform: rotate(0deg);
}

100% {
 
  transform: rotate(360deg);

}
`
const Spinner = styled.div`
  z-index: 4000;
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-dark);
  // background-color: yellow;
  animation: ${loader} 1s ease-in-out 1s forwards;

  &:before {
    content: '';
    z-index: 5000;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50% 0 0 0;
    left: -5px;
    top: -5px;
    background-color: var(--primary-dark);
    // background-color: blue;
    transform-origin: bottom right;
    animation: ${spinner} 0.75s linear 0s 4 forwards;
  }

  &:after {
    content: '';
    z-index: 5000;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 0 0 50% 0;
    right: -5px;
    bottom: -5px;
    background-color: var(--primary-dark);
    // background-color: red;
    transform-origin: top left;
    animation: ${spinner} 0.75s linear 0s 4 forwards;
  }
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10%;
  text-transform: uppercase;

  & h1 {
    font-family: var(--title-font-family);
    letter-spacing: 0.3rem;
    -webkit-text-stroke: 1px var(--primary);
    color: transparent;
    position: relative;
    overflow: hidden;

    & * {
      filter: drop-shadow(0 0 0.35rem var(--primary));
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: white;

      animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
    }
  }

  & p {
    margin-top: 10px;
    width: max-content;
    font-weight: 400;
    color: white;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: white;
      animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) 1.6s forwards;
    }
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
    // filter: drop-shadow(0 0 0.35rem var(--primary));
    color: transparent;
    background: radial-gradient(
      circle at center,
      #090e17 0.06rem,
      transparent 0
    );
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
  transform: scale(0);
  animation: ${loadLogo} 1s cubic-bezier(0.4, 0, 0.2, 1) 2.2s forwards;

  @media screen and ${device.mobile} {
    left: 58vw;
    & img {
      width: 200px;
    }
  }
  @media screen and ${device.tablet} {
    left: 50vw;

    & img {
      width: 200px;
    }
  }
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
  @keyframes swipeUpAnime {
    0% {
      opacity: 0;
      height: 50px;
      bottom: 10px;
    }
    50% {
      opacity: 1;
      height: 80px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      height: 50px;
      bottom: 100px;
    }
  }

  @media screen and ${device.mobile} {
    bottom: 100px;
    animation: swipeUpAnime 1.5s infinite ease-in-out;

    border: 2px solid rgba(255, 255, 255, 0.5);
    &::after {
      display: none;
    }
  }
  @media screen and ${device.tablet} {
    bottom: 100px;
    animation: swipeUpAnime 1.5s infinite ease-in-out;

    border: 2px solid rgba(255, 255, 255, 0.5);
    &::after {
      display: none;
    }
  }
`
export { Container, Hero, HeroSecondary, Logo, ScrollAssist, Spinner }
