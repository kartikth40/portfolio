import React from 'react'
import styled from 'styled-components'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <Logo href="#home">
        <img src="/icons/white_logo.svg" alt="footer white logo" />
      </Logo>
      <FooterLinks>
        <a href="https://www.linkedin.com/in/kartikth40" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin_icon.png" alt="linkedin logo" />
        </a>
        <a href="https://github.com/kartikth40" target="_blank" rel="noreferrer">
          <img src="/icons/github_icon.png" alt="github logo" />
        </a>
      </FooterLinks>
      <Copyrights>© {currentYear} Kartik Thakur - IN 8178795167 - Contact</Copyrights>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background: var(--secondary-dark);
  padding: 2rem 0 4rem 0;
`
const Logo = styled.a`
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100px;
    height: 100px;
  }
`
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    width: 100px;
    height: 35px;
    margin: 1rem;
    color: white;
    text-decoration: none;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.2;
    }
  }
`
const Copyrights = styled.div`
  padding: 1rem;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
