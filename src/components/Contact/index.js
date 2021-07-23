import React, { useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import gsap from 'gsap'

import {
  Background,
  Container,
  TopHeading,
  Contactform,
  Field,
  CloseBtn,
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
