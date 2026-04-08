import styled from 'styled-components'
import device from '../../juice/mediaQueries'

export const Button = styled.button`
  position: fixed;
  bottom: 1.2rem;
  right: 1.2rem;
  z-index: 999;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  border: 1px solid rgba(134, 93, 255, 0.5);
  background: rgba(13, 13, 20, 0.85);
  color: var(--primary-light-blue);
  font-size: 1rem;
  cursor: pointer;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: 0.25s all;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'all' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '10px')});

  &:hover {
    background: var(--primary-blue);
    border-color: var(--primary-blue);
    color: white;
  }

  @media screen and ${device.mobile} {
    width: 1.8rem;
    height: 1.8rem;
    font-size: 0.85rem;
  }
`
