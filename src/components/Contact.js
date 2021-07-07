import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

import gsap from 'gsap'

function Contact({ showContacts, setShowContacts }) {
  let contactsPopUp = useRef(null)

  useEffect(() => {
    if (showContacts) {
      gsap.fromTo(
        contactsPopUp.current,
        {
          opacity: 0,
          y: -100,
        },
        {
          duration: 0.5,
          y: 0,

          opacity: 1,
        }
      )
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [showContacts])

  function closeContacts() {
    gsap.to(contactsPopUp.current, {
      duration: 0.5,
      y: -100,

      opacity: 0,
    })
    setTimeout(() => {
      setShowContacts(false)
    }, 500)
  }

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_ft2rodg', 'template_3phfmmi', e.target, 'user_7cG9hmB2cMQJLiupWm3fD').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }
  return (
    <>
      {showContacts ? (
        <Background>
          <Container id="contact" ref={contactsPopUp}>
            <TopHeading>
              <h1>Want to Talk ? </h1>
            </TopHeading>

            <Contactform className="contact-Contactform" onSubmit={sendEmail}>
              <Field>
                <label>Name</label>
                <input type="text" name="name" />
              </Field>
              <Field>
                <label>E-mail</label>
                <input type="email" name="email" />
              </Field>
              <Field>
                <label>Message</label>
                <textarea name="message" />
              </Field>
              <button type="submit" value="Send">
                Send Message
              </button>
            </Contactform>
            <CloseBtn onClick={closeContacts} />
            <GigaText>Contacts</GigaText>
          </Container>
        </Background>
      ) : null}
    </>
  )
}

export default Contact

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
  padding: 3rem;
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
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
    border-radius: none;
  }
`
const TopHeading = styled.div`
  & h1 {
    font-weight: 400;
  }
`
const Contactform = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  & label {
    font-size: 0.6rem;
    font-weight: 400;
  }
  & input,
  & textarea {
    color: white;
    outline: none;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    position: relative;
    margin-top: 1rem;
    font-size: 1rem;
    resize: horizontal;
    max-width: 50vw;
  }
  & textarea {
    height: 50px;
  }
  & button {
    font-weight: 900;
    font-size: 0.8em;
    margin-top: 1em;
    margin-bottom: 3em;
    padding: 1em;
    width: max-content;
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
  @media screen and (max-width: 500px) {
    & label {
      font-size: 1rem;
    }
    & textarea {
      height: 100px;
    }
  }
`
const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0;
`
const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  outline: none;
  border: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 40px;
    border-radius: 2px;
    background: white;
    left: 50%;
    top: 50%;
    transition: 500ms all;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover::before {
    transform: translate(-50%, -50%) rotate(135deg);
    background: red;
  }
  &:hover::after {
    transform: translate(-50%, -50%) rotate(-135deg);
    background: red;
  }
`
const GigaText = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  font-size: 200px;
  font-weight: 900;
  z-index: -1;
  color: rgba(255, 255, 255, 0.03);
`
