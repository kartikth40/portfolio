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

  useEffect(() => {
    const visitorId = getVisitorId()
    const visitorRef = ref(database, `views/visitors/${visitorId}`)
    const totalRef = ref(database, 'views/total')

    get(visitorRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          // New visitor — increment total and record the ID
          return runTransaction(totalRef, (current) => (current || 0) + 1).then(
            (result) => {
              // Write visitor ID after successful increment
              set(visitorRef, true)
              setCount(result.snapshot.val())
            }
          )
        } else {
          // Returning visitor — just read the total
          return get(totalRef).then((snap) => setCount(snap.val() || 0))
        }
      })
      .catch((err) => {
        console.error('View count error:', err)
      })
  }, [])

  return count
}
