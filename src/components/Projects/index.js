import React from 'react'
import Project from '../Project/index'
import projectInfo from '../../juice/projectInfo'
import useWindowSize from '../../brain/useWindowSize'
import {
  Container,
  SidewaysTitle,
  UpperTitle,
  InnerTitle,
  SimpleHeading,
  ProjectsContainer,
} from './styles'
function Work() {
  let size = useWindowSize()
  return (
    <Container id="work">
      <SidewaysTitle>
        <h3>Projects</h3>
        <UpperTitle>Latest</UpperTitle>
        <InnerTitle>projects</InnerTitle>
      </SidewaysTitle>
      {size <= 500 ? <SimpleHeading>Projects</SimpleHeading> : null}
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