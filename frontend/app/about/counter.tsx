'use client'
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const countUp = () => setCount((prev) => prev + 1)
  return (
    <>
      <h1>Counter</h1>
      <div>カウント: {count}</div>
      <button onClick={countUp}>カウントアップ</button>
    </>
  )
}

export default Counter
