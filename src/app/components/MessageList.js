import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
    render() {
        return (
            <div>
                { this.props.messages.map( message => 
                    <Message timestamp={message.timestamp}
                             owner={message.owner}
                             text={message.text}
                             key={message.id} />
                  )}
            </div>
        );
    }
}

export default MessageList;        