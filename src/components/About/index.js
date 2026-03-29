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
            I'm Kartik Thakur, a Software Engineer with 2.5+ years of experience building and scaling
            production systems in fintech.
            <br />
            <br />
            At Sopra Banking Software, I'm part of the team building <span>PAYCE — a Payment Cloud Engine</span> for
            the EU region, contributing to end-to-end payment flows across a Java + Angular stack that handles
            high-volume transaction processing at scale.
            <br />
            <br />
            I care about
            <span>system correctness &amp; reliability,</span>
            <span>clean API design &amp;</span>
            <span>shipping things that scale.</span>
            <br />
            I'm currently open to <span>SDE-2 opportunities</span> - let's build something impactful together.
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
