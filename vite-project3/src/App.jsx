import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1, 3, 4, 5, 6]
  const descriptionText = "lorem ipsum dolor ksslie kdlao keuoa eiuls euaow is one fie stisl ....s"
  return (
    <>
      <h2 className='bg-green-900 text-3xl p-3 rounded-md text-white mb-4'>Testing TailwindCss</h2>

      <Card username="Delba" btnTxt="ClickMe" description={descriptionText} />
      <Card username="Krish" btnTxt="VisitLink" description={descriptionText} />
    </>
  )
}

export default App
