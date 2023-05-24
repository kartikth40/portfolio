import { Container } from './styles'

function Socials() {
  return (
    <Container>
      <span>
        <a
          href="https://twitter.com/Kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/twitter_logo.png" alt="twitter logo" />
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/linkedin_logo.png" alt="linkedin logo" />
        </a>
      </span>
      <span>
        <a
          href="https://github.com/kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github_logo.png" alt="github logo" />
        </a>
      </span>
      <span>
        <a
          href="mailto: kartikthakur.2409@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/mail_logo.png" alt="github logo" />
        </a>
      </span>
    </Container>
  )
}

export default Socials
