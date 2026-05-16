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
    const today = new Date().toISOString().split('T')[0]
    const scr = window.screen ? `${window.screen.width}x${window.screen.height}` : null
    return { num, firstVisit: today, lastVisit: today, visits: 1, screens: scr ? [scr] : [] }
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
            const sessionKey = `visited_portfolio_${visitorId}`
            const alreadyCounted = sessionStorage.getItem(sessionKey)
            const newVisits = alreadyCounted ? (existing.visits || 1) : (existing.visits || 1) + 1
            if (!alreadyCounted) sessionStorage.setItem(sessionKey, '1')
            set(visitorRef, {
              ...existing,
              lastVisit: today,
              visits: newVisits,
              screens: (() => {
                const list = Array.isArray(existing.screens) ? [...existing.screens] : (existing.screen ? [existing.screen] : [])
                const cur = window.screen ? `${window.screen.width}x${window.screen.height}` : null
                if (cur && !list.includes(cur)) list.push(cur)
                return list
              })()
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
