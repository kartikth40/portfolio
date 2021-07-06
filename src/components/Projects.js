import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import projectInfo from '../juice/projectInfo'

function Work() {
  return (
    <Container id="work">
      <SidewaysTitle>
        <h3>Projects</h3>
        <InnerTitle>projects</InnerTitle>
      </SidewaysTitle>
      <ProjectsContainer>
        {projectInfo.map((project) => (
          <Project
            key={project.id}
            projNo={project.projNo}
            bgImgUrl={project.bgImgUrl}
            title={project.title}
            desc={project.desc}
            visitLink={project.visitLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </ProjectsContainer>
    </Container>
  )
}

export default Work

const Container = styled.section`
  margin-top: 100px;
  scroll-margin-top: 150px;
  display: flex;
`
const SidewaysTitle = styled.div`
  writing-mode: vertical-lr;
  letter-spacing: 50px;
  margin: 0 2rem;
  color: rgba(255, 255, 255, 0.1);
  font-family: var(--secondary-font-family);
  font-size: 10rem;
  position: relative;
  pointer-events: none;
  @media screen and (max-width: 500px) {
    display: none;
  }
`
const InnerTitle = styled.div`
  width: 6.1em;
  height: 1.8em;
  position: absolute;
  top: 1em;
  left: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  writing-mode: horizontal-tb;
  letter-spacing: 0;
  font-weight: 100;
  font-size: 0.14em;
  pointer-events: auto;
`
const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
