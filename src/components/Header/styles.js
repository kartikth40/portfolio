import styled, { keyframes } from 'styled-components'
import device from '../../juice/mediaQueries'

const load = keyframes`
0% {
  opacity: 0;
  top: -100px;
}

100% {
  opacity: 1;
  top:0;
}
`
const Container = styled.header`
  font-family: var(--secondary-font-family);
  font-size: 0.7rem;
  padding: 30px 70px;
  width: 100%;
  color: white;
  position: fixed;
  top: -100px;
  z-index: 1000;
  display: flex;
  opacity: 0;

  justify-content: space-between;
  align-items: center;
  animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;

  @media screen and ${device.tablet} {
    background: black;
  }
  @media screen and ${device.mobile} {
    padding: 20px 20px;
  }
`
const Logo = styled.a`
  text-decoration: none;
  width: 50px;
  height: 50px;
  transition: 250ms;
  & img {
    width: 100%;
    height: 100%;
  }
`
const HamContainer = styled.div`
  width: 50px;
  height: 40px;
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
    background: black;
    position: absolute;
    z-index: -1;
    left: 0;
    top: -150%;
    width: 100%;
    flex-direction: column;
    transition: 250ms all;
    &.active {
      top: 80px;
    }
  }
`
const NavItems = styled.a`
  font-size: 0.9rem;
  font-weight: 900;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-left: 30px;
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
export { Container, Logo, HamContainer, HamBurgerMenu, Nav, NavItems }
