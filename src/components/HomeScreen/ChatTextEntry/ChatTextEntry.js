import React, { useState } from 'react';

const ChatTextEntry = (props) => {
    const [textContent, setTextContent] = useState('');

    const handleTextChange = (event) => {
        setTextContent(event.target.value);
    }

    const handleSend = (event) => {
        event.preventDefault();

        if (textContent.length > 0) {
            props.addMessage({ content: textContent, isUserMessage: true });
            props.incrementNumberOfMessagesSent();
            setTextContent('');
        }
    }

    return (
        <div>
            <form className="chatTextEntry" onSubmit={handleSend}>
                <input className="input" type="text" placeholder="Enter text." onChange={handleTextChange} value={textContent}></input>
                <input className="send" type="submit" value="Send"></input>
            </form>
        </div>
    );
}

export default ChatTextEntry;