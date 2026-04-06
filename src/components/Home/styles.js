import styled, { keyframes } from 'styled-components'
import device from '../../juice/mediaQueries'

const load = keyframes`
  0% { opacity: 1; left: 0; right: 0; }
  80% { opacity: 1; }
  100% { opacity: 0; left: 150%; right: -200%; }
`

const loader = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) scale(0); }
`

const loadLogo = keyframes`
  0% { opacity: 0; transform: scale(0); }
  40% { opacity: 0; }
  100% { opacity: 1; transform: scale(1); }
`

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const textReveal = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`

const glitch = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(1px, -1px); }
  50% { transform: translate(-1px, 0.5px); }
  75% { transform: translate(0.5px, 1px); }
`

const float1 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  20% { transform: translate(120px, -80px) scale(1.1); }
  40% { transform: translate(-60px, 100px) scale(0.9); }
  60% { transform: translate(80px, 60px) scale(1.05); }
  80% { transform: translate(-100px, -40px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
`

const float2 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  20% { transform: translate(-80px, 60px) scale(0.95); }
  40% { transform: translate(100px, -50px) scale(1.1); }
  60% { transform: translate(-40px, -90px) scale(1); }
  80% { transform: translate(60px, 80px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
`

const morph1 = keyframes`
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  33% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  66% { border-radius: 50% 30% 60% 40% / 40% 60% 30% 70%; }
`

const morph2 = keyframes`
  0%, 100% { border-radius: 40% 60% 50% 40% / 60% 40% 60% 30%; }
  33% { border-radius: 60% 30% 40% 70% / 30% 60% 50% 50%; }
  66% { border-radius: 30% 50% 60% 40% / 60% 30% 40% 70%; }
`

const asciiFloat = keyframes`
  0%, 100% { transform: translateY(-50%) translate(0, 0); }
  25% { transform: translateY(-50%) translate(5px, -8px); }
  50% { transform: translateY(-50%) translate(-3px, 5px); }
  75% { transform: translateY(-50%) translate(4px, 3px); }
`

const Container = styled.main`
  cursor: default;
  position: relative;
  font-size: 2rem;
  font-weight: 900;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
  line-height: 1.1;

  &:before {
    content: '';
    z-index: 2000;
    position: fixed;
    inset: 0;
    background-color: var(--primary-dark);
    animation: ${load} 0.5s ease-in-out 1s forwards;
  }

  &:after {
    content: '';
    z-index: 3000;
    position: fixed;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #fff;
    animation: ${loader} 0.5s ease-in-out 1s forwards;
  }

  @media screen and ${device.tablet} {
    font-size: 2rem;
    p { font-size: 1.5rem; }
  }
  @media screen and ${device.mobile} {
    font-size: 1.2rem;
    p { font-size: 0.7rem; }
  }
`

const Spinner = styled.div`
  z-index: 4000;
  position: fixed;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-dark);
  animation: ${loader} 0.5s ease-in-out 1s forwards;

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
    transform-origin: top left;
    animation: ${spinner} 0.75s linear 0s 4 forwards;
  }
`

const ParticleCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10%;
  text-transform: uppercase;
  overflow: hidden;
  z-index: 1;

  & h1 {
    font-family: var(--handwritten-font-family);
    letter-spacing: 0.3rem;
    color: var(--home-light);
    position: relative;
    overflow: hidden;
    opacity: 0;
    animation: ${textReveal} 0.8s ease-out 1.5s forwards, ${glitch} 6s ease-in-out 3.2s infinite;
  }

  & p {
    margin-top: 10px;
    font-family: var(--handwritten-font-family);
    width: max-content;
    font-weight: 400;
    position: relative;
    overflow: hidden;
    color: var(--home-light);
    opacity: 0;
    animation: ${textReveal} 0.8s ease-out 1.8s forwards, ${glitch} 8s ease-in-out 3.5s infinite;

    &.tag-line {
      font-weight: 500;
      font-size: 0.8rem;
      animation: ${textReveal} 0.8s ease-out 2s forwards, ${glitch} 8s ease-in-out 3.8s infinite;
    }

    @media screen and (max-width: 500px) {
      width: 80vw;
      white-space: normal;
      word-break: break-word;
    }
  }
`

