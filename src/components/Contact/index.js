import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  Block,
  Container,
  TopHeading,
  Contactform,
  Field,
  ButtonContainer,
  SuperContainer,
} from './styles'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        document.querySelector('.contactform').classList.remove('sent')

        setSent(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [sent])

  function handleSend(e) {
    e.preventDefault()
    setLoading(true)
    const templateParams = {
      name,
      email,
      message,
    }

    emailjs
      .send(
        'service_ft2rodg',
        'template_3phfmmi',
        templateParams,
        'user_7cG9hmB2cMQJLiupWm3fD'
      )
      .then(
        function (response) {
          document.querySelector('.contactform').classList.add('sent')
          console.log('SUCCESS!', response.status, response.text)
          setEmail('')
          setMessage('')
          setName('')

          setSent(true)
          setLoading(false)
        },
        function (error) {
          console.log('FAILED...', error)
          alert(
            'Failed to send your message! Please contact from my email id directly.'
          )
        }
      )
  }
  function handleCancel(e) {
    setEmail('')
    setMessage('')
    setName('')
  }

  return (
    <SuperContainer id="contact">
      <Container>
        <TopHeading>
          <h1>Wanna Talk ? </h1>
        </TopHeading>

        <Contactform className="contactform" onSubmit={handleSend}>
          <Block>
            <Field className="contact-name">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
            <Field className="contact-email">
              <label>Your E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Block>

          <Field className="contact-message">
            <label>Your Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Field>
          <ButtonContainer>
            <button type="submit" value="Send" disabled={loading}>
              {loading ? 'sending...' : 'send'}
            </button>
            <button type="reset" value="clear" onClick={handleCancel}>
              clear
            </button>
          </ButtonContainer>
        </Contactform>
      </Container>
    </SuperContainer>
  )
}

export default Contact
