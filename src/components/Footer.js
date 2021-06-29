import React from 'react'
import styled from 'styled-components'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <SocialSidebar>
        <Circle>
          <a href="https://www.linkedin.com/in/kartikth40" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin_logo.png" alt="linkedin logo" />
          </a>
        </Circle>
        <Line />
        <Circle>
          <a href="https://github.com/kartikth40" target="_blank" rel="noreferrer">
            <img src="/icons/github_logo.png" alt="github logo" />
          </a>
        </Circle>
        <Line />
      </SocialSidebar>
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
const SocialSidebar = styled.div`
  position: fixed;
  bottom: 0;
  right: 65px;
  box-shadow: 0 0 1em var(--primary);
`

const Line = styled.div`
  width: 5px;
  height: 100px;
  background: var(--primary);
`
const Circle = styled.div`
  box-shadow: 0 0 3em var(--primary);

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 50%;
  & a {
    width: 40px;
    height: 40px;
    &:hover {
      opacity: 0.7;
      box-shadow: 0 0 3em red;
    }
  }
  & a img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
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
