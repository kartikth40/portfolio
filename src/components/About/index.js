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
          <img src="/img/kartik_pink.jpg" alt="profile pic" />
          <span></span>
        </Picture>
        <MainContect>
          <h3>About</h3>
          <p>
            Hello! I'm Kartik Thakur,
            <br /> a {getAge()}-years-old skilled Front-end developer.
            <br /> Learning to make Full Stack Websites.
            <br /> I enjoy creating things that live on the internet.
            <br />
            <br />I like to
            <span>resolve design problems,</span>
            <span>create smart user interfaces &</span>
            <span>imagine creative interactions.</span>
            <br />
            Currently open for some <span>Freelance Work</span>.
            <StyledLink
              href="/files/myResume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <StyledText>
                my resume
                <img
                  src="https://media.giphy.com/media/Yi8MknjPjvh5Q0rtZz/giphy.gif"
                  alt="pointer"
                />
              </StyledText>
            </StyledLink>
          </p>
        </MainContect>
      </AboutSection>
    </Container>
  )
}

export default About
