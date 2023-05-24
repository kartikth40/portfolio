import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 100px;
  margin-top: -100px;
`

const Container = styled.div`
  border-radius: 20px;
  background-color: var(--secondary-dark);
  padding-top: 50px;
  padding-bottom: 50px;

  box-shadow: 0 0 20px var(--secondary-dark);

  width: 60vw;
  height: 500px;
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
    background: var(--primary-blue);
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

export {
  Container,
  TopHeading,
  Contactform,
  Field,
  ButtonContainer,
  SuperContainer,
}
