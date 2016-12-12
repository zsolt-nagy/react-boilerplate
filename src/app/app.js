import React from 'react';
import ReactDOM from 'react-dom'; 

import MessageList from './components/MessageList';
 
let messages = [
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
 
ReactDOM.render(
    <MessageList messages={messages} />,
    document.querySelector( '.js-app' )
); 