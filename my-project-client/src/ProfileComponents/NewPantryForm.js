import React, { Component } from 'react';

class NewPantryForm extends Component {

  state = {
    pname: "",
    pimage: "",
    prating: "",
    plevel: "",
    pingredient: "",
    pdirection: "",
    user_id: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.props.token)
    this.props.addPantry(this.state)
    

  }

  handleChange = (e) => {
    this.setState({
      
      [e.target.name]: e.target.value, 
      user_id: this.props.user.id
    })
  }





  render() {
    console.log(this.props)
    return (

    <div className="second-form">
    <div class="form-style-3">
     <form class="form-style-4" action="" method="post" onSubmit={this.handleSubmit}>
     <h1 className="pantry">Pantry Recipe</h1>
      <label for="field3">
      <span>Name</span><input type="text"  name="pname" value={this.state.pname} onChange={this.handleChange} />
      </label>
      <label for="field3">
        <span>Image</span><input type="text"  name="pimage" value={this.state.pimage} onChange={this.handleChange} />
        </label>
      
        <label for="field3">
        <span>Level</span><input type="text"  name="plevel" value={this.state.plevel} onChange={this.handleChange}/>
        </label>
      <label for="field3">
      <span>Ingredients</span><textarea  name="pingredient" value={this.state.pingredient} onChange={this.handleChange} ></textarea>
        </label>
        <label for="field4">
      <span>Directions</span><textarea onkeyup="adjust_textarea(this)"  name="pdirection" value={this.state.pdirection} onChange={this.handleChange}></textarea>
        </label>
      <label>
      <span> </span><input type="submit" value="Submit" />
      </label>
      </form>
      </div>
    </div>
    );
  }

}

export default NewPantryForm;