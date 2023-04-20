import React, { useState } from 'react'
import "./InputArea.css"
const InputArea = (props) => {
    const [inputText, setInputText] = useState("")

    const handleChange = (event) => {
        setInputText(event.target.value)

    }
    return (
        <div className='form'>
            <input className='input' type='text' onChange={handleChange} value={inputText} />
            <button className='button' onClick={() => {
                props.addItems(inputText);
                setInputText("");
            }}>
                <span className='span'>ADD</span>
            </button>
        </div>
    )
}

export default InputArea