const AmbientBlobs = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    filter: blur(80px);
    opacity: 0.1;
  }

  &::before {
    width: 500px;
    height: 500px;
    top: 10%;
    left: 55%;
    background: linear-gradient(135deg, var(--primary-blue), var(--transparent-pink));
    animation: ${float1} 25s ease-in-out infinite, ${morph1} 12s ease-in-out infinite;
  }

  &::after {
    width: 450px;
    height: 450px;
    bottom: 15%;
    left: 15%;
    background: linear-gradient(135deg, var(--primary), var(--primary-blue));
    animation: ${float2} 30s ease-in-out infinite, ${morph2} 15s ease-in-out infinite;
  }
`

const AsciiLogo = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: -1;
  animation: ${asciiFloat} 15s ease-in-out infinite;

  & pre {
    font-family: 'Courier New', monospace;
    font-size: 3rem;
    line-height: 1.05;
    color: rgba(134, 93, 255, 0.2);
    text-shadow: 0 0 15px rgba(134, 93, 255, 0.1);
    white-space: pre;
    user-select: none;
  }

  @media screen and ${device.mobile} {
    display: none;
  }
  @media screen and ${device.tablet} {
    right: 5%;
    & pre { font-size: 1.5rem; }
  }
`

const logoFloat = keyframes`
  0%, 100% { transform: scale(1) translate(0, 0); }
  25% { transform: scale(1) translate(3px, -6px); }
  50% { transform: scale(1) translate(-2px, 4px); }
  75% { transform: scale(1) translate(4px, 2px); }
`

const Logo = styled.div`
  pointer-events: none;
  position: absolute;
  left: 45vw;
  z-index: -1;
  transform: scale(0);
  animation: ${loadLogo} 1s cubic-bezier(0.4, 0, 0.2, 1) 2.2s forwards,
             ${logoFloat} 10s ease-in-out 3.2s infinite;
  transition: filter 0.15s ease-out;

  @media screen and ${device.mobile} {
    left: 58vw;
    & img { width: 200px; }
  }
  @media screen and ${device.tablet} {
    left: 50vw;
    & img { width: 200px; }
  }
`

const ScrollAssist = styled.div`
  cursor: pointer;
  background: linear-gradient(to bottom, var(--primary), var(--primary-blue));
  height: 60px;
  width: 30px;
  border-radius: 50px;
  box-sizing: border-box;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  opacity: 0;
  animation: show 1s ease-in-out forwards 2s;

  @keyframes show {
    0% { opacity: 0; transform: translateX(-50%) translateY(100%); }
    100% { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  &::after {
    content: '';
    height: 5px;
    width: 5px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translate(-50%, -50%);
    animation: scrolldownAnime 2.5s infinite ease-in;
    opacity: 0;
  }

  @keyframes scrolldownAnime {
    0% { opacity: 0; height: 5px; top: 15px; }
    10% { opacity: 1; }
    30% { opacity: 1; height: 15px; top: 25px; }
    50% { opacity: 0; height: 0px; top: 30px; }
    70% { opacity: 0; height: 0; top: 30px; }
    100% { opacity: 0; top: 30px; }
  }

  @keyframes swipeUpAnime {
    0% { opacity: 0; height: 50px; bottom: 10px; }
    25% { opacity: 1; height: 80px; }
    50% { opacity: 1; }
    70% { opacity: 0; height: 50px; bottom: 100px; }
    100% { opacity: 0; height: 50px; bottom: 100px; }
  }

  @media screen and ${device.mobile} {
    bottom: 100px;
    animation: swipeUpAnime 1.5s infinite ease-in-out 2s;
    &::after { display: none; }
  }

  @media screen and ${device.tablet} {
    pointer-events: none;
    bottom: 100px;
    animation: swipeUpAnime 2.5s infinite ease-in-out 2s;
    &::after { display: none; }

    &::before {
      content: '';
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      position: absolute;
      left: 50%;
      top: 15px;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`

const PlayHint = styled.span`
  position: absolute;
  bottom: 50%;
  left: 12px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: var(--secondary-font-family);
  font-size: 0.45rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 2px;
  text-transform: lowercase;
  pointer-events: none;
  opacity: 0;
  animation: hintFade 1s ease-in-out 4s forwards;

  @keyframes hintFade {
    0% { opacity: 0; transform: translateX(-10px); }
    100% { opacity: 1; transform: translateX(0); }
  }

  @media screen and ${device.mobile} {
    display: none;
  }

  [data-anim="off"] & {
    display: none;
  }
`

export { Container, Hero, AmbientBlobs, ParticleCanvas, AsciiLogo, PlayHint, Logo, ScrollAssist, Spinner }
