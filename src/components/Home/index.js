import React, { useEffect } from 'react'
import {
  Container,
  Hero,
  AsciiLogo,
  PlayHint,
  Logo,
  ScrollAssist,
  LoaderLogo,
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

    // Immediately hide real text so it doesn't flash before the scramble starts
    const elements = document.querySelectorAll('.randomize')
    elements.forEach((el) => {
      const len = el.getAttribute('data-value').length
      el.innerText = '\u00A0'.repeat(len)
    })

    function removeClass() {
      document.body.classList.remove('no-scroll')
    }
    function randomEffect() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&_'
      elements.forEach((el) => {
        let iterations = 0
        const currentSentence = el.getAttribute('data-value')
        // Scale speed so longer strings resolve in roughly the same time
        const step = Math.max(currentSentence.length / 45, 1 / 3)
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
          iterations += step
        }, 30)
      })
    }
    setTimeout(removeClass, 3000)
    setTimeout(randomEffect, 2000)

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
      <LoaderLogo>
        <pre>{ASCII_LOGO}</pre>
      </LoaderLogo>
      <Hero className="hero">
        <h1>
          <span className="randomize glitch" data-value="Hi, I'm Kartik">
            Hi, I'm Kartik
          </span>
        </h1>
        <p className="randomize glitch" data-value="Software Engineer.">
          Software Engineer.
        </p>
        <p className="randomize glitch tag-line" data-value="I build systems that scale and ship code that lasts.">
          I build systems that scale and ship code that lasts.
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
