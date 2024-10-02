import React from "react"

const ChatItem= (props) =>{
    return (
        <div>
            <div>{props.author}</div>
            <p>{props.text}</p>
        </div>
    )
}

export default ChatItem