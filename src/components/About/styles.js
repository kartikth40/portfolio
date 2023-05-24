import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  scroll-margin-top: calc(50px);

  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;
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
  width: 200px;
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
    transform: scale(1.5);
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
      transform: scale(1.8);
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
  }
  & span {
    display: block;
    margin-bottom: 0.3rem;
    font-family: var(--secondary-font-family);
  }
  & span:nth-last-child(2) {
    font-family: var(--primary-font-family);
    font-weight: 900;
    display: inline-block;
  }
  @media screen and ${device.tablet} {
    & h3 {
      font-size: 4rem;
    }
    & p {
      font-size: 0.7rem;
    }
  }
  @media screen and ${device.mobile} {
    & h3 {
      font-size: 3rem;
    }
    & p {
      font-size: 0.9rem;
    }
  }
`
const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  width: max-content;
  margin-top: 10px;
`
const StyledText = styled.div`
  position: relative;
  width: max-content;
  font-size: 20px;
  font-weight: bold;
  font-family: var(--secondary-font-family);
  color: #fff;
  padding: 10px 20px;
  border: 2px dashed #fff;
  border-radius: 30px;
  transition: 0.25s all;
  &: hover {
    border: 2px solid #fff;
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

  @media screen and ${device.tablet} {
    font-size: 0.7rem;
  }
  @media screen and ${device.mobile} {
    font-size: 0.9rem;
  }
`

export { Container, AboutSection, Picture, MainContect, StyledLink, StyledText }
