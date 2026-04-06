import styled from 'styled-components'
import device from '../../juice/mediaQueries'

const ProjectContainer = styled.div`
  margin: 1.5rem 0 0;
  width: 850px;
  border-radius: 5px;
  aspect-ratio: 9 / 4;
  position: relative;

  @media screen and ${device.laptopS} {
    width: 650px;
    height: 300px;
  }
  @media screen and ${device.tablet} {
    width: 50vw;
    height: 250px;
    margin: 1.5rem 0 0;
  }
  @media screen and ${device.mobile} {
    width: 90vw;
    height: auto;
    aspect-ratio: 4 / 3;
    margin: 1.5rem 0 0;
  }
`
const BackgroundImg = styled.div`
  box-shadow: 0 0 20px rgba(134, 93, 255, 0.15);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  @media screen and ${device.laptopS} {
    background-size: cover;
  }
  @media screen and ${device.tablet} {
    background-size: cover;
  }
  @media screen and ${device.mobile} {
    background-size: cover;
  }
`
const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const DullBackground = styled(AbsoluteContainer)`
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);

  &:after {
    position: absolute;
    content: '';
    inset: 0;
    z-index: 1;
    backdrop-filter: blur(10px);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.15' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E");
    background-size: 300px 300px;
    opacity: 0;
    transition: 0.25s all;
    @media screen and ${device.mobile} {
      backdrop-filter: blur(4px);
      opacity: 1;
      background-image: none;
      inset: -3px;
    }
    ${ProjectContainer}:hover & {
      opacity: 1;
    }
  }
`
const SliderMask = styled(AbsoluteContainer)`
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(13, 11, 30, 0.8),
    rgba(134, 93, 255, 0.3)
  );
  left: -100%;
  pointer-events: none;
  opacity: 0.8;
  transition: 250ms all cubic-bezier(1, 0.01, 0.2, 0.98);
  ${ProjectContainer}:hover & {
    left: 0;
  }
  @media screen and ${device.mobile} {
    left: 0;
  }
`
const ProjectNo = styled(AbsoluteContainer)`
  z-index: 3;
  pointer-events: none;
  top: 12px;
  left: 12px;
  width: auto;
  height: auto;
  opacity: 0;
  font-size: 0.55rem;
  font-family: var(--secondary-font-family);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(13, 11, 30, 0.6);
  border: 1px solid rgba(134, 93, 255, 0.3);
  border-radius: 6px;
  padding: 4px 10px;
  display: inline-block;
  transition: 250ms all;
  ${ProjectContainer}:hover & {
    opacity: 1;
  }
  @media screen and ${device.laptopS} {
    ${ProjectContainer}:hover & {
      opacity: 1;
    }
  }
  @media screen and ${device.tablet} {
    ${ProjectContainer}:hover & {
      opacity: 1;
    }
  }
  @media screen and ${device.mobile} {
    opacity: 1;
  }
`
const ProjectInfo = styled(AbsoluteContainer)`
  z-index: 20;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;
  pointer-events: none;
  transform: scale(1) translateY(10%);
  transition: 250ms all;
  opacity: 0;
  ${ProjectContainer}:hover & {
    transform: scale(1.1) translateY(0%);
    opacity: 1;
  }
  h2 {
    font-family: var(--primary-font-family);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 0;
  }
  h5 {
    margin-bottom: 1rem;
    font-weight: 400;
    position: relative;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }
  p {
    margin-top: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: 250ms all;

    ${ProjectContainer}:hover & {
      opacity: 1;
      visibility: visible;
    }
  }
  a {
    pointer-events: all;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    opacity: 0;
    visibility: hidden;
    letter-spacing: 2px;
    padding: 0.5em 0.8em;
    outline: 0;
    margin-right: 1em;
    border: 1px solid rgba(134, 93, 255, 0.8);
    border-radius: 1rem;
    color: white;
    background: rgba(134, 93, 255, 0.3);
    box-shadow: 0 0 10px rgba(134, 93, 255, 0.2);
    transition: 250ms all;
    &.private {
      background-color: rgba(0,0,0,.2);
      color: rgba(255,255,255,.5);
      border: 1px solid rgba(255,255,255,.15);
      box-shadow: none;
    }
    &.private:hover {
      background-color: rgba(0,0,0,.3);
    }
    &:hover {
      background: rgba(134, 93, 255, 0.3);
      border-color: var(--primary-blue);
      box-shadow: 0 0 15px rgba(134, 93, 255, 0.3);
      color: white;
    }
    ${ProjectContainer}:hover & {
      opacity: 1;
      visibility: visible;
    }
  }
  @media screen and ${device.laptopS} {
    padding: 0 2rem 0 2rem;
    transform: translateY(50%);

    ${ProjectContainer}:hover & {
      transform: translateY(0%);
    }
    p {
      font-size: 0.7rem;
      transform: translateY(-100%) scaleY(0);

      ${ProjectContainer}:hover & {
        transform: translateY(0%) scaleY(1);
      }
    }
  }
  @media screen and ${device.tablet} {
    padding: 0 0 0 2rem;
    transform: translateY(50%);

    ${ProjectContainer}:hover & {
      transform: translateY(0%);
    }
    h2 {
      pointer-events: none;
      font-size: 20px;
    }
    h5 {
      pointer-events: none;
      font-size: 10px;
      width: 80%;
      margin-bottom: 0.3rem;
    }
    a {
      margin-bottom: 0.2em;
      font-size: 10px;
    }
    p {
      margin-top: 0.2rem;
      font-size: 0.6rem;
      width: 90%;
      transform: translateY(-100%) scaleY(0);

      ${ProjectContainer}:hover & {
        transform: translateY(0%) scaleY(1);
      }
    }
  }
  @media screen and ${device.mobile} {
    padding: 1rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transform: none;
    opacity: 1;
    visibility: visible;
    pointer-events: all;

    ${ProjectContainer}:hover & {
      transform: none;
      opacity: 1;
    }
    h2 {
      position: relative;
      top: auto;
      text-align: left;
      pointer-events: none;
      font-size: 1.1rem;
      text-decoration: none;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
      margin-bottom: 0.2rem;
    }
    h5 {
      padding: 0;
      width: 100%;
      margin: 0 0 0.6rem;
      text-align: left;
      pointer-events: none;
      font-size: 0.6rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    p {
      opacity: 1;
      visibility: visible;
      font-size: 0.55rem;
    }
    a {
      font-size: 0.6rem;
      margin-right: 0.5em;
      margin-bottom: 0;
      opacity: 1;
      visibility: visible;
      padding: 0.4em 0.7em;
      background: rgba(134, 93, 255, 0.3);
      border-color: rgba(134, 93, 255, 0.8);
    }
  }
`
const Tech = styled.div`
  width: 100%;
  opacity: 0;
  ${ProjectContainer}:hover & {
    opacity: 1;
    transition: 0.5s all;
  }
  & span {
    font-weight: normal;
    font-size: 0.6rem;
    padding: 0.25rem 0.6rem;
    word-wrap: normal;
    display: inline-block;
    margin: 0.3rem 0.3rem 0 0;
    color: white;
    background: rgba(134, 93, 255, 0.3);
    border: 1px solid rgba(134, 93, 255, 0.6);
    border-radius: 20px;
  }
  @media screen and ${device.laptopS} {
    & span {
      font-size: 0.5rem;
    }
    transform: scaleY(0);
    ${ProjectContainer}:hover & {
      transform: scaleY(1);
    }
  }
  @media screen and ${device.tablet} {
    width: 90%;
    margin-top: 0.2rem;
    & span {
      font-size: 0.4rem;
      margin: 0rem 0.1rem 0.1rem 0;
    }
  }

  @media screen and ${device.mobile} {
    width: 100%;
    margin-top: 0.4rem;
    opacity: 1;
    transform: none;
    & span {
      font-size: 0.45rem;
      margin: 0.15rem 0.15rem 0 0;
      padding: 0.2rem 0.5rem;
      background: rgba(134, 93, 255, 0.3);
      border-color: rgba(134, 93, 255, 0.6);
      color: white;
    }
  }
`
const CTAbuttons = styled.div`
  @media screen and ${device.mobile} {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;

    a {
      font-size: 0.6rem;
      padding: 0.4em 0.7em;
    }
  }
`
const ExpandToggle = styled.button`
  display: block;
  margin: 0.6rem auto 3rem;
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--secondary-font-family);
  font-size: 0.5rem;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    border-color: var(--primary-blue);
    color: var(--primary-light-blue);
  }

  @media screen and ${device.mobile} {
    margin: 0.5rem auto 2rem;
  }
`

