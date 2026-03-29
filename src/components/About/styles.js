import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  scroll-margin-top: calc(50px);
  min-height: 100vh;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
  @media screen and ${device.mobile} {
    padding: 4rem 1.5rem 5rem;
  }
`
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ${device.mobile} {
    flex-direction: column;
  }
`
const Picture = styled.picture`
  height: 400px;
  width: 300px;
  margin-right: 2.5rem;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  border-radius: 5px;
  overflow: hidden;
  & span {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
    left: 0;
    top: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    border-radius: 5px;
  }
  @media screen and ${device.mobile} {
    width: 200px;
    height: 200px;
    margin-bottom: 3rem;
    margin-right: 0;
    border-radius: 50%;

    & img {
      border-radius: 50%;
      object-position: 50% 10%;
      transform: scale(1);
    }
    & span {
      border-radius: 50%;
    }
  }
`
const MainContect = styled.div`
  width: 70%;
  & h3 {
    font-size: 5rem;
    font-family: var(--secondary-font-family);
    margin-bottom: 30px;
    text-align: left;
  }  & span {
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.8em;
    font-weight: 900;
    font-family: var(--secondary-font-family);
  }
  & span:nth-last-child(2) {
    font-family: var(--primary-font-family);
    font-weight: 500;
    font-size: 1em;
    display: inline-block;
  }

  @media screen and ${device.mobile} {
  width: 80%;
    & h3 {
      font-size: 4rem;
    }
    & p {
      font-size: 0.7rem;
    }
  }
  @media screen and ${device.mobile} {
    & h3 {
      font-size: 2rem;
    }
    & p {
      font-size: 0.9rem;
    }
  }
`
const AboutLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  `
const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  width: max-content;
  margin-top: 10px;
  &:hover #giphy {
    opacity: 1;
    bottom: 0%;
  }
`

const StyledText = styled.span`
  white-space: nowrap;
  position: relative;
  text-align: center;
  width: 8.8rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: var(--secondary-font-family);
  color: #fff;
  padding: 10px 20px;
  border: 1px dashed #fff;
  border-radius: 30px;
  transition: 0.25s all;
  &: hover {
    width: 9.5rem;
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-bottom-color: #fff;
    left: 50%;
    bottom: -100px;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.15s all ease-out;
  }
  &:after {
    content: '';
    width: 2px;
    height: 30px;
    position: absolute;
    left: 50%;
    bottom: -130px;
    transform: translateX(-50%);
    opacity: 0;
    background-color: #fff;
    transition: 0.15s all ease-out;
  }

  &:hover:before {
    bottom: -20px;
    opacity: 1;
  }
  &:hover:after {
    bottom: -50px;
    opacity: 1;
  }

  img {
    position: absolute;
    transform: scaleX(-1);
    right: 0;
    bottom: 0;
    width: 50px;
    pointer-events: none;
    opacity: 0;
    transition: 0.25s all;
  }
  &:hover img {
    opacity: 1;
    bottom: 0%;
  }
`


const Divider = styled.hr`
  width: 100%;
  max-width: 900px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 3rem 0;
`

const SubTitle = styled.h4`
  font-family: var(--secondary-font-family);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 900px;
  opacity: 0.85;

  @media screen and ${device.mobile} {
    font-size: 1rem;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  width: 100%;
  max-width: 900px;

  @media screen and ${device.mobile} {
    grid-template-columns: 1fr;
  }
`

const CategoryBlock = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem 1.2rem;
`

const CategoryName = styled.h4`
  font-family: var(--secondary-font-family);
  font-size: 0.6rem;
  color: var(--primary-light-blue);
  margin-bottom: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`

const Tag = styled.span`
  font-size: 0.5rem;
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(134, 93, 255, 0.1);
  border: 1px solid rgba(134, 93, 255, 0.25);
  transition: 0.2s all;

  &:hover {
    background: rgba(134, 93, 255, 0.2);
    border-color: var(--primary-blue);
  }
`

const EduCard = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
`

const EduDegree = styled.h3`
  font-family: var(--primary-font-family);
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
`

const EduInstitution = styled.p`
  font-size: 0.6rem;
  color: var(--primary-light-blue);
  font-family: var(--secondary-font-family);
  margin-bottom: 0.5rem;
  text-transform: lowercase;
`

const EduMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;

  span {
    font-size: 0.45rem;
    opacity: 0.5;
    font-family: var(--secondary-font-family);
  }
`

export {
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
}
