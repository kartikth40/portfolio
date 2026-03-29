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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 800px;

  @media screen and ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const CategoryBlock = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
`

const CategoryName = styled.h4`
  font-family: var(--secondary-font-family);
  font-size: 0.5rem;
  color: var(--primary-light-blue);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`

const Tag = styled.span`
  font-size: 0.55rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(134, 93, 255, 0.1);
  border: 1px solid rgba(134, 93, 255, 0.25);
  transition: 0.2s all;

  &:hover {
    background: rgba(134, 93, 255, 0.2);
    border-color: var(--primary-blue);
  }
`

export { Container, SectionTitle, Grid, CategoryBlock, CategoryName, TagsRow, Tag }
