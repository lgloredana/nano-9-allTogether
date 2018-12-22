import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatComponent from './ChatComponent';

class App extends Component {
  state = {
    users :[{ username: 'Amy' }, { username: 'John' }],
    messages : [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ]
  };

 handleNewMsg = (msg, user) => {
   const newMsg = {username:user, text:msg}; 
   this.setState((prevState) => (
     {
       messages: [...prevState.messages, newMsg]
     }
   ));
 }
  render() {
    const {users, messages} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
 		<div className="container">
			{users.map(user => (<ChatComponent key={user.username}
             						username={user.username} 
									messages={messages} 
									handleNewMsg={this.handleNewMsg}/>))}
		</div>
      </div>
    );
  }
}

export default App;
