import React, { useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import gsap from 'gsap'

import {
  Background,
  Container,
  TopHeading,
  Contactform,
  Field,
  ButtonContainer,
  GigaText,
} from './styles'

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

  function closeContacts(delay) {
    if (typeof delay != 'number') {
      delay = 0
    }
    gsap.to(contactsPopUp.current, {
      delay: delay / 1000,
      duration: 0.5,
      y: -100,
      opacity: 0,
    })
    setTimeout(() => {
      setShowContacts(false)
    }, delay + 500)
  }

  function sendEmail(e) {
    e.preventDefault()

    let name = e.target.elements.name?.value
    let email = e.target.elements.email?.value
    let message = e.target.elements.message?.value

    if (!name || !email || !message) alert('Please fill the form correctly!')

    emailjs
      .sendForm(
        'service_ft2rodg',
        'template_3phfmmi',
        e.target,
        'user_7cG9hmB2cMQJLiupWm3fD'
      )
      .then(
        (result) => {
          console.log(result.text)
          document.querySelector('#contact').classList.add('sent')
          closeContacts(1500)
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
              <Field className="contact-name">
                <label>Your Name</label>
                <input type="text" name="name" required autoFocus />
              </Field>
              <Field className="contact-email">
                <label>Your E-mail</label>
                <input type="email" name="email" required />
              </Field>
              <Field className="contact-message">
                <label>Your Message</label>
                <textarea name="message" required />
              </Field>
              <ButtonContainer>
                <button type="submit" value="Send">
                  Send
                </button>
                <button type="button" value="cancel" onClick={closeContacts}>
                  Cancel
                </button>
              </ButtonContainer>
            </Contactform>
            <GigaText>Contacts</GigaText>
          </Container>
        </Background>
      ) : null}
    </>
  )
}

export default Contact
