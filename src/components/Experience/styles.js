import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  scroll-margin-top: 4rem;
  min-height: 100vh;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(13, 13, 20, 0.85) 0%, rgba(13, 11, 30, 0.92) 100%);
  border-top: 1px solid rgba(134, 93, 255, 0.1);
  border-bottom: none;
  border-image: linear-gradient(90deg, transparent 5%, rgba(134, 93, 255, 0.25) 50%, transparent 95%) 1;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  @media screen and ${device.mobile} {
    padding: 4rem 1.5rem;
  }
`

const SectionTitle = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 4rem;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 44rem;

  @media screen and ${device.tablet} {
    font-size: 3rem;
  }
  @media screen and ${device.mobile} {
    font-size: 2rem;
  }
  @media screen and ${device.desktop} {
    font-size: 5rem;
  }
`

const CompanyTabsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 44rem;
`

const CompanyTab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ $active }) => ($active ? 'rgba(134,93,255,0.15)' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? 'var(--primary-blue)' : 'rgba(255,255,255,0.15)')};
  border-radius: 8px;
  color: white;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  transition: 0.2s all;
  text-align: left;

  span {
    font-family: var(--secondary-font-family);
    font-size: 0.7rem;
    text-transform: lowercase;
    font-weight: 900;
  }
  small {
    font-family: var(--secondary-font-family);
    font-size: 0.55rem;
    opacity: 0.6;
    margin-top: 5px;
    text-transform: lowercase;
  }

  &:hover {
    border-color: var(--primary-blue);
    background: rgba(134, 93, 255, 0.08);
  }
`

const Card = styled.div`
  width: 100%;
  max-width: 44rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem 2.5rem 1.5rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media screen and ${device.mobile} {
    padding: 1.5rem 1rem;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(13, 13, 20, 0.95);
  }
`

const CompanyHeader = styled.div`
  margin-bottom: 1.2rem;
`

const CompanyName = styled.h3`
  font-family: var(--primary-font-family);
  font-size: 1.1rem;
  font-weight: 900;
  margin-bottom: 0.3rem;
`

const RoleLine = styled.p`
  font-family: var(--primary-font-family);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary-light-blue);
  margin-bottom: 0.2rem;
`

const Meta = styled.p`
  font-size: 0.6rem;
  opacity: 0.5;
  font-family: var(--secondary-font-family);
  text-transform: lowercase;
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;

  span {
    font-size: 0.5rem;
    padding: 0.25rem 0.7rem;
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(134, 93, 255, 0.1);
    border: 1px solid rgba(134, 93, 255, 0.25);
    transition: 0.2s all;

    &:hover {
      background: rgba(134, 93, 255, 0.2);
      border-color: var(--primary-blue);
    }
  }
`

const SubTabsRow = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

const SubTab = styled.button`
  background: ${({ $active }) => ($active ? 'rgba(134,93,255,0.12)' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(134,93,255,0.4)' : 'rgba(255,255,255,0.1)')};
  border-radius: 6px;
  color: ${({ $active }) => ($active ? 'white' : 'rgba(255,255,255,0.6)')};
  padding: 0.4rem 0.9rem;
  font-size: 0.55rem;
  font-family: var(--secondary-font-family);
  text-transform: lowercase;
  cursor: pointer;
  transition: 0.2s all;
  white-space: nowrap;

  &:hover {
    border-color: rgba(134, 93, 255, 0.5);
    color: white;
    background: rgba(134, 93, 255, 0.08);
  }

  @media screen and ${device.mobile} {
    font-size: 0.5rem;
    padding: 0.35rem 0.7rem;
  }
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContentText = styled.p`
  font-size: 0.72rem;
  line-height: 1.8;
  opacity: 0.85;
  font-family: var(--primary-font-family);

  @media screen and ${device.mobile} {
    font-size: 0.65rem;
  }
  @media screen and ${device.desktop} {
    font-size: 0.8rem;
  }
`

const ContentListHeading = styled.p`
  font-size: 0.72rem;
  line-height: 1.7;
  opacity: 0.85;
  font-family: var(--primary-font-family);
  margin-bottom: 0.4rem;

  @media screen and ${device.mobile} {
    font-size: 0.65rem;
  }
  @media screen and ${device.desktop} {
    font-size: 0.8rem;
  }
`

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.68rem;
    line-height: 1.7;
    opacity: 0.8;
    padding-left: 1.2rem;
    position: relative;
    margin-bottom: 0.3rem;
    font-family: var(--primary-font-family);

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--primary-blue);
    }
  }

  @media screen and ${device.mobile} {
    li {
      font-size: 0.6rem;
    }
  }
  @media screen and ${device.desktop} {
    li {
      font-size: 0.75rem;
    }
  }
`

export {
  Container,
  SectionTitle,
  CompanyTabsRow,
  CompanyTab,
  Card,
  CompanyHeader,
  CompanyName,
  RoleLine,
  Meta,
  TechTags,
  SubTabsRow,
  SubTab,
  ContentBlock,
  ContentText,
  ContentListHeading,
  ContentList,
}
