import React from 'react'

function Button({ css , colortext }) {

    function handleClick() {
        root.style.backgroundColor = colorCode
    }
    return (
        <div onClick={handleClick}>
            {colorCode}
        </div>
    )
}

export default Button