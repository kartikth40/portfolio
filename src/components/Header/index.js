import React, { useState, useEffect, useRef } from 'react'
import Contact from '../Contact/index'
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
function Header() {
  let isLarge = useWindowSize() > devSize.tablet
  let hamRef = useRef()
  let navRef = useRef()
  const [showContacts, setShowContacts] = useState(false)
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

  const openContacts = () => {
    setShowContacts(true)
  }
  const hamClick = () => {
    setShowNav((prev) => !prev)
    const ham = document.querySelector('.hamburger-menu')
    ham.classList.toggle('clicked')
    ham.classList.toggle('unclicked')
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
            <NavItems href="#work">projects</NavItems>
            <NavItems href="#home" onClick={openContacts}>
              contact
            </NavItems>
          </Nav>
        </HelperContainer>
      </Container>
      <Contact showContacts={showContacts} setShowContacts={setShowContacts} />
    </>
  )
}

export default Header