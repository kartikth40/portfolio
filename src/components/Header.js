import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Contact from './Contact'

function Header() {
  useEffect(() => {
    import('../brain/headerLogic')
  }, [])
  const [showContacts, setShowContacts] = useState(false)
  const openContacts = () => {
    setShowContacts(true)
  }
  return (
    <>
      <Container id="header">
        <Logo href="#home">
          <img src="/icons/white_logo.svg" alt="header white logo" />
        </Logo>
        <Nav>
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
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
const NavItems = styled.a`
  font-size: 0.9rem;
  font-weight: 900;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-left: 30px;
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
    height: calc(100% + 5px);
  }
`
