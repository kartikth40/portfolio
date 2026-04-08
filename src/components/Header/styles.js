import styled, { keyframes } from 'styled-components'
import device from '../../juice/mediaQueries'

const load = keyframes`
0% {
  opacity: 0;
  top: -100px;
}
80% {
  opacity: 0;
  top: -100px;
}
100% {
  opacity: 1;
  top:0;
}
`
const Container = styled.header`
  width: 100%;
  height: 3.5rem;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
`
const HelperContainer = styled.div`
  padding: 1.5rem 3.5rem;
  font-family: var(--secondary-font-family);
  font-size: 0.7rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  animation: ${load} 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @media screen and ${device.tablet} {
    background: rgba(13, 13, 20, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }  @media screen and ${device.mobile} {
    padding: 1rem 1rem;
  }
`
const Logo = styled.a`
  text-decoration: none;
  width: 2.5rem;
  height: 2.5rem;
  transition: 250ms;
  & img {
    width: 100%;
    height: 100%;
  }
`
const HamContainer = styled.div`
  width: 2.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
const HamBurgerMenu = styled.button`
  display: none;
  position: relative;
  height: 4px;
  width: 40px;
  background: white;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: 0.25s transform 0.25s;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    border-radius: 10px;
    left: 0;
    transition: 1s all;
  }
  &::before {
    top: -10px;
  }
  &::after {
    top: 10px;
  }
  &.clicked {
    background: transparent;
  }
  &.clicked::before {
    animation: upperLine 0.5s forwards cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }
  &.clicked::after {
    animation: lowerLine 0.5s forwards cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }

  &.unclicked::before {
    animation: upperLineReverse 0.5s forwards
      cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }
  &.unclicked::after {
    animation: lowerLineReverse 0.5s forwards
      cubic-bezier(0.17, 0.67, 0.38, 1.4);
  }
  @media screen and ${device.tablet} {
    display: block;
  }

  @keyframes upperLine {
    0% {
      top: -10px;
    }
    30% {
      top: 0px;
    }
    50% {
      transform: rotate(0);
    }
    100% {
      top: 0px;
      transform: rotate(45deg);
    }
  }

  @keyframes lowerLine {
    0% {
      top: 10px;
    }
    50% {
      top: 0px;
    }
    80% {
      transform: rotate(0);
    }
    100% {
      top: 0px;
      transform: rotate(-45deg);
    }
  }

  @keyframes upperLineReverse {
    0% {
      top: 0px;
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(0);
    }
    80% {
      top: 0px;
    }
    100% {
      top: -10px;
    }
  }

  @keyframes lowerLineReverse {
    0% {
      top: 0px;
      transform: rotate(-45deg);
    }
    30% {
      transform: rotate(0);
    }
    50% {
      top: 0px;
    }
    100% {
      top: 10px;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media screen and ${device.tablet} {
    background: var(--secondary-dark);
    border-radius: 20px;
    box-shadow: 0 0 5px var(--primary-blue);
    position: absolute;
    z-index: -1;
    left: 0;
    top: -600%;
    width: 100%;
    padding: 200px 0 0;
    flex-direction: column;
    transition: 500ms all;
    &.active {
      top: -130px;
    }
  }
`
const NavItems = styled.a`
  font-size: 0.9rem;
  font-weight: 900;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-left: 1.5rem;
  display: flex;
  height: 100%;
  position: relative;

  &:hover {
    transition: 250ms all;
    color: black;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
  }
  &::before {
    transition: 250ms all;
    background: white;
  }

  &:hover&::before {
    transition: 250ms all;
    height: calc(100% + 10px);
  }
  @media screen and ${device.tablet} {
    height: 50px;
    padding: 10px 20px;
    margin: 0;
    z-index: -1;
    align-items: center;
    justify-content: center;
    &::before {
      display: none;
    }
    &:hover {
      color: black;
      background: white;
    }
  }
`
export {
  Container,
  HelperContainer,
  Logo,
  HamContainer,
  HamBurgerMenu,
  Nav,
  NavItems,
}
