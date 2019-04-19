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
componentWillMount() {
    !function(e,t,r,n,a){if(!e[a]){for(var i=e[a]=[],c=0;c<r.length;c++){var s=r[c];i[s]=i[s]||function(e){return function(){var t=Array.prototype.slice.call(arguments);i.push([e,t])}}(s)}i.SNIPPET_VERSION="1.0.1";var o=t.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/"+n+"/"+a+".js";var p=t.getElementsByTagName("script")[0];p.parentNode.insertBefore(o,p)}}(window,document,["survey","reset","config","init","set","get","event","identify","track","page","screen","group","alias"],"joMcbxC55nAvcSY0","delighted");
}

    render() {
        window.delighted.survey({
            email: "1010101lo@delighted.com",
            name: "Bailey Dixon",               // customer name (optional)
            minSurveyInterval: 0,
            minTimeOnPage: 30,
            properties: {                       // extra context (optional)
                orderId: "123ABC",
                shippingMethod: "Ground"
            }
        });;

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
