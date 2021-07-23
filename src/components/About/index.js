import React from 'react'
import { Container, AboutSection, Picture, MainContect } from './styles'
function About() {
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
            Hello! I'm Kartik,
            <br /> a 20-years-old Front-end developer.
            <br /> I enjoy creating things that live on the internet.
            <br />
            <br />I like to
            <span>resolve design problems,</span>
            <span>create smart user interfaces &</span>
            <span>imagine useful interaction.</span>
            <br />
            Currently hunting for some <span>Opportunities</span>.
          </p>
        </MainContect>
      </AboutSection>
    </Container>
  )
}

export default About
