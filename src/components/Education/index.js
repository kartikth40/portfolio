import React from 'react'
import educationInfo from '../../juice/educationInfo'
import { Container, SectionTitle, Card, Degree, Institution, DetailRow } from './styles'

function Education() {
  return (
    <Container id="education">
      <SectionTitle>Education</SectionTitle>
      {educationInfo.map((edu) => (
        <Card key={edu.id}>
          <Degree>{edu.degree}</Degree>
          <Institution>{edu.institution}</Institution>
          <DetailRow>
            <span>{edu.location}</span>
            <span>·</span>
            <span>{edu.year}</span>
            <span>·</span>
            <span>CGPA: {edu.cgpa}</span>
          </DetailRow>
        </Card>
      ))}
    </Container>
  )
}

export default Education
