const header = document.querySelector('#header')
const home = document.querySelector('#home')

const headerSectionOptions = {
  rootMargin: '-200px 0px 0px 0px',
}

const headerSectionObserver = new IntersectionObserver(function (
  entries,
  headerSectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled')
    } else {
      header.classList.remove('nav-scrolled')
    }
  })
},
headerSectionOptions)

headerSectionObserver.observe(home)
