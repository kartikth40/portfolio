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
  MoreProjects,
} from './styles'
function Work() {
  let size = useWindowSize()
  return (
    <Container id="projects">
      <SidewaysTitle>
        <h3>Projects</h3>
        <UpperTitle>Latest</UpperTitle>
        <InnerTitle>projects</InnerTitle>
      </SidewaysTitle>
      {size <= 500 ? <SimpleHeading>Projects</SimpleHeading> : null}
      <ProjectsContainer>
        {projectInfo.map((project, index) => (
          <Project
            key={project.id}
            bgImgUrl={project.bgImgUrl}
            title={project.title}
            desc={project.tagline}
            overview={project.overview}
            impact={project.impact}
            challenges={project.challenges}
            visitLink={project.visitLink}
            sourceLink={project.sourceLink}
            privateSource={project?.privateSource}
            techUsed={project.techUsed}
            defaultExpanded={index === 0}
          />
        ))}
        <MoreProjects href="https://github.com/kartikth40" target="_blank" rel="noreferrer">
          more on github ↗
        </MoreProjects>
      </ProjectsContainer>
    </Container>
  )
}

export default Work
