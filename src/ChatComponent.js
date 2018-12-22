import React, { Component } from 'react';
import './App.css';
import ChatMessages from './ChatMessages';
import NewMessage from './NewMessage'
class ChatComponent extends Component {
  
  handleNewMsg = (msg) => {
    this.props.handleNewMsg(msg, this.props.username);
  };

  render() {
    const {username, messages} = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>
        <ChatMessages username={username} messages={messages}/>
        <NewMessage handleNewMsg={this.handleNewMsg}/>
      </div>
    )
  }
}

export default ChatComponent