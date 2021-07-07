import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useWindowSize from '../brain/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  let size = useWindowSize()
  const currentYear = new Date().getFullYear()

  const addFooterLinkGsap = () => {
    const sidebar = document.querySelector('.social-sidebar')
    const about = document.querySelector('#about')

    gsap.fromTo(
      sidebar,
      {
        autoAlpha: 0,
        y: 300,
      },
      {
        duration: 0.5,
        y: 0,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: 'sidebar',
          trigger: about,
          toggleActions: 'play none none reverse',
          start: 'bottom bottom',
        },
      }
    )
  }

  useEffect(() => {
    if (size > 500) addFooterLinkGsap()
  }, [size])
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
      </FooterLinks>
      {size > 500 ? (
        <SocialSidebar className="social-sidebar">
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
      ) : null}
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
  width: 2px;
  height: 100px;
  background: var(--primary);
`
const Circle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 50%;
  &:hover {
    background: rgb(149, 255, 244);
    box-shadow: 0 0 10px rgb(149, 255, 244);
  }
  & a {
    width: 25px;
    height: 25px;
  }
  & a img {
    border-radius: 50%;
    background: white;
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
  color: rgba(255, 255, 255, 0.3);
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`
