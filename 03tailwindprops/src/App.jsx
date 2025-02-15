import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-3xl'>Vite with tailwind</h1>
      <Cards username = 'something' />
    </>
  )
}

export default App
