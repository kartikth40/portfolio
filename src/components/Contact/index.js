import React, { useEffect, useRef } from 'react'

import {
  Background,
  Container,
  TopHeading,
  Contactform,
  Field,
  ButtonContainer,
  SuperContainer,
} from './styles'

function Contact() {
  return (
    <SuperContainer id="contact">
      <Container>
        <TopHeading>
          <h1>Lets Talk ... </h1>
        </TopHeading>

        <Contactform className="contact-Contactform">
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
            <button type="button" value="cancel">
              Cancel
            </button>
          </ButtonContainer>
        </Contactform>
      </Container>
    </SuperContainer>
  )
}

export default Contact
