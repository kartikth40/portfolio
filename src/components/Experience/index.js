import React, { useState } from 'react'
import experienceInfo from '../../juice/experienceInfo'
import {
  Container,
  SectionTitle,
  CompanyTabsRow,
  CompanyTab,
  Card,
  CompanyHeader,
  CompanyName,
  RoleLine,
  Meta,
  TechTags,
  SubTabsRow,
  SubTab,
  ContentBlock,
  ContentText,
  ContentListHeading,
  ContentList,
} from './styles'

function parseDuration(durationStr) {
  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  const parts = durationStr.split('–').map(s => s.trim())
  const parseDate = (str) => {
    if (str.toLowerCase() === 'present') return new Date()
    const [mon, yr] = str.split(' ')
    const idx = months.indexOf(mon.toLowerCase().slice(0, 3))
    return new Date(parseInt(yr), idx)
  }
  const start = parseDate(parts[0])
  const end = parseDate(parts[1])
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const yrs = Math.floor(totalMonths / 12)
  const mos = totalMonths % 12
  if (yrs === 0) return `${mos} mo${mos !== 1 ? 's' : ''}`
  if (mos === 0) return `${yrs} yr${yrs !== 1 ? 's' : ''}`
  return `${yrs} yr${yrs !== 1 ? 's' : ''} ${mos} mo${mos !== 1 ? 's' : ''}`
}

function Experience() {
  const [activeCompany, setActiveCompany] = useState(0)
  const [activeSection, setActiveSection] = useState(0)

  const exp = experienceInfo[activeCompany]
  const section = exp.sections[activeSection]

  function handleCompanyClick(i) {
    setActiveCompany(i)
    setActiveSection(0)
  }

  return (
    <Container id="experience">
      <SectionTitle>experience</SectionTitle>

      <CompanyTabsRow>
        {experienceInfo.map((e, i) => (
          <CompanyTab key={e.id} $active={i === activeCompany} onClick={() => handleCompanyClick(i)}>
            <span>{e.company}</span>
            <small>{e.duration} &nbsp;·&nbsp; {parseDuration(e.duration)}</small>
          </CompanyTab>
        ))}
      </CompanyTabsRow>

      <Card>
        <CompanyHeader>
          <CompanyName>
            {exp.companyUrl ? (
              <a href={exp.companyUrl} target="_blank" rel="noreferrer">{exp.company}</a>
            ) : (
              exp.company
            )}
          </CompanyName>
          <RoleLine>{exp.role}</RoleLine>
          <Meta>{exp.location} &nbsp;·&nbsp; {exp.type} &nbsp;·&nbsp; {exp.duration}</Meta>
        </CompanyHeader>

        <TechTags>
          {exp.techUsed.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </TechTags>

        <SubTabsRow>
          {exp.sections.map((s, i) => (
            <SubTab key={i} $active={i === activeSection} onClick={() => setActiveSection(i)}>
              {s.title}
            </SubTab>
          ))}
        </SubTabsRow>

        <ContentBlock>
          {section.content.map((block, i) => {
            if (block.type === 'text') {
              return <ContentText key={i}>{block.value}</ContentText>
            }
            if (block.type === 'list') {
              return (
                <div key={i}>
                  {block.heading && <ContentListHeading>{block.heading}</ContentListHeading>}
                  <ContentList>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ContentList>
                </div>
              )
            }
            return null
          })}
        </ContentBlock>
      </Card>
    </Container>
  )
}

export default Experience
