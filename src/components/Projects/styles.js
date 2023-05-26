import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  margin-top: 100px;
  scroll-margin-top: 200px;
  display: flex;
  @media screen and ${device.mobile} {
    flex-direction: column;
    margin-bottom: 100px;
  }
`
const SidewaysTitle = styled.div`
  writing-mode: vertical-lr;
  letter-spacing: 50px;
  margin: 0 2rem;
  color: rgba(255, 255, 255, 0.1);
  font-family: var(--secondary-font-family);
  font-size: 10rem;
  position: relative;
  pointer-events: none;
  @media screen and ${device.laptopS} {
    letter-spacing: 5px;
    margin: 0 0 0 1rem;
    font-size: 10rem;
  }
  @media screen and ${device.tablet} {
    letter-spacing: 5px;
    margin: 0 0 4rem 2rem;
    font-size: 7rem;
  }
  @media screen and ${device.mobile} {
    display: none;
  }
`
const UpperTitle = styled.div`
  width: 6.1em;
  height: 1.8em;
  position: absolute;
  font-family: var(--primary-font-family);
  top: -0.4em;
  left: 0.7em;
  color: white;
  writing-mode: horizontal-tb;
  letter-spacing: 0;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 0.16em;
  pointer-events: auto;
`
const InnerTitle = styled.div`
  width: 6.1em;
  height: 1.8em;
  position: absolute;
  top: 1em;
  left: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  writing-mode: horizontal-tb;
  letter-spacing: 0;
  font-weight: 100;
  font-size: 0.14em;
  pointer-events: auto;
`
const SimpleHeading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-family: var(--secondary-font-family);
  margin-bottom: 2rem;
`
const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
export {
  Container,
  SidewaysTitle,
  UpperTitle,
  InnerTitle,
  SimpleHeading,
  ProjectsContainer,
}
