
import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const generatePassoword = useCallback(() => {
    let password = ""

    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) string += "0123456789"
    if (charactersAllowed) string += "!@#$%^&*()_+{}|?><,.:;"

    for (let i = 1; i <= length; i++) {
      let characterIndex = Math.floor(Math.random() * string.length + 1)
      password += string.charAt(characterIndex)
    }

    setPassword(password)


  }, [length, numbersAllowed, charactersAllowed, setPassword])

  // useCallback is for optimization

  //  useRef hook 


  const passowordRef = useRef(null)

 const copyPasswordToClipboard = useCallback(()=>{
  passowordRef.current?.select()   
  // window.navigator.clipboard.writeText(password)


    //  alert("Password Copied to Clipboard")
 } , [password])


  // generatePassoword() can't call like this , too many re renders
  // so we will be using useEffect Hook 

  useEffect(() => {
    generatePassoword()
  } , [length, numbersAllowed, charactersAllowed, setPassword ])

  return (
    <>
      <div className='w-full h-screen bg-gray-800 pt-10 flex flex-col justify-start items-center'>

        <div className="title text-red-200 text-2xl ">
          Password Generator
        </div>

        <div className=' wrapper-for-input-field  text-white  w-full max-w-md bg-gray-600 h-14  
        rounded-md shadow-lg text-xl flex justify-between items-center ' >

          <input type="text" placeholder='Password'
            className='bg-slate-600 text-white  outline-none w-full h-full rounded-lg  px-4'
            value={password}
            readOnly
            ref={passowordRef}
          />
          <button onClick={copyPasswordToClipboard} className='px-2 bg-blue-600 h-full w-auto rounded-r-lg '>Copy </button>


        </div>

        <div className='  text-xl text-red-400 mt-2 h-20  flex justify-evenly gap-x-4'>
        
          <div className="input-range flex  items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer w-36'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label > Length : {length} </label>
          </div>
         
          <div className="input-number flex  items-center gap-x-2 ">
            <input
              type="checkbox"
              defaultChecked = {numbersAllowed}
              id='numberInput'
              onChange={() => {setNumbersAllowed((previous) => !previous )}} />
              <label htmlFor='numberInput'> Numbers </label>
          </div>
         
          <div className="input-character flex  items-center gap-x-2"> 
          <input
              type="checkbox"
              defaultChecked = {charactersAllowed}
              id='characterInput'
              onChange={() => {setCharactersAllowed((previous) => !previous )}} />
              <label htmlFor='characterInput'> Characters </label>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
