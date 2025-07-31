import React from 'react'
import useWindowSize from '../../brain/useWindowSize'
import { size as devSize } from '../../juice/mediaQueries'
import { Container, Logo, FooterLinks, Copyrights } from './styles'

import Socials from '../Socials/index.js'

function Footer() {
  const windowSize = useWindowSize()
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
      {windowSize > devSize.tablet && <Socials />}
      <a href="#home" style={{ textDecoration: 'none' }}>
        <Copyrights>© {currentYear} Kartik Thakur</Copyrights>
      </a>
    </Container>
  )
}

export default Footer
