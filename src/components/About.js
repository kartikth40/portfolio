import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
      <h3>About</h3>
      <p>
        Hello! I'm Kartik, a 20-year-old Front-end developer. I enjoy creating things that live on the internet. I like
        to resolve design problems, create smart user interface and imagine useful interaction. Currently looking for an
        Internship.
      </p>
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
