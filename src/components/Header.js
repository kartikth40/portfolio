import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo>{'kArtik.me()'}</Logo>
      <Nav>
        <NavItems>.work()</NavItems>
        <NavItems>.about()</NavItems>
        <NavItems>.contact()</NavItems>
      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  font-family: var(--secondary-font-family);
  font-size: 0.7rem;
  padding: 30px 70px;
  height: 70px;
  width: 100%;
  color: white;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
`
const Logo = styled.h2``
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
const NavItems = styled.h3`
  padding-left: 30px;
`
