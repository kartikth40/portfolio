import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

import {
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
} from './styles'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [sent])

  function handleSend(e) {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        'service_ft2rodg',
        'template_3phfmmi',
        { name, email, message },
        'user_7cG9hmB2cMQJLiupWm3fD'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          setEmail('')
          setMessage('')
          setName('')
          setSent(true)
          setLoading(false)
        },
        function (error) {
          console.log('FAILED...', error)
          setLoading(false)
          alert('Failed to send your message! Please contact me via email directly.')
        }
      )
  }

  function handleCancel() {
    setEmail('')
    setMessage('')
    setName('')
  }

  return (
    <SuperContainer id="contact">
      <SectionTitle>let's connect</SectionTitle>
      <Card>
        <CardInner>
          <InfoPanel>
            <Avatar>
              <img src="/img/kartik_pfp.jpg" alt="Kartik Thakur" />
            </Avatar>
            <InfoSubLine>
              always up for a good tech conversation.
            </InfoSubLine>
            <LocationInfo>
              <span>📍</span> based in india · utc+5:30
            </LocationInfo>
            <InfoSubLine $small>reach me directly</InfoSubLine>
            <IconLinks>
              <IconLink href="mailto:kartikthakur.2409@gmail.com" title="Email">
                <img src="/icons/mail_logo.png" alt="email" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/kartikth40" target="_blank" rel="noreferrer" title="LinkedIn">
                <img src="/icons/linkedin_logo.png" alt="linkedin" />
              </IconLink>
              <IconLink href="https://github.com/kartikth40" target="_blank" rel="noreferrer" title="GitHub">
                <img src="/icons/github_logo.png" alt="github" />
              </IconLink>
              <IconLink href="https://twitter.com/Kartikth40" target="_blank" rel="noreferrer" title="X (Twitter)">
                <img src="/icons/x_logo.png" alt="x" />
              </IconLink>
            </IconLinks>
          </InfoPanel>
          <FormPanel>
            {sent ? (
              <SuccessMessage>Talk soon! 🚀</SuccessMessage>
            ) : (
              <Contactform onSubmit={handleSend}>
                <Field>
                  <label>name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </Field>
                <Field>
                  <label>email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Field>
                <Field>
                  <label>message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </Field>
                <ButtonContainer>
                  <button type="submit" disabled={loading}>
                    {loading ? 'sending...' : 'send'}
                  </button>
                  <button type="button" onClick={handleCancel}>
                    clear
                  </button>
                </ButtonContainer>
              </Contactform>
            )}
          </FormPanel>
        </CardInner>
      </Card>
    </SuperContainer>
  )
}

export default Contact
