'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h2>Счетчик</h2>
      <p style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}
