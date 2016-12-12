import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {
            isClearDisabled: false
        };

        this.handleClearMessages = this.handleClearMessages.bind( this );
    }
    handleClearMessages() {
        this.setState({
            isClearDisabled: true
        });        
    }
    render() {
        let button = <button onClick={this.handleClearMessages}>Clear</button>;
        if ( this.state.isClearDisabled ) {
            button = <button disabled="disabled">Clear</button>;
        }
        return (
            <div>
                { this.state.isClearDisabled ? [] :
                      this.props.messages.map( message => 
                        <Message timestamp={message.timestamp}
                                 owner={message.owner}
                                 text={message.text}
                                 key={message.id} />
                      )
                }
                {button}
            </div>
        );
    }
}

export default MessageList;        