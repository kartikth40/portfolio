import React from 'react'
import { Container, Logo, FooterLinks, Copyrights } from './styles'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Container id="footer">
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
        <a href="https://linktr.ee/kartikth40" target="_blank" rel="noreferrer">
          <img src="/icons/linktree_icon.png" alt="linktree logo" />
        </a>
      </FooterLinks>
      <a href="#home" style={{ textDecoration: 'none' }}>
        <Copyrights>© {currentYear} Kartik Thakur · 💖</Copyrights>
      </a>
    </Container>
  )
}

export default Footer
