import React, { useState, useEffect } from 'react'
import { Button } from './styles'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollUp() {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button $visible={visible} onClick={scrollUp} aria-label="Scroll to top">
      ↑
    </Button>
  )
}

export default ScrollToTop
