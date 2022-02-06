import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`
const Container = styled.div`
  opacity: 0;
  padding: 1rem 3rem;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--secondary-dark2);
  width: 50vw;
  height: 75vh;
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;

  &.sent:before {
    content: 'Sent ✅';
    color: white;
    font-size: 50px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--secondary-dark2);
    border-radius: 10px;
    left: 0;
    top: 0;
    z-index: 1500;
    animation: sent 1s ease forwards;
    opacity: 0;

    @keyframes sent {
      0% {
        opacity: 0;
      }
      50% {
      }
      100% {
        opacity: 1;
      }
    }
  }

  @media screen and ${device.mobile} {
    width: 100vw;
    height: 50vh;
    border-radius: none;
  }
  @media screen and ${device.tablet} {
    width: 100vw;
    height: 100vh;
    border-radius: none;
    padding: 1rem 1rem;
  }
`
const TopHeading = styled.div`
  & h1 {
    font-weight: 400;
    padding: 0 1rem;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Contactform = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  & label {
    font-size: 0.7rem;
    font-weight: 100;
    margin-bottom: 10px;
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  & input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }
  & input {
    color: white;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    position: relative;
    font-family: var(--primary-font-family);
    font-size: 20px;
  }
  & textarea {
    color: white;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    position: relative;
    font-family: var(--primary-font-family);
    font-size: 20px;
    resize: vertical;
    min-height: 90px;
  }
  & button {
    font-weight: 900;
    font-size: 0.8em;
    font-family: var(--primary-font-family);
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 1em;
    width: 150px;
    color: white;
    border: none;
    outline: none;
    background: linear-gradient(to right, #d835f8, #e358ff);
  }
  & button:hover {
    opacity: 0.7;
  }
  & button:active {
    transform: scale(0.95);
  }
  @media screen and ${device.mobile} {
    & label {
      font-size: 0.7rem;
    }
    & textarea {
      min-height: 100px;
    }
    & button {
      font-weight: 400;
      font-size: 0.8em;
    }
  }
`
const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0;
`
const GigaText = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 200px;
  font-weight: 900;
  transform: translateY(-50%);
  z-index: -1;
  color: rgba(255, 255, 255, 0.03);

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export {
  Background,
  Container,
  TopHeading,
  Contactform,
  Field,
  ButtonContainer,
  GigaText,
}
