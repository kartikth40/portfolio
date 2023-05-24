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
  position: relative;
  background-color: var(--secondary-dark);
  padding-top: 50px;
  padding-bottom: 50px;

  box-shadow: 0 0 20px var(--secondary-dark);

  width: 60vw;
  height: 500px;
`

const TopHeading = styled.div`
  & h1 {
    /* font-family: var(--secondary-font-family); */
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0 5rem 1rem;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    min-width: max-content;
    cursor: pointer;
  }

  & button:disabled {
    cursor: not-allowed;
  }
`

const Block = styled.div`
  display: flex;
  width: 100%;
`
const Contactform = styled.form`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  & label {
    font-size: 0.7rem;
    font-weight: 400;
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
    border: 1px solid var(--primary-blue);
    padding: 10px 10px;
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
    border: 1px solid var(--primary-blue);
    padding: 10px 10px;
    background: transparent;
    position: relative;
    font-family: var(--primary-font-family);
    font-size: 15px;
    font-weight: 100;
    resize: none;
    min-height: 90px;

    ::selection {
      color: white;
      background: var(--primary-blue);
    }
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
    background: var(--secondary-dark);
    border-radius: 10px;
    left: 0;
    top: 0;
    z-index: 1500;
    animation: sent 2s linear;

    @keyframes sent {
      0% {
        transform: translateY(100%);
      }
      30% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0);
      }
      70% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(100%);
      }
    }
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
  &:first-child {
    padding-right: 1rem;
  }
`

export {
  Container,
  TopHeading,
  Contactform,
  Field,
  ButtonContainer,
  SuperContainer,
  Block,
}
