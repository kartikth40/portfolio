import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.div`
  background: var(--secondary-dark);
  padding: 2rem 0 4rem 0;
`
const SocialSidebar = styled.div`
  position: fixed;
  bottom: 0;
  right: 65px;
  box-shadow: 0 0 1em var(--primary);
`

const Line = styled.div`
  width: 2px;
  height: 100px;
  background: var(--primary);
`
const Circle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 50%;
  &:hover {
    background: rgb(149, 255, 244);
    box-shadow: 0 0 10px rgb(149, 255, 244);
  }
  & a {
    width: 25px;
    height: 25px;
  }
  & a img {
    border-radius: 50%;
    background: white;
    width: 100%;
    height: 100%;
    margin: 0;
  }
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
    height: 35px;
    margin: 1rem;
    color: white;
    text-decoration: none;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  color: rgba(255, 255, 255, 0.3);
  @media screen and ${device.mobile} {
    font-size: 10px;
  }
`
export { Container, SocialSidebar, Line, Circle, Logo, FooterLinks, Copyrights }
