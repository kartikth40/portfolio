import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  scroll-margin-top: 50px;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: rgba(255, 255, 255, 0.1) 2px solid;

  @media screen and ${device.mobile} {
    padding: 4rem 1.5rem;
  }
`

const SectionTitle = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 4rem;
  margin-bottom: 3rem;

  @media screen and ${device.tablet} {
    font-size: 3rem;
  }
  @media screen and ${device.mobile} {
    font-size: 2.5rem;
  }
`

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.8rem 2.5rem;

  @media screen and ${device.mobile} {
    padding: 1.2rem 1rem;
  }
`

const Degree = styled.h3`
  font-family: var(--primary-font-family);
  font-size: 0.9rem;
  font-weight: 900;
  margin-bottom: 0.3rem;
`

const Institution = styled.p`
  font-size: 0.7rem;
  color: var(--primary-light-blue);
  font-family: var(--secondary-font-family);
  margin-bottom: 0.6rem;
`

const DetailRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;

  span {
    font-size: 0.5rem;
    opacity: 0.55;
    font-family: var(--secondary-font-family);
  }
`

export { Container, SectionTitle, Card, Degree, Institution, DetailRow }
