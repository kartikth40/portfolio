import { useEffect } from 'react'
import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Projects from './components/Projects/index'
import Footer from './components/Footer/index'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
