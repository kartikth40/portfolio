import React from 'react'
import styled from 'styled-components'
import device from '../juice/mediaQueries'

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

const Container = styled.section`
  scroll-margin-top: calc(50px);

  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
`
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ${device.mobile} {
    flex-direction: column;
  }
`
const Picture = styled.picture`
  height: 400px;
  width: 200px;
  margin-right: 2.5rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and ${device.mobile} {
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
  width: 70%;
  & h3 {
    font-size: 5rem;
    font-family: var(--secondary-font-family);
    margin-bottom: 30px;
  }
  & span {
    display: block;
    margin-bottom: 0.3rem;
    font-family: var(--secondary-font-family);
  }
  & span:last-child {
    font-family: var(--primary-font-family);
    font-weight: 900;
    display: inline-block;
  }
  @media screen and ${device.mobile} {
    & h3 {
      font-size: 2rem;
    }
    & p {
      font-size: 0.9rem;
    }
  }
  @media screen and ${device.tablet} {
    & h3 {
      font-size: 4rem;
    }
    & p {
      font-size: 0.7rem;
    }
  }
`
