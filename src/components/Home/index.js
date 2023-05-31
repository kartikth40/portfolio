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
    function removeClass() {
      document.body.classList.remove('no-scroll')
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&_<>'
      document.querySelectorAll('.randomize').forEach((el) => {
        el.addEventListener('click', (event) => {
          let iterations = 0
          const currentSentence = event.target.dataset.value
          const interval = setInterval(() => {
            event.target.innerText = currentSentence
              .split('')
              .map((letter, index) => {
                if (index < iterations) {
                  return currentSentence[index]
                } else {
                  return letters[Math.floor(Math.random() * letters.length)]
                }
              })
              .join('')

            if (iterations > currentSentence.length) clearInterval(interval)
            iterations += 1 / 5
          }, 30)
        })
      })
    }
    setTimeout(() => {
      removeClass()
    }, 3000)

    return () => {
      clearTimeout(removeClass)
    }
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
          <span className="randomize" data-value="Hi, I'm Kartik">
            Hi, I'm Kartik
          </span>
        </h1>
        <p>A Front-end Web Developer</p>
      </Hero>
      <HeroSecondary className="hero-secondary" aria-hidden="true">
        <h1 className="randomize" data-value="Hi, I'm Kartik">
          Hi, I'm Kartik
        </h1>
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
