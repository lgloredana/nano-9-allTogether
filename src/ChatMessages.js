import React, { Component } from 'react';

class ChatMessages extends Component {
  render() {
    const {username, messages} = this.props;
    return(
      <ul className="message-list">
          {messages.map((message, index) => (
                <li
                  key={index+username}
                  className={message.username === username ?
                      'message sender' : 'message recipient'}
                >
                <p>{`${message.username}: ${message.text}`}</p>
                </li>
          ))}
    </ul>
  )}
}

export default ChatMessages