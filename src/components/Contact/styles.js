import styled, { keyframes } from 'styled-components'
import device from '../../juice/mediaQueries'

const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 100px;
  margin-top: -100px;

  @media screen and ${device.mobile} {
    padding-bottom: 0;
    padding-top: 50px;
    margin-top: -50px;
  }
`
const rotate = keyframes`  0%{
  --gradient-angle: 0deg;
}
100%{
  --gradient-angle: 360deg;
}`

const show = keyframes`0%{opacity: 0;} 10%{opacity: 1} 80%{opacity: 1} 100%{opacity: 0;}`
const successAnime = keyframes`  0%{
  transform: perspective(5000px) rotateX(0deg) rotateZ(0deg) ;
  
}

20%{
  transform: perspective(5000px) rotateX(80deg) rotateZ(90deg) ;

}
80%{
  transform: perspective(5000px) rotateX(80deg) rotateZ(90deg) ;

}

100%{
  transform: perspective(5000px) rotateX(0deg) rotateZ(0deg) ;
  
}`
const Container = styled.div`
  --gradient-angle: 0deg;
  border-radius: 20px;
  border: 1px solid var(--primary-blue);
  position: relative;
  background-color: var(--secondary-dark);
  padding-top: 50px;
  padding-bottom: 50px;
  box-shadow: 0 0 20px var(--secondary-dark);
  width: 60vw;
  transition: 0.15s all;
  transform-style: preserve-3d;

  transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY));

  &.sent {
    animation: ${successAnime} 4s linear forwards;
  }

  &.sent .hidden:after {
    animation: ${show} 4s linear forwards;
  }

  & .hidden {
    position: absolute;
    right: 0;
    top: 50%;
    font-size: 30px;
    color: black;
    transform-style: preserve-3d;
    transform: perspective(5000px) rotateX(270deg) rotateY(90deg)
      translateZ(180px) translateY(25px) translateX(20px);
  }
  & .hidden:after {
    content: 'Sent ✅';
    position: absolute;
    right: 0;
    top: 50%;
    font-size: 30px;
    color: white;
    opacity: 0;
    transform-style: preserve-3d;
    transform: perspective(5000px) rotateX(180deg) rotateY(180deg)
      rotateZ(180deg) translateZ(0px) translateY(-70px) translateX(-100px);
  }

  &:before,
  &:after {
    content: '';
    border-radius: inherit;
    position: absolute;
    inset: -0.5rem;
    background: conic-gradient(
      from var(--gradient-angle),
      #865dff,
      #e384ff,
      #fff,
      #865dff,
      #e384ff,
      #fff,
      #865dff
    );
    animation: ${rotate} 3s linear infinite;
    /* backface-visibility: hidden; */
  }
  &:after {
    transform: translateZ(-50px);
  }
  &:before {
    transform: translateZ(-49px);
    filter: blur(15px);
  }

  @media screen and ${device.mobile} {
    border-radius: 0;
    box-shadow: none;
    width: 100vw;
    border: none;
    border-top: 1px solid var(--primary-blue);
    transform: none;

    &:before,
    &:after {
      inset: 0;
      top: -0.2rem;
      bottom: -0.2rem;
    }
    &:before {
      filter: blur(10px);
    }
  }
`

const TopHeading = styled.div`
  & h1 {
    /* font-family: var(--secondary-font-family); */
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0 5rem 1rem;

    @media screen and ${device.mobile} {
      font-weight: 900;
      font-size: 1rem;
      padding: 0 2rem 1rem;
    }
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

  @media screen and ${device.mobile} {
    flex-direction: column;
  }
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
    color: var(--primary-light-blue);
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  & input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }
  & input {
    border-radius: 5px;
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
    border-radius: 5px;
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
    font-weight: 400;
    resize: none;
    min-height: 90px;

    ::selection {
      color: white;
      background: var(--primary-blue);
    }
  }
  & button {
    border-radius: 5px;
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

  @media screen and ${device.tablet} {
    & button {
      font-weight: 400;
      font-size: 0.8em;
      width: max-content;
      padding: 0.5rem 1rem;
    }
  }
  @media screen and ${device.mobile} {
    padding: 0 2rem;

    & label {
      font-size: 0.9rem;
      font-weight: 900;
    }
    & input {
      font-size: 15px;
    }
    & textarea {
      min-height: 200px;
      font-weight: 400;
    }
    & button {
      font-weight: 400;
      font-size: 0.8em;
      width: max-content;
      padding: 0.5rem 1rem;
    }
  }
`
const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0;
  &:first-child {
    padding-right: 1rem;
    @media screen and ${device.mobile} {
      padding-right: 0;
    }
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