const DetailPanel = styled.div`
  width: 850px;
  margin: 0 auto 6rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media screen and ${device.laptopS} {
    width: 650px;
  }
  @media screen and ${device.tablet} {
    width: 50vw;
  }
  @media screen and ${device.mobile} {
    width: 90vw;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(13, 13, 20, 0.95);
  }
`

const DetailTabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`

const DetailTab = styled.button`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? 'var(--primary-blue)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'white' : 'rgba(255,255,255,0.4)')};
  font-family: var(--secondary-font-family);
  font-size: 0.6rem;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  transition: 0.2s all;
  text-transform: lowercase;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: white;
  }
`

const DetailContent = styled.div`
  padding: 1.5rem 2rem;

  @media screen and ${device.mobile} {
    padding: 1rem;
  }
`

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.65rem;
    line-height: 1.8;
    opacity: 0.85;
    padding-left: 1.2rem;
    position: relative;
    margin-bottom: 0.5rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--primary-blue);
    }
  }
`

export {
  ProjectContainer,
  BackgroundImg,
  DullBackground,
  SliderMask,
  ProjectNo,
  ProjectInfo,
  CTAbuttons,
  Tech,
  ExpandToggle,
  DetailPanel,
  DetailTabs,
  DetailTab,
  DetailContent,
  BulletList,
}
