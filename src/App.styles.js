import styled from 'styled-components'
import device from './juice/mediaQueries'

export const ToggleBtn = styled.button`
  position: fixed;
  bottom: 1.2rem;
  left: 1.2rem;
  z-index: 100;
  background: rgba(13, 13, 20, 0.85);
  border: none;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: ${({ $on }) => ($on ? 'rgba(134,93,255,1)' : 'rgba(255,255,255,0.5)')};
  transition: 0.25s all;

  &:hover {
    color: ${({ $on }) => ($on ? 'rgba(163, 132, 255, 1)' : 'rgba(255,255,255,0.8)')};
    background: rgba(255, 255, 255, 0.05);
    transform: scale(1.2);
  }

  @media screen and ${device.mobile} {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const AnimHint = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 3.8rem;
  z-index: 100;
  background: rgba(13, 13, 20, 0.92);
  border: 1px solid rgba(134, 93, 255, 0.4);
  border-radius: 8px;
  padding: 0.4rem 0.7rem;
  font-family: var(--primary-font-family);
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  pointer-events: all;
  cursor: pointer;
  backdrop-filter: blur(8px);
  opacity: 0;
  transform: translateX(-8px);
  animation: hintIn 0.4s ease-out ${({ $instant }) => $instant ? '0s' : '3s'} forwards;

  @keyframes hintIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &.hiding {
    transition: 0.3s all;
    opacity: 0;
    transform: translateX(-8px);
  }
`

export const FpsGaugeWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 99;
  width: 2.2rem;
  height: 2.2rem;
  pointer-events: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .gauge-bg {
    fill: none;
    stroke: rgba(134, 93, 255, 0.08);
    stroke-width: 1.2;
  }

  .gauge-fill {
    fill: none;
    stroke-width: 1.2;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease, stroke 0.5s ease;
  }

  @media screen and ${device.mobile} {
    display: none;
  }
`

export const FpsNumber = styled.span`
  position: fixed;
  bottom: 3.4rem;
  left: 1.2rem;
  z-index: 100;
  width: 1.8rem;
  text-align: center;
  font-family: var(--secondary-font-family);
  font-size: 0.4rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: color 0.5s ease;
  opacity: 0.7;
  background: rgba(13, 13, 20, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 4px;
  padding: 0.12rem 0;

  @media screen and ${device.mobile} {
    display: none;
  }
`
