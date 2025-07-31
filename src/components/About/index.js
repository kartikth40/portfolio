import React from 'react'
import {
  Container,
  AboutSection,
  Picture,
  MainContect,
  StyledLink,
  StyledText,
} from './styles'
function About() {
  const getAge = () => {
    let curYear = new Date().getFullYear()
    let curMonth = new Date().getMonth()
    let age = curYear - 2000
    age = curMonth < 8 ? age - 1 : age
    return age
  }
  return (
    <Container id="about">
      <AboutSection>
        <Picture>
          <img src="/img/kartik_pfp.jpg" alt="profile pic" />
          <span></span>
        </Picture>
        <MainContect>
          <h3>About</h3>
          <p>
            Hello! I'm Kartik Thakur,
            <br /> a skilled Software developer who enjoys turning ideas into robust, scalable web applications.
            <br />
            <br /> I love creating things that live on the internet, and I bring hands-on experience across the stack to
            build clean, efficient solutions using modern technologies like JavaScript, React, and Java.
            <br />
            <br />
            I'm passionate about
            <span>solving design problems,</span>
            <span>crafting intuitive user interfaces &</span>
            <span>imagining smart, creative interactions.</span>
            <br />
            I'm currently open to <span>new opportunities</span> - let’s build something great together.
            <StyledLink href="/files/myResume.pdf" target="_blank" rel="noreferrer">
              <StyledText>
                my resume
                <img id="giphy" src="https://media.giphy.com/media/Yi8MknjPjvh5Q0rtZz/giphy.gif" alt="pointer" />
              </StyledText>
            </StyledLink>
          </p>
        </MainContect>
      </AboutSection>
    </Container>
  )
}

export default About
