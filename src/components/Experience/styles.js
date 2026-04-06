import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const Container = styled.section`
  scroll-margin-top: 50px;
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
  max-width: 800px;

  @media screen and ${device.tablet} {
    font-size: 3rem;
  }
  @media screen and ${device.mobile} {
    font-size: 2rem;
  }
`

const TabsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
`

const Tab = styled.button`
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
  max-width: 800px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem 2.5rem;
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
  margin-bottom: 1.5rem;
`

const CompanyName = styled.h3`
  font-family: var(--primary-font-family);
  font-size: 1.1rem;
  font-weight: 900;
  margin-bottom: 0.2rem;
`

const Meta = styled.p`
  font-size: 0.6rem;
  opacity: 0.5;
  font-family: var(--secondary-font-family);
`

/* --- Promotion timeline --- */

const RolesTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 1.8rem;
  padding-left: 0.2rem;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
`

const RoleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s all;
  background: ${({ $active }) => ($active ? 'rgba(134,93,255,0.1)' : 'transparent')};

  &:hover {
    background: rgba(134, 93, 255, 0.07);
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

const RoleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-left: -0.75rem;
  background: ${({ $active }) => ($active ? 'var(--primary-blue)' : 'rgba(255,255,255,0.2)')};
  box-shadow: ${({ $active }) => ($active ? '0 0 8px var(--primary-blue)' : 'none')};
  transition: 0.2s all;
`

const RoleLabel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;

  strong {
    font-size: 0.75rem;
    font-family: var(--primary-font-family);
    font-weight: 700;
  }
  span {
    font-size: 0.55rem;
    opacity: 0.5;
    font-family: var(--secondary-font-family);
    margin-top: 5px;
    text-transform: lowercase;
    white-space: normal;
    word-break: break-word;
  }
`

const PromotionBadge = styled.span`
  margin-left: auto;
  font-size: 0.5rem;
  font-family: var(--secondary-font-family);
  color: var(--primary-light-blue);
  background: rgba(134, 93, 255, 0.15);
  border: 1px solid rgba(134, 93, 255, 0.4);
  border-radius: 20px;
  padding: 0.2rem 0.6rem;
  white-space: nowrap;
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    margin-left: 1.5rem;
    margin-top: 0.2rem;
  }
`

const Bullets = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;

  li {
    font-size: 0.7rem;
    line-height: 1.7;
    opacity: 0.85;
    padding-left: 1.2rem;
    position: relative;
    margin-bottom: 0.6rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--primary-blue);
    }
  }

  @media screen and ${device.mobile} {
    li {
      font-size: 0.65rem;
    }
  }
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  span {
    font-size: 0.55rem;
    padding: 0.3rem 0.7rem;
    border-radius: 1rem;
    color: rgba(255, 255, 255, 0.7);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
  }
`

export {
  Container,
  SectionTitle,
  TabsRow,
  Tab,
  Card,
  CompanyHeader,
  CompanyName,
  Meta,
  RolesTimeline,
  RoleItem,
  RoleDot,
  RoleLabel,
  PromotionBadge,
  Bullets,
  TechTags,
}
