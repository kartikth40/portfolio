import styled from 'styled-components'
import device from '../../juice/mediaQueries'

export const Button = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1.5rem;
  z-index: 999;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgba(134, 93, 255, 0.5);
  background: rgba(13, 13, 20, 0.85);
  color: var(--primary-light-blue);
  font-size: 1rem;
  cursor: pointer;
  backdrop-filter: blur(6px);
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
    bottom: 1.2rem;
    right: 1.2rem;
    width: 36px;
    height: 36px;
    font-size: 0.85rem;
  }
`
