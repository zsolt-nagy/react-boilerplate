import React from 'react';

class PostMessageForm extends React.Component {
	constructor( props, context ) {
		super( props, context );

		this.handleSubmit = this.handleSubmit.bind( this );
	}
    handleSubmit( event ) {
        event.preventDefault();
        this.props.appendChatMessage( this.nameInput.value, this.messageInput.value );
        this.nameInput.value = '';
        this.messageInput.value = '';    
    }	
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" 
                       ref={name => this.nameInput = name}
                       placeholder="Name" />
                <input type="text" 
                       ref={message => this.messageInput = message}
                       placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
        );
    }
}

export default PostMessageForm;