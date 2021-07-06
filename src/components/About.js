import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container id="about">
      <AboutSection>
        <Picture>
          <source type="image/webp" srcset="/img/kartik_black.webp" />
          <img src="/img/kartik_black.jpg" alt="profile pic" />
        </Picture>
        <MainContect>
          <h3>About</h3>
          <p>
            Hello! I'm Kartik, a 20-year-old Front-end developer. I enjoy creating things that live on the internet. I
            like to resolve design problems, create smart user interface and imagine useful interaction. Currently
            looking for an Internship.
          </p>
        </MainContect>
      </AboutSection>
    </Container>
  )
}

export default About

const Container = styled.section`
  scroll-margin-top: 50px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 70px;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
`
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const Picture = styled.picture`
  height: 400px;
  width: 200px;
  margin-right: 5rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 200px;
    margin-bottom: 3rem;
    margin-right: 0;
    & img {
      border-radius: 50%;
    }
  }
`
const MainContect = styled.div`
  margin-right: 100px;
  width: 70%;
  & h3 {
    font-size: 5rem;
    font-family: var(--secondary-font-family);
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    & h3 {
      font-size: 2rem;
    }
    & p {
      font-size: 0.7rem;
    }
  }
`
