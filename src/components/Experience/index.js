import React, { useState } from 'react'
import experienceInfo from '../../juice/experienceInfo'
import {
  Container,
  SectionTitle,
  TabsRow,
  Tab,
  Card,
  CompanyHeader,
  CompanyName,
  Meta,
  RolesTimeline,
  RoleItem,
  RoleDot,
  RoleLabel,
  PromotionBadge,
  Bullets,
  TechTags,
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
  const [active, setActive] = useState(0)
  const [activeRole, setActiveRole] = useState(0)
  const exp = experienceInfo[active]
  const role = exp.roles[activeRole]

  function handleTabClick(i) {
    setActive(i)
    setActiveRole(0)
  }

  return (
    <Container id="experience">
      <SectionTitle>experience</SectionTitle>
      <TabsRow>
        {experienceInfo.map((e, i) => (
          <Tab key={e.id} $active={i === active} onClick={() => handleTabClick(i)}>
            <span>{e.company}</span>
            <small>{e.roles[e.roles.length - 1].duration.split('–')[0].trim()} – {e.roles[0].duration.split('–')[1].trim()}</small>
          </Tab>
        ))}
      </TabsRow>

      <Card>
        <CompanyHeader>
          <CompanyName>{exp.company}</CompanyName>
          <Meta>{exp.location} &nbsp;·&nbsp; {exp.type}</Meta>
        </CompanyHeader>

        <RolesTimeline>
          {exp.roles.map((r, i) => (
            <RoleItem key={i} $active={i === activeRole} onClick={() => setActiveRole(i)}>
              <RoleDot $active={i === activeRole} />
              <RoleLabel>
                <strong>{r.role}</strong>
                <span>{r.duration} &nbsp;·&nbsp; {parseDuration(r.duration)}</span>
              </RoleLabel>
              {i === 0 && exp.promoted && <PromotionBadge>↑ promoted</PromotionBadge>}
            </RoleItem>
          ))}
        </RolesTimeline>

        <Bullets>
          {role.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </Bullets>

        <TechTags>
          {exp.techUsed.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </TechTags>
      </Card>
    </Container>
  )
}

export default Experience
