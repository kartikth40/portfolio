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
          <source type="image/webp" srcSet="/img/kartik_black.webp" />
          <img src="/img/kartik_black.jpg" alt="profile pic" />
        </Picture>
        <MainContect>
          <h3>About</h3>
          <p>
            Hello! I'm Kartik Thakur,
            <br /> a {getAge()}-years-old Front-end developer.
            <br /> Learning to make Full Stack Websites.
            <br /> I enjoy creating things that live on the internet.
            <br />
            <br />I like to
            <span>resolve design problems,</span>
            <span>create smart user interfaces &</span>
            <span>imagine useful interaction.</span>
            <br />
            Currently hunting for some <span>Opportunities</span>.
            <StyledLink
              href="/files/myResume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <StyledText>my resume</StyledText>
            </StyledLink>
          </p>
        </MainContect>
      </AboutSection>
    </Container>
  )
}

export default About
