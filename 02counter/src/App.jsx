import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    setCounter(counter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React Course {counter}</h1>
      <h1>Count : {counter}</h1>
      <button
        onClick={addValue}
      >Add value</button>
      
      <button
        onClick={removeValue}
      >Remove value</button> 
      
      <p>Footer :</p>
    </>
  )
}

export default App
