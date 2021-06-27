import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container id="about">
      <h3>About</h3>
      <AboutSection>
        <Picture>
          <source type="image/webp" srcset="/img/kartik_black.webp" />
          <img src="/img/kartik_black.jpg" alt="profile pic" />
        </Picture>
        <p>
          Hello! I'm Kartik, a 20-year-old Front-end developer. I enjoy creating things that live on the internet. I
          like to resolve design problems, create smart user interface and imagine useful interaction. Currently looking
          for an Internship.
        </p>
      </AboutSection>
    </Container>
  )
}

export default About

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 70px;

  & h3 {
    font-family: var(--secondary-font-family);
    margin-bottom: 30px;
  }
`
const AboutSection = styled.section`
  display: flex;
  align-items: center;
`
const Picture = styled.picture`
  height: 400px;
  margin-right: 5rem;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
`
