import React from 'react'
import styled from 'styled-components'

function Project({ projNo, bgImgUrl, title, desc, visitLink, sourceLink }) {
  return (
    <ProjectContainer>
      <BackgroundImg style={{ background: `url(/img/${bgImgUrl})` }}>
        <DullBackground />
        <SliderMask />
      </BackgroundImg>
      <ProjectNo>{projNo}</ProjectNo>
      <ProjectInfo>
        <h2>{title}</h2>
        <h5>{desc}</h5>
        <CTAbuttons>
          <a href={visitLink} target="_blank" rel="noreferrer">
            Visit Site
          </a>
          <a href={sourceLink} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </CTAbuttons>
      </ProjectInfo>
    </ProjectContainer>
  )
}

export default Project

const ProjectContainer = styled.div`
  margin: 1.5rem 0 10rem;
  width: 900px;
  height: 400px;
  position: relative;
`
const BackgroundImg = styled.div`
  box-shadow: 5px 5px 30px black;
  width: 100%;
  height: 100%;
  background-size: cover;
  position: relative;
  overflow: hidden;
`
const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const DullBackground = styled(AbsoluteContainer)`
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
`
const SliderMask = styled(AbsoluteContainer)`
  z-index: 2;
  background: linear-gradient(to right, var(--primary-blue), var(--transparent-blue));
  left: -100%;
  pointer-events: none;
  transition: 250ms all cubic-bezier(1, 0.01, 0.2, 0.98);
  ${ProjectContainer}:hover & {
    left: 0;
  }
`
const ProjectNo = styled(AbsoluteContainer)`
  z-index: 3;
  top: 0;
  opacity: 0;
  color: white;
  font-size: 200px;
  font-weight: 900;
  padding: 0 1rem;

  display: flex;
  justify-content: flex-end;
  transition: 250ms all;
  ${ProjectContainer}:hover & {
    top: -20%;
    opacity: 1;
  }
`
const ProjectInfo = styled(AbsoluteContainer)`
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 5rem;
  h2 {
    font-family: var(--primary-font-family);
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 0;
  }
  h5 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    opacity: 0;
    visibility: hidden;
    width: 100px;
    letter-spacing: 2px;
    padding: 0.5em 0.8em;
    margin-right: 1em;
    outline: 0;
    border: white 2px solid;
    border-radius: 1rem;
    color: white;
    background: transparent;
    transition: 250ms all;
    &:hover {
      background: white;
      color: black;
    }
    ${ProjectContainer}:hover & {
      opacity: 1;
      visibility: visible;
    }
  }
  transition: 250ms all;
  ${ProjectContainer}:hover & {
    transform: scale(1.1) translateY(-10%);
  }
`
const CTAbuttons = styled.div``
