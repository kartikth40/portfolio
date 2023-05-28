import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--secondary-dark);
  border-radius: 10px;
  width: 40px;
  height: 210px;

  span {
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and ${device.mobile} {
    width: 100vw;
    height: 145px;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%, 0);
    flex-direction: row;
    align-items: flex-start;
    border-radius: 20px;
    box-shadow: 0 0 5px var(--primary-blue);

    transition: 500ms all;

    span {
      margin: 10px auto;
      opacity: 0.7;
      a {
        img {
          width: 13vw;
          height: 13vw;
        }
      }
    }
    &.show {
      bottom: -75px;
    }
  }
`

export { Container }
