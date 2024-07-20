import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useWindowSize from '../../brain/useWindowSize'
import { size as devSize } from '../../juice/mediaQueries'
import {
  ProjectContainer,
  BackgroundImg,
  DullBackground,
  SliderMask,
  ProjectNo,
  ProjectInfo,
  CTAbuttons,
  Tech,
} from './styles'

gsap.registerPlugin(ScrollTrigger)

function Project({
  projNo,
  bgImgUrl,
  title,
  desc,
  summary,
  visitLink,
  sourceLink,
  privateSource,
  techUsed,
}) {
  let windowSize = useWindowSize()
  useEffect(() => {
    const projs = document.querySelectorAll('.Project-container')
    projs.forEach((proj) => {
      gsap.fromTo(
        proj,
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          duration: 0.25,
          x: 0,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: 'proj',
            trigger: proj,
            start: 'top bottom-=250',
          },
        }
      )
    })
  }, [])
  return (
    <ProjectContainer className="Project-container">
      <BackgroundImg style={{ backgroundImage: `url(/img/${bgImgUrl})` }}>
        <DullBackground />
        <SliderMask />
      </BackgroundImg>
      {windowSize > devSize.mobile && <ProjectNo>{projNo}</ProjectNo>}
      <ProjectInfo>
        <h2>{title}</h2>
        <h5>{desc}</h5>
        <CTAbuttons>
          <a href={visitLink} target="_blank" rel="noreferrer">
            <span>{windowSize > devSize.mobile ? 'Visit Site' : 'live'}</span>
            <span>&#8599;</span>
          </a>
          <a href={sourceLink} target="_blank" rel="noreferrer" className={`${privateSource && "private"}`}>
            <span>{windowSize > devSize.mobile ? (privateSource ? 'Private Source*' : 'Source Code') : (privateSource ? 'private*' : 'code')}</span>
            {!privateSource && <span>&#8599;</span>}
          </a>
        </CTAbuttons>
        {windowSize > devSize.mobile && <p>{summary}</p>}
        <Tech>
          {techUsed.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </Tech>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default Project
