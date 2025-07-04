import React, { useState, useEffect, useRef } from 'react'
import useWindowSize from '../../brain/useWindowSize'
import { size as devSize } from '../../juice/mediaQueries'
import {
  Container,
  HelperContainer,
  Logo,
  HamContainer,
  HamBurgerMenu,
  Nav,
  NavItems,
} from './styles'

import Socials from '../Socials/index.js'

function Header() {
  const windowSize = useWindowSize()
  const isLarge = windowSize > devSize.tablet
  const hamRef = useRef()
  const navRef = useRef()
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const hideMenu = (event) => {
      if (
        !hamRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        hamClick()
      } else if (navRef.current.contains(event.target)) {
        setTimeout(() => {
          hamClick()
        }, 500)
      }
    }
    if (isLarge) {
      import('../../brain/headerLogic')
    } else if (showNav) {
      document.addEventListener('click', hideMenu)
    }
    return () => document.removeEventListener('click', hideMenu)
  }, [isLarge, showNav])

  const hamClick = () => {
    setShowNav((prev) => !prev)
    const ham = document.querySelector('.hamburger-menu')
    const socials = document.querySelector('#socials-container')
    const body = document.body
    body.classList.toggle('unfocus')
    ham.classList.toggle('clicked')
    ham.classList.toggle('unclicked')
    socials.classList.toggle('show')
  }
  return (
    <>
      <Container id="header">
        <HelperContainer>
          <Logo href="#home">
            <img src="/icons/white_logo.svg" alt="header white logo" />
          </Logo>
          <HamContainer ref={hamRef} onClick={hamClick}>
            <HamBurgerMenu className="hamburger-menu unclicked" />
          </HamContainer>

          <Nav ref={navRef} className={showNav ? 'nav active' : 'nav'}>
            <NavItems href="#about">about</NavItems>
            <NavItems href="#projects">projects</NavItems>
            <NavItems href="#contact">contact</NavItems>
            {windowSize <= devSize.tablet && <Socials />}
          </Nav>
        </HelperContainer>
      </Container>
    </>
  )
}

export default Header
