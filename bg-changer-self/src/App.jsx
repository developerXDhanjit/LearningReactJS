import { useState } from "react"
import Button from "./components/Button"


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="root w-full h-screen delay " style={{ backgroundColor: color }}>
        <div className="fixed  flex flex-wrap  w-auto justify-center bottom-12 inset-x-0 px-4 " >

          <div className="flex flex-wrap justify-center items-center gap-4 shadow-xl bg-white rounded-md px-3 py-2 h-12   w-full">

            <button className=' w-20 h-9 rounded-md shadow-lg duration-200' 
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red")
            }}>
              Red
            </button>

            <button className=' w-20 h-9 rounded-md shadow-lg duration-200' 
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue")
            }}>
              Blue
            </button>

            <button className=' w-20 h-9 rounded-md shadow-lg duration-200' 
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green")
            }}>
              Green
            </button>

            <button className=' w-20 h-9 rounded-md shadow-lg duration-200' 
            style={{ backgroundColor: "olive" }}
            onClick={() => {
              setColor("olive")
            }}>
              Olive
            </button>

            <button className=' w-20 h-9 rounded-md shadow-lg duration-200 text-white' 
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setColor("black")
            }}>
              Black
            </button>

            <button className=' w-20 h-9 rounded-md shadow-lg duration-200' 
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink")
            }}>
              Pink
            </button>
            



          </div>

        </div>
      </div>

    </>
  )
}

export default App
