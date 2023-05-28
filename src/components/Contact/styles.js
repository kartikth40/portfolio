import styled, { keyframes } from 'styled-components'
import device from '../../juice/mediaQueries'

const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 100px;
  margin-top: -100px;
  overflow: hidden;

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
const successAnimeMobile = keyframes`  0%{
  transform: perspective(5000px) rotateX(0deg) rotateZ(0deg) scale3d(1,1,1);
}
20%{
  transform: perspective(5000px) rotateX(80deg) rotateZ(00deg) scale3d(.8,.8,.8);
}
80%{
  transform: perspective(5000px) rotateX(80deg) rotateZ(00deg) scale3d(.8,.8,.8);
}
100%{
  transform: perspective(5000px) rotateX(0deg) rotateZ(0deg) scale3d(1,1,1);
}`
const mailOut = keyframes`  0%{
  transform:  rotateX(0deg) rotateZ(0deg) translateZ(-5px) translateY(0);
}
20%{
  transform:  rotateX(0deg) rotateZ(0deg) translateZ(-5px) translateY(0);

}
40%{
  transform:  rotateX(0deg) rotateZ(0deg) translateZ(-5px) translateY(-300px);
}

60%{
  transform:  rotateX(0deg) rotateZ(0deg) translateZ(-5px) translateY(-400px);

}
80%{
  transform:  rotateX(0deg) rotateZ(0deg)  translateZ(-5px) translateY(-10000px);
}
100%{
  transform:  rotateX(0deg) rotateZ(0deg) translateZ(-5px) translateY(-10000px);
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
    @media screen and ${device.mobile} {
      animation: ${successAnimeMobile} 4s linear forwards;
      border-radius: 20px;
    }
  }

  &.sent .hidden,
  &.sent .hidden:after {
    animation: ${show} 4s linear forwards;
  }

  & .mail {
    background: linear-gradient(
      to bottom,
      var(--primary-light-blue),
      var(--primary-blue)
    );
    position: absolute;
    inset: 0;
    font-size: 30px;
    color: black;
    border-radius: inherit;
    transform: rotateX(0deg) rotateZ(0deg) translateZ(-5px) translateY(0);
  }
  & .mail:after,
  & .mail:before {
    content: '';
    position: absolute;
    border-top: 20px solid var(--primary-blue);
    border-radius: 10px;
    width: 57%;
    top: 5%;
    @media screen and ${device.mobile} {
      width: 59%;
    }
  }
  & .mail:before {
    left: 5%;
    transform-origin: top left;
    transform: rotate(35deg);
  }
  & .mail:after {
    right: 5%;
    transform-origin: top right;
    transform: rotate(-35deg);
  }
  &.sent .mail {
    animation: ${mailOut} 4s linear;
  }

  & .hidden {
    position: absolute;
    right: 0;
    font-size: 30px;
    color: black;
    white-space: nowrap;
    transform: rotateX(270deg) rotateY(90deg) translateZ(15rem) translateY(0)
      translateX(-7.5rem);
    opacity: 0;
    @media screen and ${device.mobile} {
      font-size: 25px;
      bottom: 0;
      left: 50%;
      right: unset;
      transform: rotateX(-90deg) translateZ(5rem) translateY(0) translateX(-50%);
    }
  }
  & .hidden:after {
    content: 'Sent ✅';
    position: absolute;
    left: 50%;
    top: -150%;
    font-size: 30px;
    color: white;
    opacity: 0;
    transform: translateX(-50%);
    @media screen and ${device.tablet} {
      font-size: 25px;
    }
  }

  &:before,
  &:after {
    content: '';
    border-radius: inherit;
    position: absolute;
    inset: -0.7rem;
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
    transform: rotateX(0deg) rotateZ(0deg) translateZ(-50px) translateY(0);
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
