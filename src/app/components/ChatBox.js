import React from 'react';
import MessageList from './MessageList';
import PostMessageForm from './PostMessageForm';
import ClearButton from './ClearButton';

class ChatBox extends React.Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {
            messages: []
        };

        this.appendChatMessage = this.appendChatMessage.bind( this );
        this.clearMessages = this.clearMessages.bind( this );
    }
    appendChatMessage( owner, text ) {
        let newMessage = {
            id: this.state.messages.length + 1,
            timestamp: new Date().getTime(),
            owner: owner,
            text: text
        }; 
        this.setState({ messages: [ ...this.state.messages, newMessage ] });
    }    
    clearMessages() {
        this.setState( { messages: [] } );
    }
    render() {
        let isDisabled = this.state.messages.length === 0;
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <PostMessageForm appendChatMessage={this.appendChatMessage} />
                <ClearButton 
                    clearMessages={this.clearMessages} 
                    isDisabled={isDisabled} />
            </div>
        );
    }
}

export default ChatBox;