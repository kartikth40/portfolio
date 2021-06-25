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
          ease: 'power2.easein',
          opacity: 1,
        }
      )
    }
    document.body.classList.toggle('no-scroll')
  }, [showContacts])

  function closeContacts() {
    gsap.to(contactsPopUp.current, {
      duration: 0.5,
      y: -100,
      ease: 'power2.easein',
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
        <Container id="contact" ref={contactsPopUp}>
          <TopHeading>
            <h1>Want to Talk ? </h1>
          </TopHeading>

          <Contactform className="contact-Contactform" onSubmit={sendEmail}>
            <Field>
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" />
            </Field>
            <Field>
              <label>Email</label>
              <input type="email" name="email" placeholder="E-mail" />
            </Field>
            <Field>
              <label>Message</label>
              <textarea name="message" placeholder="Message" />
            </Field>
            <button type="submit" value="Send">
              Send
            </button>
          </Contactform>
          <CloseBtn onClick={closeContacts} />
        </Container>
      ) : null}
    </>
  )
}

export default Contact
const Container = styled.div`
  opacity: 0;
  padding: 3rem;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-dark2);
  width: 80vw;
  height: 75vh;
  z-index: 1000;
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
    font-weight: 400;
    display: none;
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
  & input::placeholder,
  & textarea::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    font-size: 1rem;
  }

  & button {
    margin-top: 1em;
    padding: 0.5em;
    width: 100px;
  }
`
const Field = styled.div`
  position: relative;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   width: 100%;
  //   height: 2px;
  //   background: white;
  // }
`
const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50px;
  right: 50px;
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
