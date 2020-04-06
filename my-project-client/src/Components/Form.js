import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }



  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
   <div>
<div class='bold-line'></div>
<div class='container'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
    <form onSubmit={this.handleSubmit}>
   
      <div class='welcome'>{formName}</div>
      <div class='subtitle'>Please type in your username and password to view recipes</div>
      <div class='input-fields'>
        <input type='text' placeholder='Username' class='input-line full-width' name="username" value={username} onChange={this.handleChange} />
        
        <input type='password' placeholder='Password' class='input-line full-width' name="password" value={password} onChange={this.handleChange}/>

      </div>
      <div class='spacing'>:) :) :) :) <span class='highlight'></span></div>
      <div><button class='ghost-round full-width'>Submit</button></div>
      </form>
    </div>
  </div>
</div>
</div>


        
        
      
      



    );
  }

}

export default Form;