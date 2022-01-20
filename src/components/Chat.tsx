import React, { useState } from "react"


const Chat = () => {
    const [visibleChat, setVisibleChat] = useState(false)
    const [inputField, setInputField] = useState('')
    const [chatHistory, setChatHistory] = useState(['Hello ! How are you ?'])

    const handleKeyDown = (event: any) => {
        if(event.key === 'Enter'){
            handleChange()
        }
    }

    const handleChange = () => {
        const newMessage = [...chatHistory, inputField]
        setChatHistory(newMessage)
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
                <div>
                    {chatHistory.map((chat) => (
                        <p key={Math.random()*10}>{chat}</p>
                    ))}
                </div>
            )} 
        </div>
    )
}

export default Chat