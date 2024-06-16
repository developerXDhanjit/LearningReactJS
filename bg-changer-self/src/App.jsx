import React, { useState } from "react"



function Button({ cssStyle, color, onClick }) {

  let btnCss = "px-5 py-2 bg-red-300 rounded-3xl"
  let combinedCss = `${btnCss} + ${cssStyle}`

  return (
    <button className={combinedCss} onClick={onClick}  >
      {color}
    </button>
  )
}


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="root w-full h-screen delay-300 transition ease-in-out flex items-center justify-center " style={{ backgroundColor: color }}>

        <div className="bottom-bar  fixed   w-[70rem]  bottom-5  h-12 bg-white rounded-md flex items-center justify-evenly">

          <Button color={"red"} onClick={() => setColor("red")} cssStyle={" bg-red-300"}  ></Button>

          <Button cssStyle={"bg-slate-900 text-white"} color={"black"}
            onClick={() => { setColor("black") }} ></Button>

          <Button cssStyle={"bg-blue-600"} color={"blue"} onClick={() => { setColor("blue") }}></Button>

        </div>

      </div >

    </>
  )
}

export default App
