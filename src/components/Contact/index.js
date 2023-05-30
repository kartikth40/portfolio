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
    const card = document.querySelector('.contact')

    function threeD(e) {
      const x = e.clientX
      const y = e.clientY

      const middleX = window.innerWidth / 2
      const middleY = window.innerHeight / 2

      const offsetX = ((x - middleX) / middleX) * 10
      const offsetY = ((y - middleY) / middleY) * 10

      card.style.setProperty('--rotateX', -1 * offsetY + 'deg')
      card.style.setProperty('--rotateY', offsetX + 'deg')
    }

    document.addEventListener('mousemove', threeD)
    return () => document.removeEventListener('mousemove', threeD)
  })

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        document.querySelector('.contact').classList.remove('sent')
        document.querySelector('.contactform').classList.remove('sent')

        setSent(false)
      }, 4000)
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
          document.querySelector('.contact').classList.add('sent')

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
            'Failed to send your message! 😓 Please contact me from my email id directly.'
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
      <Container className="contact">
        <span className="mail"></span>
        <span className="hidden">Thank you so much! 😊</span>
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
