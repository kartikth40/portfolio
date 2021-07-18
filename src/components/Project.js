import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useWindowSize from '../brain/useWindowSize'
import device, { size as devSize } from '../juice/mediaQueries'

gsap.registerPlugin(ScrollTrigger)

function Project({ projNo, bgImgUrl, title, desc, visitLink, sourceLink }) {
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
  aspect-ratio: 9 / 4;
  position: relative;
  @media screen and ${device.laptopS} {
    width: 650px;
    height: 300px;
  }
  @media screen and ${device.tablet} {
    width: 450px;
    height: 250px;
  }
  @media screen and ${device.mobile} {
    width: 300px;
    height: 200px;
  }
`
const BackgroundImg = styled.div`
  box-shadow: 5px 5px 30px black;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  @media screen and ${device.laptopS} {
    background-size: cover;
  }
  @media screen and ${device.tablet} {
    background-size: cover;
  }
  @media screen and ${device.mobile} {
    background-size: cover;
  }
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
  background: linear-gradient(
    to right,
    var(--primary-blue),
    var(--transparent-blue)
  );
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
  @media screen and ${device.tablet} {
    font-size: 100px;
  }
  @media screen and ${device.laptopS} {
    ${ProjectContainer}:hover & {
      top: -30%;
      opacity: 1;
    }
  }
`
const ProjectInfo = styled(AbsoluteContainer)`
  z-index: 20;
  display: flex;
  width: 100%;
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
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    opacity: 0;
    visibility: hidden;
    letter-spacing: 2px;
    padding: 0.5em 0.8em;
    outline: 0;
    margin-right: 1em;
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
  @media screen and ${device.tablet} {
    padding: 0 0 0 2rem;
    h2 {
      pointer-events: none;
      font-size: 30px;
    }
    h5 {
      pointer-events: none;
      font-size: 18px;
      width: 80%;
    }
    a {
      margin-bottom: 1em;
    }
  }
  @media screen and ${device.mobile} {
    padding: 0 0 0 1rem;
    h2 {
      pointer-events: none;
      font-size: 20px;
    }
    h5 {
      pointer-events: none;
      font-size: 15px;
    }
    a {
      margin-bottom: 1em;
      margin-right: 0;
    }
  }
  transition: 250ms all;
  ${ProjectContainer}:hover & {
    transform: scale(1.1) translateY(-10%);
  }
`
const CTAbuttons = styled.div`
  @media screen and ${device.mobile} {
    position: absolute;
    top: 250px;
    left: 0;
    width: 100%;
    a {
      width: 100%;
      text-align: center;
    }
    height: max-content;
  }
`
