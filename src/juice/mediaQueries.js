const size = {
  mobile: 500,
  tablet: 900,
  laptopS: 1250,
  desktop: 1800,
  desktopL: 2200,
  desktop4K: 2800,
}

const device = {
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptopS: `(max-width: ${size.laptopS}px)`,
  laptopOnly: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
  desktop4K: `(min-width: ${size.desktop4K}px)`,
}

export default device
export { size }
