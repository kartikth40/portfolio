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
        <Copyrights>© {currentYear} - kartik thakur</Copyrights>
      </a>
      {viewCount !== null && (
        <ViewCount>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px', marginBottom:'1px'}}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          {viewCount.toLocaleString()} {viewCount === 1 ? 'Visitor' : 'Visitors'}
        </ViewCount>
      )}
    </Container>
  )
}

export default Footer
