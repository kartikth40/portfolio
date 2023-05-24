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
  box-shadow: 0 0 1em var(--primary-blue);
`

const Line = styled.div`
  width: 2px;
  height: 70px;
  background: var(--primary-blue);
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
  background: var(--primary-blue);
  border-radius: 50%;
  &:hover {
    background: #865dfe;
    box-shadow: 0 0 10px #865dfe;
  }
  & a {
    width: 30px;
    height: 30px;
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
