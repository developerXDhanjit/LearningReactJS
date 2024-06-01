import React from 'react'

function Button({ backgroundColorName }) {
    return (
        <button className=' w-20 h-9 rounded-md shadow-lg ' style={{ backgroundColor: backgroundColorName }} onClick={()=>{
            root.style.backgroundColor = backgroundColorName
        }}>
              {backgroundColorName}
            </button>
    )
}

export default Button