import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const ProjectContainer = styled.div`
  margin: 1.5rem 0 10rem;
  width: 900px;
  border-radius: 20px;
  aspect-ratio: 9 / 4;
  position: relative;

  @media screen and ${device.laptopS} {
    width: 650px;
    height: 300px;
    border-radius: 15px;
  }
  @media screen and ${device.tablet} {
    width: 50vw;
    height: 250px;
    margin: 1.5rem 0 3rem;
    border-radius: 10px;
  }
  @media screen and ${device.mobile} {
    width: 300px;
    height: 200px;
    margin: 1.5rem 0 2rem;
    border-radius: 10px;
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
    border-radius: 15px;
  }
  @media screen and ${device.tablet} {
    border-radius: 10px;
    background-size: cover;
  }
  @media screen and ${device.mobile} {
    background-size: cover;
    border-radius: 10px;
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
  backdrop-filter: blur(2px);
`
const SliderMask = styled(AbsoluteContainer)`
  z-index: 2;
  background: linear-gradient(
    to right,
    var(--primary-blue),
    var(--transparent-pink)
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
  pointer-events: none;
  top: 0;
  opacity: 0;
  color: white;
  font-size: 200px;
  font-weight: 900;
  padding: 0 1rem;
  text-shadow: -10px 10px 0 var(--primary-blue);

  display: flex;
  justify-content: flex-end;
  transition: 250ms all;
  ${ProjectContainer}:hover & {
    top: -20%;
    opacity: 1;
  }
  @media screen and ${device.laptopS} {
    ${ProjectContainer}:hover & {
      top: -50%;

      opacity: 1;
    }
  }
  @media screen and ${device.tablet} {
    font-size: 100px;
    ${ProjectContainer}:hover & {
      opacity: 1;
      top: -25%;
    }
  }
`
const ProjectInfo = styled(AbsoluteContainer)`
  z-index: 20;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;
  pointer-events: none;
  transition: 250ms all;
  ${ProjectContainer}:hover & {
    transform: scale(1.1) translateY(-10%);
  }
  h2 {
    font-family: var(--primary-font-family);
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 0;
  }
  h5 {
    margin-bottom: 1rem;
    font-weight: 400;
    position: relative;
  }
  p {
    margin-top: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: 250ms all;

    ${ProjectContainer}:hover & {
      opacity: 1;
      visibility: visible;
    }
  }
  a {
    pointer-events: all;
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
  @media screen and ${device.laptopS} {
    padding: 0 0 0 2rem;
    transform: translateY(50%);

    ${ProjectContainer}:hover & {
      transform: translateY(0%);
    }
    p {
      transform: translateY(-100%) scaleY(0);

      ${ProjectContainer}:hover & {
        transform: translateY(0%) scaleY(1);
      }
    }
  }
  @media screen and ${device.tablet} {
    padding: 0 0 0 2rem;
    transform: translateY(50%);

    ${ProjectContainer}:hover & {
      transform: translateY(0%);
    }
    h2 {
      pointer-events: none;
      font-size: 20px;
    }
    h5 {
      pointer-events: none;
      font-size: 15px;
      width: 80%;
    }
    a {
      margin-bottom: 1em;
      font-size: 14px;
    }
    p {
      margin-top: 0.2rem;
      font-size: 0.6rem;
      width: 90%;
      transform: translateY(-100%) scaleY(0);

      ${ProjectContainer}:hover & {
        transform: translateY(0%) scaleY(1);
      }
    }
  }
  @media screen and ${device.mobile} {
    padding: 0;
    transform: scale(1) translateY(0);
    ${ProjectContainer}:hover & {
      transform: scale(1.1) translateY(-10%);
    }
    h2 {
      text-align: center;
      pointer-events: none;
      font-size: 20px;
    }
    h5 {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      pointer-events: none;
      font-size: 15px;
    }
    a {
      margin-bottom: 1em;
      margin-right: 0;
    }
  }
`
const CTAbuttons = styled.div`
  @media screen and ${device.mobile} {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 5%;
    width: 90%;
    a {
      font-size: 14px;
      margin: 0 5px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-radius: 5px;
    }
    height: max-content;
  }
`
export {
  ProjectContainer,
  BackgroundImg,
  DullBackground,
  SliderMask,
  ProjectNo,
  ProjectInfo,
  CTAbuttons,
}
