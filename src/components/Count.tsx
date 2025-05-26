import { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)

  log()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

function log() {
  console.log('count!')
}
