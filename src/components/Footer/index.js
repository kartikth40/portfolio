import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useWindowSize from '../../brain/useWindowSize'
import { size as devSize } from '../../juice/mediaQueries'
import { Container, Logo, FooterLinks, Copyrights } from './styles'

import Socials from '../Socials/index.js'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const windowSize = useWindowSize()
  const currentYear = new Date().getFullYear()

  const addFooterLinkGsap = () => {
    const sidebar = document.querySelector('.social-sidebar')
    const about = document.querySelector('#about')

    gsap.fromTo(
      sidebar,
      {
        autoAlpha: 0,
        y: 300,
      },
      {
        duration: 0.5,
        y: 0,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: 'sidebar',
          trigger: about,
          toggleActions: 'play none none reverse',
          start: 'bottom bottom',
        },
      }
    )
  }

  useEffect(() => {
    if (windowSize > devSize.tablet) addFooterLinkGsap()
  }, [windowSize])
  return (
    <Container id="footer">
      <Logo href="#home">
        <img src="/icons/white_logo.svg" alt="footer white logo" />
      </Logo>
      <FooterLinks>
        <a
          href="https://www.linkedin.com/in/kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/linkedin_icon.png" alt="linkedin logo" />
        </a>
        <a
          href="https://github.com/kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github_icon.png" alt="github logo" />
        </a>
      </FooterLinks>
      {windowSize > devSize.tablet && <Socials />}
      <Copyrights>© {currentYear} Kartik Thakur</Copyrights>
    </Container>
  )
}

export default Footer
