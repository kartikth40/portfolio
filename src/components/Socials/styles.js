import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--secondary-dark);
  border-radius: 10px;
  width: 40px;
  height: 210px;
  border: 1px solid var(--primary-blue);
  box-shadow: 0 0 2px var(--primary-blue);

  span {
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and ${device.laptopOnly} {
    opacity: 0;
    animation: show_up 0.5s ease-in-out forwards 2s;

    @keyframes show_up {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media screen and ${device.mobile} {
    width: 100vw;
    height: auto;
    padding: 10px 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    transform: translateY(100%);
    flex-direction: row;
    align-items: center;
    border-radius: 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
    z-index: 1100;
    transition: transform 400ms ease-in-out;

    span {
      margin: 0 auto;
      opacity: 0.7;
      a {
        img {
          width: 13vw;
          height: 13vw;
        }
      }
    }
    &.show {
      transform: translateY(0);
    }
  }
`

export { Container }
