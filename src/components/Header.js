import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo>
        <img src="/icons/white_logo.svg" />
      </Logo>
      <Nav>
        <NavItems>About</NavItems>
        <NavItems>Work</NavItems>
        <NavItems>Contact</NavItems>
      </Nav>
    </Container>
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
  &:hover {
    opacity: 0.7;
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
const NavItems = styled.h3`
  cursor: pointer;
  padding-left: 30px;
  height: 100%;
  transition: 250ms;
  &:hover {
    opacity: 0.7;
  }
`
