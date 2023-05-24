import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-blue);
  border-radius: 40px;
  width: 40px;
  height: 200px;

  @media screen and ${device.tablet} {
    display: none;
  }

  span {
    margin: 5px auto;
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`

export { Container }
