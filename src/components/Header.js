import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo>{'kArtik.me()'}</Logo>
      <Nav>
        <NavItems>.about()</NavItems>
        <NavItems>.work()</NavItems>
        <NavItems>.contact()</NavItems>
      </Nav>
    </Container>
  )
}

export default Header

const Tran = keyframes`
  0% {
    transform: rotate(2deg) scale(1.1);
  }

  100% {
    transform: rotate(-2deg) scale(1);
  }
`
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
`
const Logo = styled.h2`
  cursor: pointer;
  &:hover {
    animation: ${Tran} 250ms infinite alternate ease-in-out;
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
  &:hover {
    animation: ${Tran} 250ms infinite alternate ease-in-out;
  }
`
