import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import projectInfo from '../juice/projectInfo'
import useWindowSize from '../brain/useWindowSize'

function Work() {
  let size = useWindowSize()
  return (
    <Container id="work">
      <SidewaysTitle>
        <h3>Projects</h3>
        <InnerTitle>projects</InnerTitle>
      </SidewaysTitle>
      <SimpleHeading>{size <= 500 ? 'Projects' : null}</SimpleHeading>
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
  scroll-margin-top: 200px;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
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
const SimpleHeading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-family: var(--secondary-font-family);
  margin-bottom: 2rem;
`
const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
