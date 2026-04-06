import React, { useEffect } from 'react'
import {
  Container,
  Hero,
  AsciiLogo,
  PlayHint,
  Logo,
  ScrollAssist,
  Spinner,
} from './styles'

const ASCII_LOGO = `
██╗  ██╗
██║ ██╔╝
█████╔╝ 
██╔═██╗ 
██║  ██╗
╚═╝  ╚═╝`.trim()

function Home() {

  useEffect(() => {
    document.body.classList.add('no-scroll')
    function removeClass() {
      document.body.classList.remove('no-scroll')
    }
    function randomEffect() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&_'
      document.querySelectorAll('.randomize').forEach((el) => {
        let iterations = 0
        const currentSentence = el.getAttribute('data-value')
        const interval = setInterval(() => {
          el.innerText = currentSentence
            .split('')
            .map((letter, index) => {
              if (letter === ' ') return ' '
              if (index < iterations) {
                return currentSentence[index]
              } else {
                return letters[Math.floor(Math.random() * letters.length)]
              }
            })
            .join('')

          if (iterations > currentSentence.length) clearInterval(interval)
          iterations += 1 / 3
        }, 30)
      })
    }
    setTimeout(removeClass, 2000)
    setTimeout(randomEffect, 1600)

    return () => {
      clearTimeout(removeClass)
      clearTimeout(randomEffect)
    }
  }, [])

  function scroll() {
    window.scroll({ top: 600, left: 0, behavior: 'smooth' })
  }

  return (
    <Container id="home">
      <Spinner />
      <Hero className="hero">
        <h1>
          <span className="randomize glitch" data-value="Hi, I'm Kartik">
            Hi, I'm Kartik
          </span>
        </h1>
        <p className="randomize glitch" data-value="A Software Developer.">
          A Software Developer.
        </p>
        <p className="randomize glitch tag-line" data-value="Building reliable systems at scale. 🚀">
          Building reliable systems at scale. 🚀
        </p>
      </Hero>
      <AsciiLogo aria-hidden="true">
        <pre>{ASCII_LOGO}</pre>
      </AsciiLogo>
      <Logo>
        <img src="/icons/blue_logo.svg" alt="main blue logo" />
      </Logo>
      <ScrollAssist onClick={scroll} />
      <PlayHint>go on, move your cursor around ✦</PlayHint>
    </Container>
  )
}

export default Home
