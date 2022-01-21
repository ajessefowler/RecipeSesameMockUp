import React from 'react';

const Message = (props) => {
    return props.isUserMessage ? (
        <div className="message rightMessage">
            <p>{props.content}</p>
        </div> 
    ) : (
        <div className="message leftMessage">
            <p>{props.content}</p>
        </div>
    );
}

export default Message;