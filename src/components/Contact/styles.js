import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const SuperContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem 4rem;
  background-color: var(--secondary-dark);
  border-top: 2px solid rgba(255, 255, 255, 0.1);

  @media screen and ${device.mobile} {
    padding: 3rem 1rem 3rem;
  }
`

const SectionTitle = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 4rem;
  margin-bottom: 2.5rem;
  text-align: center;

  @media screen and ${device.tablet} {
    font-size: 3rem;
  }
  @media screen and ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const Card = styled.div`
  width: 100%;
  max-width: 850px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(134, 93, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media screen and ${device.mobile} {
    border-radius: 12px;
    border-color: rgba(134, 93, 255, 0.15);
  }
`

const CardInner = styled.div`
  display: flex;

  @media screen and ${device.mobile} {
    flex-direction: column;
  }
`

const InfoPanel = styled.div`
  flex: 0 0 40%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);

  @media screen and ${device.mobile} {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding: 2rem 1.5rem;
  }
`

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(134, 93, 255, 0.3);
  margin-bottom: 1.2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 10%;
  }

  @media screen and ${device.mobile} {
    width: 56px;
    height: 56px;
    margin-bottom: 0.8rem;
  }
`

const InfoSubLine = styled.p`  font-size: ${({ $small }) => $small ? '0.5rem' : '0.7rem'};
  opacity: ${({ $small }) => $small ? '0.4' : '0.7'};
  font-family: ${({ $small }) => $small ? 'var(--secondary-font-family)' : 'var(--primary-font-family)'};
  line-height: 1.6;
  margin-bottom: ${({ $small }) => $small ? '0.8rem' : '1.5rem'};
  text-transform: ${({ $small }) => $small ? 'lowercase' : 'none'};
`

const LocationInfo = styled.p`
  font-size: 0.5rem;
  font-family: var(--secondary-font-family);
  color: rgba(255, 255, 255, 0.4);
  text-transform: lowercase;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  span {
    font-size: 0.6rem;
  }
`

const IconLinks = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
`

const IconLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  text-decoration: none;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: brightness(0) invert(1);
    opacity: 0.6;
  }

  &:hover {
    border-color: rgba(134, 93, 255, 0.5);
    background: rgba(134, 93, 255, 0.1);
    img { opacity: 1; }
  }
`

const FormPanel = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  align-items: center;

  @media screen and ${device.mobile} {
    padding: 2rem 1.5rem;
  }
`

const Contactform = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.55rem;
    font-family: var(--secondary-font-family);
    color: var(--primary-light-blue);
    margin-bottom: 6px;
    text-transform: lowercase;
  }

  input, textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    font-family: var(--primary-font-family);
    font-size: 0.8rem;
    padding: 8px 0;
    outline: none;
    transition: 0.2s border-color;
    border-radius: 0;
    -webkit-appearance: none;

    &:focus {
      border-bottom-color: var(--primary-blue);
    }

    @media screen and ${device.mobile} {
      font-size: 16px;
      padding: 10px 0;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }

  textarea {
    resize: none;
    min-height: 80px;
    font-size: 0.75rem;

    ::selection {
      color: white;
      background: var(--primary-blue);
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;

  @media screen and ${device.mobile} {
    flex-direction: column;
    gap: 0.6rem;
  }

  button {
    font-family: var(--secondary-font-family);
    font-size: 0.6rem;
    text-transform: lowercase;
    letter-spacing: 2px;
    padding: 0.6rem 1.5rem;
    border-radius: 6px;
    border: 1px solid rgba(134, 93, 255, 0.4);
    background: rgba(134, 93, 255, 0.1);
    color: white;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background: rgba(134, 93, 255, 0.25);
      border-color: var(--primary-blue);
    }

    &:active {
      transform: scale(0.97);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &[type="button"] {
      background: transparent;
      border-color: rgba(255, 255, 255, 0.15);
      &:hover {
        border-color: rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.05);
      }
    }

    @media screen and ${device.mobile} {
      width: 100%;
      padding: 0.8rem;
      font-size: 0.55rem;
    }
  }
`

const SuccessMessage = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-family: var(--handwritten-font-family);
  color: var(--primary-light-blue);
  padding: 3rem 0;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

export {
  SuperContainer,
  SectionTitle,
  Card,
  CardInner,
  InfoPanel,
  Avatar,
  InfoSubLine,
  LocationInfo,
  IconLinks,
  IconLink,
  FormPanel,
  Contactform,
  Field,
  ButtonContainer,
  SuccessMessage,
}
