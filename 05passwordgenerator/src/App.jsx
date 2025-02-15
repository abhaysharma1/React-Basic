import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  let [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatepassword = useCallback(()=>{
        let pass = ''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str += '0123456789'
        if (charAllowed) str += '!@#$%^&*()-_=+[]{}|:.<>?/~'

        for (let i = 0; i < length; i++) {
          const char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
        }

        setPassword(pass)
  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
    generatepassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className= 'w-screen h-screen bg-gray-900 flex justify-center p-4 text-white' >
      <div className='w-3/4 h-1/4 bg-gray-800 rounded-3xl m-4 p-10'>
      <h1 className='pb-4 text-xl'>Password Generator</h1>
        <div>
          <input 
          type="text"
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}          
          className='bg-white rounded-s-lg w-5/6 h-10 text-black p-3'/>
          
          <button 
          onClick={copyPasswordToClipboard}
          className='bg-gray-500 w-1/6 h-10 rounded-r-lg'>
          Copy</button>
        </div>

        <div className='pt-4 flex justify-between'>
          <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(e.target.value)}
           />
          <h1 className='p-2 text-white'>Length:{length}</h1>
          
          <div className='flex gap-2 items-center'>
            <input type="checkbox" 
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            name="Numbers" id="num" />
            <label htmlFor="num">Numbers</label>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            name="Characters" id="char" />
            <label htmlFor="char">Characters</label>
          </div>

        </div>
      </div>
       
    </div>
  )
}

export default App
