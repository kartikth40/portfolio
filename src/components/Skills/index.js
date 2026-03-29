import React from 'react'
import skillsInfo from '../../juice/skillsInfo'
import { Container, SectionTitle, Grid, CategoryBlock, CategoryName, TagsRow, Tag } from './styles'

function Skills() {
  return (
    <Container id="skills">
      <SectionTitle>Skills</SectionTitle>
      <Grid>
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
      </Grid>
    </Container>
  )
}

export default Skills
