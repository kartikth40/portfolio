import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.div`
  background: var(--secondary-dark);
  padding: 1rem 0 1rem 0;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 101;
`

const Logo = styled.a`
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100px;
    height: 100px;
  }
`
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    width: 100px;
    margin: 1rem;
    color: white;
    text-decoration: none;
    &:nth-child(2) {
      & img {
        max-height: 45px;
        object-fit: contain;
      }
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0) invert(1);
    }
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.2;
    }
  }
`
const Copyrights = styled.div`
  padding: 1rem;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, .6);
  font-family: var(--secondary-font-family);
  @media screen and ${device.mobile} {
    font-size: 10px;
    text-align: center;
  }
`

const ViewCount = styled.div`
  position: absolute;
  bottom: 0.8rem;
  left: 1.2rem;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
  font-family: var(--secondary-font-family);
  font-weight: bold;
  @media screen and ${device.mobile} {
    position: static;
    text-align: center;
    font-size: 9px;
    padding: 0.3rem 0 0.5rem;
  }
`

export { Container, Logo, FooterLinks, Copyrights, ViewCount }
