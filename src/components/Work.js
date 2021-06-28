import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import projectInfo from '../juice/projectInfo'
console.log(projectInfo)

function Work() {
  return (
    <Container id="work">
      <h3>Work</h3>
      {projectInfo.map(project => (
      <Project 
        key={project.id}
        projNo={project.projNo}
        bgImgUrl={project.bgImgUrl}
        title={project.title}
        desc={project.desc}
        visitLink={project.visitLink} 
        sourceLink={project.sourceLink}
      />
      ) 
      )}
      
    </Container>
  )
}

export default Work

const Container = styled.section`
  padding: 30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-family: var(--secondary-font-family);
    margin-bottom: 30px;
  }
`
