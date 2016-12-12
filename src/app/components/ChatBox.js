import React from 'react';
import MessageList from './MessageList';
import ClearButton from './ClearButton';

class ChatBox extends React.Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {};
        this.state.messages = [
            {
                id: 1, 
                timestamp: 1478859071000,
                owner: 'Chuck',
                text: 'Hello Mark, how is it going?' 
            },
            {
                id: 2,
                timestamp: 1478859115000,
                owner: 'Mark',
                text: 'What do you want, Chuck?'
            },
            {
                id: 3,
                timestamp: 1478859131000,
                owner: 'Chuck',
                text: ':D'
            },
            {
                id: 4,
                timestamp: 1478859165000,
                owner: 'Chuck',
                text: 'I forgot you were not into small talk.'
            }
        ];

        this.clearMessages = this.clearMessages.bind( this );
    }
    clearMessages() {
        this.setState( { messages: [] } );
    }
    render() {
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <ClearButton clearMessages={this.clearMessages} />
            </div>
        );
    }
}

export default ChatBox;