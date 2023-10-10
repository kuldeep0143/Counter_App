import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const incre = () => {
    setCount(count+1)
  }
  const decre = () => {
    setCount(count-1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <>
     <h1>Counter:{count}</h1>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </>
  )
}

export default App
