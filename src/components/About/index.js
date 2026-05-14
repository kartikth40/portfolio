import React from 'react'
import skillsInfo from '../../juice/skillsInfo'
import educationInfo from '../../juice/educationInfo'
import {
  Container,
  AboutSection,
  Picture,
  MainContect,
  StyledLink,
  StyledText,
  AboutLinks,
  Divider,
  SubTitle,
  SkillsGrid,
  CategoryBlock,
  CategoryName,
  TagsRow,
  Tag,
  EduCard,
  EduDegree,
  EduInstitution,
  EduMeta,
} from './styles'

function About() {
  return (
    <Container id="about">
      <AboutSection>
        <Picture>
          <img src="/img/kartik_pfp.jpg" alt="profile pic" />
          <span></span>
        </Picture>
        <MainContect>
          <h3>About</h3>
          <p>
            I'm Kartik Thakur, a Software Engineer focused on building distributed, event-driven systems and thoughtful
            product experiences.
            <br />
            <br />
            Over the past 3 years, I've worked on high-reliability financial platforms spanning backend infrastructure,
            asynchronous workflows, operational tooling, and frontend systems used by banking operations teams across
            multiple clients.
            <br />
            <br />I enjoy working on problems where
            <span>system design, reliability, and user experience intersect</span>whether that's designing resilient
            backend services, debugging production-critical workflows, or building interfaces that simplify complex
            operational processes.
            <br />
            <br />
            Outside of work, I build side projects, explore new technologies, and experiment with ideas across developer
            tooling, productivity, and web platforms.
            <br />
            <br />
            I care deeply about:
            <br />
            <span>systems that fail gracefully</span>
            <span>code that's easy to reason about</span>
            <span>reliable developer workflows</span>
            <span>products that feel fast, intuitive, and dependable</span>
            <br />
            Always open to interesting engineering problems and conversations around distributed systems, backend
            architecture, and product engineering.
            <AboutLinks>
              <StyledLink href="/resume" target="_blank" rel="noreferrer">
                <StyledText>
                  my resume
                  <img id="giphy" src="https://media.giphy.com/media/Yi8MknjPjvh5Q0rtZz/giphy.gif" alt="pointer" />
                </StyledText>
              </StyledLink>
              <StyledLink href="https://www.linkedin.com/in/kartikth40/" target="_blank" rel="noreferrer">
                <StyledText>
                  linkedIn
                  <img id="giphy" src="https://media.giphy.com/media/Yi8MknjPjvh5Q0rtZz/giphy.gif" alt="pointer" />
                </StyledText>
              </StyledLink>
            </AboutLinks>
          </p>
        </MainContect>
      </AboutSection>

      <Divider />

      <SubTitle>skills</SubTitle>
      <SkillsGrid>
        {skillsInfo.map((group) => (
          <CategoryBlock key={group.category}>
            <CategoryName>{group.category}</CategoryName>
            <TagsRow>
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagsRow>
          </CategoryBlock>
        ))}
      </SkillsGrid>

      <Divider />

      <SubTitle>education</SubTitle>
      {educationInfo.map((edu) => (
        <EduCard key={edu.id}>
          <EduDegree>{edu.degree}</EduDegree>
          <EduInstitution>{edu.institution}</EduInstitution>
          <EduMeta>
            <span>{edu.location}</span>
            <span>·</span>
            <span>{edu.year}</span>
            <span>·</span>
            <span>CGPA: {edu.cgpa}</span>
          </EduMeta>
        </EduCard>
      ))}
    </Container>
  )
}

export default About
