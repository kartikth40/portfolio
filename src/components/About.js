import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
      <h3>.about</h3>
      <p>
        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development
        started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom
        reblog button taught me a lot about HTML & CSS!
      </p>
    </Container>
  )
}

export default About

const Container = styled.section`
  height: 100vh;

  & h3 {
    font-family: var(--secondary-font-family);
  }
`
