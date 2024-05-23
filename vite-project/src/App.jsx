import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Code from "./code"

const myName = React.createElement(
  'h2',
  {href : "logo"},
  'Hello ! Deveopers '
)
//pre-defined syntax

function App() {


  return (
    <>
      <h3> Chai aur React | Dhanjit Nath</h3>
      {myName} {/* evaluated expression => final outcome is only written here s */}
      <p> In this video I learned  </p>
      <ul>
        <li>How to create a basic react app using vite and other method</li>
        <li>What is the structure of assest folder  </li>
        <li>information about package.json and script</li>
        <li>Why and how to use react JS</li>
      </ul>

      <Code/>
    </>
  )
}

export default App
