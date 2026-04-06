import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  padding-top: 100px;
  scroll-margin-top: 200px;
  display: flex;
  background: linear-gradient(180deg, rgba(13, 13, 20, 0.85) 0%, rgba(13, 11, 30, 0.92) 100%);
  border-top: 1px solid rgba(134, 93, 255, 0.1);
  @media screen and ${device.mobile} {
    flex-direction: column;
  }
`
const SidewaysTitle = styled.div`
  writing-mode: vertical-lr;
  margin: 0 2rem;
  color: rgba(255, 255, 255, 0.1);
  font-family: var(--secondary-font-family);
  font-size: 7rem;
  position: relative;
  pointer-events: none;
  @media screen and ${device.laptopS} {
    letter-spacing: 5px;
    margin: 0 0 0 1rem;
    font-size: 5.5rem;
  }
  @media screen and ${device.tablet} {
    letter-spacing: 5px;
    margin: 0 0 4rem 2rem;
    font-size: 5rem;
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
  font-weight: 500;
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
  font-weight: 900;
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
  margin-bottom: 2rem;
`
export {
  Container,
  SidewaysTitle,
  UpperTitle,
  InnerTitle,
  SimpleHeading,
  ProjectsContainer,
}
