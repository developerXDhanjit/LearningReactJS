import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)



  const addVal = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      alert("Value cannot exceed 20")
      setCounter(counter)
    }
  }

  const removeVal = () => {
    if (counter < 1) {
      alert("Value cannot be negative")
    } else {
      setCounter(counter - 1)
    }
  }

  /* UI updation is the power of react 
  Power of react to actually change so much data so easily  , this is insane 
  */




  return (
    <>
      <h1>Developer s paradise</h1>
      <h3>Counter is : {counter} </h3>
      <button onClick={addVal}>Add Value</button>

      <button onClick={removeVal}>Remove Value </button>

    </>
  )
}

export default App
