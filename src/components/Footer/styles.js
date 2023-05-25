import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.div`
  background: var(--secondary-dark);
  padding: 1rem 0 1rem 0;
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

export { Container, Logo, FooterLinks, Copyrights }
