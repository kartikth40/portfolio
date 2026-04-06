import React from 'react'
import { Container, Logo, FooterLinks, Copyrights, ViewCount } from './styles'
import useViewCount from '../../brain/useViewCount'

function Footer() {
  const currentYear = new Date().getFullYear()
  const viewCount = useViewCount()

  return (
    <Container id="footer">
      <Logo href="#home">
        <img src="/icons/white_logo.svg" alt="footer white logo" />
      </Logo>
      <FooterLinks>
        <a href="https://www.linkedin.com/in/kartikth40" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin_icon.png" alt="linkedin logo" />
        </a>
        <a href="https://linktr.ee/kartikth40" target="_blank" rel="noreferrer">
          <img src="/icons/linktree_icon.png" alt="linktree logo" />
        </a>
        <a href="https://github.com/kartikth40" target="_blank" rel="noreferrer">
          <img src="/icons/github_icon.png" alt="github logo" />
        </a>
      </FooterLinks>
      <a href="#home" style={{ textDecoration: 'none' }}>
        <Copyrights>© {currentYear} - KARTIK THAKUR</Copyrights>
      </a>
      {viewCount !== null && (
        <ViewCount>
          🟢 {viewCount.toLocaleString()} {(viewCount === 1 ? 'Visitors' : 'Visitors')}
        </ViewCount>
      )}
    </Container>
  )
}

export default Footer
