import { useState, useEffect } from 'react'
import { database } from './firebase'
import { ref, runTransaction, get, set } from 'firebase/database'

function getVisitorId() {
  let id = localStorage.getItem('visitor_id')
  if (!id) {
    id = Math.random().toString(36).substring(2) + Date.now().toString(36)
    localStorage.setItem('visitor_id', id)
  }
  return id
}

export default function useViewCount() {
  const [count, setCount] = useState(null)

  function visitorData(num) {
    var today = new Date().toISOString().split('T')[0];
    var screen = window.screen ? window.screen.width + 'x' + window.screen.height : '';
    return { num: num, firstVisit: today, lastVisit: today, visits: 1, screen: screen };
  }

  function visitorUpdate() {
    var today = new Date().toISOString().split('T')[0];
    return { lastVisit: today };
  }

  useEffect(() => {
    const visitorId = getVisitorId()
    const visitorRef = ref(database, `views/visitors/${visitorId}`)
    const totalRef = ref(database, 'views/total')

    get(visitorRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          return runTransaction(totalRef, (current) => (current || 0) + 1).then(
            (result) => {
              set(visitorRef, visitorData(result.snapshot.val()))
              setCount(result.snapshot.val())
            }
          )
        } else {
          // Returning visitor — update lastVisit
          const existing = snapshot.val()
          if (existing && typeof existing === 'object') {
            const today = new Date().toISOString().split('T')[0]
            const scr = window.screen ? `${window.screen.width}x${window.screen.height}` : ''
            set(visitorRef, {
              ...existing,
              lastVisit: today,
              visits: (existing.visits || 1) + 1,
              screen: existing.screen || scr
            })
          }
          return get(totalRef).then((snap) => setCount(snap.val() || 0))
        }
      })
      .catch((err) => {
        console.error('View count error:', err)
      })
  }, [])

  return count
}
