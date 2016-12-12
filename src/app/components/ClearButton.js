import React from 'react';

class ClearButton extends React.Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {
            isClearDisabled: false
        };

        this.handleClearMessages = this.handleClearMessages.bind( this );
    }
    handleClearMessages() {
    	this.props.clearMessages();
        this.setState({
            isClearDisabled: true
        });
    }
    render() {
        let button = <button onClick={this.handleClearMessages} >Clear</button>;
        if ( this.state.isClearDisabled ) {
            button = <button disabled="disabled">Clear</button>;
        }
        return <div>{button}</div>;
    }        
}

export default ClearButton;