import gsap from 'gsap'
const hero = document.querySelector('.hero-secondary')
const tl = gsap.timeline({ delay: 5 })

tl.to(hero, {
  '--maskSize1': '20%',
  duration: 0.5,
  ease: 'back.out(2)',
}).to(hero, {
  '--maskSize2': '28%',
  '--maskSize3': 'calc(28% + 0.1rem)',
  duration: 0.5,
  delay: 0.5,
  ease: 'back.out(2)',
})

const header = document.querySelector('#header')
const home = document.querySelector('#home')

const elementsNeedMouseOver = [header, home]
elementsNeedMouseOver.forEach((ele) => {
  ele.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e
    const x = Math.round(clientX)
    const y = Math.round(clientY)
    gsap.to(hero, {
      '--x': `${x}px`,
      '--y': `${y}px`,
      duration: 0.3,
      ease: 'sine.out',
    })
  })
})
let homeEnter = true
let headerEnter = true
home.addEventListener('mouseleave', () => {
  homeEnter = false
})
header.addEventListener('mouseleave', () => {
  headerEnter = false
})
home.addEventListener('mouseenter', () => {
  homeEnter = true
})
header.addEventListener('mouseenter', () => {
  headerEnter = true
})

setInterval(() => {
  if (!homeEnter && !headerEnter) {
    hero.classList.remove('show')
    hero.classList.add('hide')
  } else {
    hero.classList.remove('hide')
    hero.classList.add('show')
  }
}, 100)
