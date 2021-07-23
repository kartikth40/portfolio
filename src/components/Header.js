import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import useWindowSize from '../brain/useWindowSize'

import device, { size as devSize } from '../juice/mediaQueries'

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
      import('../brain/headerLogic')
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
        <Logo href="#home">
          <img src="/icons/white_logo.svg" alt="header white logo" />
        </Logo>
        <HamContainer onClick={hamClick}>
          <HamBurgerMenu className="hamburger-menu unclicked" ref={hamRef} />
        </HamContainer>

        <Nav ref={navRef} className={showNav ? 'nav active' : 'nav'}>
          <NavItems href="#about">about</NavItems>
          <NavItems href="#work">projects</NavItems>
          <NavItems href="#home" onClick={openContacts}>
            contact
          </NavItems>
        </Nav>
      </Container>
      <Contact showContacts={showContacts} setShowContacts={setShowContacts} />
    </>
  )
}

export default Header

const Container = styled.header`
  font-family: var(--secondary-font-family);
  font-size: 0.7rem;
  padding: 30px 70px;
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and ${device.tablet} {
    background: black;
  }
  @media screen and ${device.mobile} {
    padding: 20px 20px;
  }
`
const Logo = styled.a`
  text-decoration: none;
  width: 50px;
  height: 50px;
  transition: 250ms;
  & img {
    width: 100%;
    height: 100%;
  }
`
const HamContainer = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
const HamBurgerMenu = styled.button`
  display: none;
  position: relative;
  height: 4px;
  width: 40px;
  background: white;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: 0.25s transform 0.25s;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    border-radius: 10px;
    left: 0;
    transition: 1s all;
  }
  &::before {
    top: -10px;
  }
  &::after {
    top: 10px;
  }
  &.clicked {
    background: transparent;
  }
  &.clicked::before {
    animation: upperLine 0.5s forwards cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }
  &.clicked::after {
    animation: lowerLine 0.5s forwards cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }

  &.unclicked::before {
    animation: upperLineReverse 0.5s forwards
      cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }
  &.unclicked::after {
    animation: lowerLineReverse 0.5s forwards
      cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }
  @media screen and ${device.tablet} {
    display: block;
  }

  @keyframes upperLine {
    0% {
      top: -10px;
    }
    30% {
      top: 0px;
    }
    50% {
      transform: rotate(0);
    }
    100% {
      top: 0px;
      transform: rotate(45deg);
    }
  }

  @keyframes lowerLine {
    0% {
      top: 10px;
    }
    50% {
      top: 0px;
    }
    80% {
      transform: rotate(0);
    }
    100% {
      top: 0px;
      transform: rotate(-45deg);
    }
  }

  @keyframes upperLineReverse {
    0% {
      top: 0px;
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(0);
    }
    80% {
      top: 0px;
    }
    100% {
      top: -10px;
    }
  }

  @keyframes lowerLineReverse {
    0% {
      top: 0px;
      transform: rotate(-45deg);
    }
    30% {
      transform: rotate(0);
    }
    50% {
      top: 0px;
    }
    100% {
      top: 10px;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media screen and ${device.tablet} {
    background: black;
    position: absolute;
    z-index: -1;
    left: 0;
    top: -150%;
    width: 100%;
    flex-direction: column;
    transition: 250ms all;
    &.active {
      top: 80px;
    }
  }
`
const NavItems = styled.a`
  font-size: 0.9rem;
  font-weight: 900;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-left: 30px;
  display: flex;
  height: 100%;
  position: relative;
  &:hover {
    transition: 250ms all;
    color: black;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
  }
  &::before {
    transition: 250ms all;
    background: white;
  }

  &:hover&::before {
    transition: 250ms all;
    height: calc(100% + 10px);
  }
  @media screen and ${device.tablet} {
    height: 50px;
    padding: 10px 20px;
    margin: 0;
    z-index: -1;
    align-items: center;
    justify-content: center;
    &::before {
      display: none;
    }
    &:hover {
      color: white;
      background: black;
    }
  }
`
