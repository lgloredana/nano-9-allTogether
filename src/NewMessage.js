import React, { Component } from 'react';
class NewMessage extends Component {
    /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = { 
    newMessage: "",
  }
  handleChange(event){
    this.setState({
    	newMessage: event.target.value
  	});
  }

  handleNewMsg = (event) => {
    event.preventDefault();
    this.props.handleNewMsg(this.state.newMessage);
    this.state.newMessage = "";
  }

  render() {
	const {newMessage} = this.state;
    return (
      <form className="input-group" onSubmit={this.handleNewMsg}>
          <input type="text" value={this.state.newMessage} className="form-control" placeholder="Enter your message..." 
    		onChange={(event) => this.handleChange(event)} />
          <div className="input-group-append">
          	<button className="btn submit-button" disabled={newMessage === ''}>
    				SEND
    		</button>
    	</div>
      </form>
    )
  }
}

export default NewMessage