import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo>{'{kartik.me}'}</Logo>
      <Nav>nav</Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 70px;
  width: 100%;
  color: white;
  position: fixed;
  z-index: 10;
`
const Logo = styled.h2`
  font-weight: 400;
`
const Nav = styled.nav``
