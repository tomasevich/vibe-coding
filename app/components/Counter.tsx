'use client'

import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className={styles.counterContainer}>
      <h2 className={styles.title}>Счетчик</h2>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => setCount(count - 1)} className={styles.button}>
          -
        </button>
        <button onClick={() => setCount(count + 1)} className={styles.button}>
          +
        </button>
      </div>
    </div>
  )
}
