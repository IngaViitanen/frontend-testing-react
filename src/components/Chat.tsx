import React, { useState, useRef } from "react"

const Chat = () => {
    const [visibleChat, setVisibleChat] = useState(false)
    const [inputField, setInputField] = useState('')

    const handleKeyDown = (event: any) => {
        if(event.key === 'Enter'){
            handleChange()
        }
    }

    const handleChange = () => {
        setInputField('')
    }

    return (
        <div>
            <button onClick={() => setVisibleChat(!visibleChat)}>CHAT</button>

            {visibleChat ? 
            (<input type="text" 
            placeholder="say hello" 
            value={inputField} 
            onKeyDown={handleKeyDown} 
            onChange={(e) => setInputField(e.target.value)}/>)
             : null}

             {visibleChat && (
                 <form action=""></form>
             )}
            
        </div>
    )
}

export default Chat