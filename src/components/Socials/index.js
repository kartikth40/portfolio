import { Container } from './styles'

function Socials() {
  return (
    <Container id="socials-container">
      <span>
        <a
          href="https://twitter.com/Kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/nolan/96/1A6DFF/C822FF/twitter-squared.png"
            alt="twitter-squared"
          />
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/nolan/96/1A6DFF/C822FF/linkedin.png"
            alt="linkedin"
          />
        </a>
      </span>
      <span>
        <a
          href="https://github.com/kartikth40"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/nolan/96/1A6DFF/C822FF/github.png"
            alt="github"
          />
        </a>
      </span>
      <span>
        <a
          href="mailto: kartikthakur.2409@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/nolan/96/1A6DFF/C822FF/gmail.png"
            alt="gmail"
          />
        </a>
      </span>
    </Container>
  )
}

export default Socials
