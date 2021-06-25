import React, { useState } from 'react'
import styled from 'styled-components'
import Contact from './Contact'

function Header() {
  const [showContacts, setShowContacts] = useState(false)
  const openContacts = () => {
    setShowContacts(true)
  }
  return (
    <>
      <Container id="header">
        <Logo>
          <img src="/icons/white_logo.svg" alt="header white logo" />
        </Logo>
        <Nav>
          <NavItems href="#about">About</NavItems>
          <NavItems href="#work">Work</NavItems>
          <NavItems href="#" onClick={openContacts}>
            Contact
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
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  cursor: pointer;
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
  font-size: 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding-left: 30px;
  height: 100%;
  transition: 250ms;
  &:hover {
    opacity: 0.7;
  }
`
