import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { Inputbox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)



  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)

  const convert = ()=>{
    setConvertedAmount(amount*currencyData[to])
  }

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-screen bg-gray-800 flex justify-center items-center'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <Inputbox
                label = "from"
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency)=> setFrom(currency)}
                onAmountChange = {(amount) => setAmount(amount)}
                selectedCurrency = {from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <Inputbox
                label = "to"
                amount = {convertedAmount}
                amountDisabled
                currencyOptions = {options}
                onCurrencyChange = {(currency)=> setTo(currency)}
                onAmountChange = {(amount) => setAmount(amount)}
                selectedCurrency = {to}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button> 
          </form>
       </div>
      </div>
    </div>
  )
}

export default App
