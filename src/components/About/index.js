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
            I'm Kartik Thakur, a Software Engineer who enjoys working across the full stack,
            from designing backend APIs to building clean, responsive frontends.
            <br />
            <br />
            I'm drawn to problems that sit at the intersection of
            <span>system design &amp; user experience,</span> where
            getting the architecture right directly shapes what people feel when they use the product.
            <br />
            <br />
            Outside of work, I build side projects, tinker with new tools,
            and occasionally ship things to the Chrome Web Store.
            <br />
            <br />
            I care about
            <span>writing code that's easy to reason about,</span>
            <span>systems that fail gracefully &amp;</span>
            <span>teams that ship with confidence.</span>
            <br />
            Always open to interesting problems, let's connect.
            <AboutLinks>
              <StyledLink href="/files/myResume.pdf" target="_blank" rel="noreferrer">
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
