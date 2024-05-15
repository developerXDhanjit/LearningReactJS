import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3> Chai aur React | Dhanjit Nath</h3>
      <p> In this video I learned  </p>
      <ul>
        <li>How to create a basic react app using vite and other method</li>
        <li>What is the structure of assest folder  </li>
        <li>information about package.json and script</li>
        <li>Why and how to use react JS</li>
      </ul>
    </>
  )
}

export default App
