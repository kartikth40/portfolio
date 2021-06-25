import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

import gsap from 'gsap'

function Contact({ showContacts, setShowContacts }) {
  let contactsPopUp = useRef(null)

  useEffect(() => {
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
  }, [showContacts])

  function closeContacts() {
    setShowContacts(false)
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
          <div>alt email address</div>
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
          <CloseBtn onClick={closeContacts} />
        </Container>
      ) : null}
    </>
  )
}

export default Contact
const Container = styled.div`
  opacity: 0;
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
    height: 50px;
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
