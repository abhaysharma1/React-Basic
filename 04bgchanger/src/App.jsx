import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ color, setcolor] = useState('olive')

 

  return (
    <div className='w-full h-screen duration-200 bg-black' style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-3xl'>

            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style = {{backgroundColor:"red"}}
              onClick={ ()=>setcolor('red') }
            >Red</button>

            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style = {{backgroundColor:"blue"}}
              onClick={ ()=>setcolor('blue') }
            >Blue</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style = {{backgroundColor:"pink"}}
              onClick={ ()=>setcolor('pink') }
            >Pink</button>

            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style = {{backgroundColor:"purple"}}
              onClick={ ()=>setcolor('purple') }
            >purple</button>

            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style = {{backgroundColor:"black"}}
              onClick={ ()=>setcolor('black') }
            >black</button>
            
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style = {{backgroundColor:"orange"}}
              onClick={ ()=>setcolor('orange') }
            >orange</button>

          </div>
      </div>
    </div>
  )
}

export default App
