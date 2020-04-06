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
      <form onSubmit={this.handleSubmit}>
      <fieldset><legend>Add another Pantry Recipe</legend>
        
        <label for="field1"><span>Name<span className="required">*</span></span><input type="text" class="input-field" name="pname" value={this.state.pname} onChange={this.handleChange} /></label>
        <label for="field2"><span>Image<span className="required">*</span></span><input type="url" class="input-field" name="pimage" value={this.state.pimage} onChange={this.handleChange} /></label>
        <label for="field3"><span>Rating<span className="required">*</span></span><input type="text" class="input-field" name="prating" value={this.state.prating} onChange={this.handleChange} /></label>
        <label for="field4"><span>Level<span className="required">*</span></span><input type="text" class="input-field" name="plevel" value={this.state.plevel} onChange={this.handleChange} /></label>
        <label for="field4"><span>Ingredients<span className="required">*</span></span><input type="text" class="input-field" name="pingredient" value={this.state.pingredient} onChange={this.handleChange} /></label>
        <label for="field4"><span>Directions<span className="required">*</span></span><input type="text" class="input-field" name="pdirection" value={this.state.pdirection} onChange={this.handleChange} /></label>
        <label><span> </span><input type="submit" value="Submit" /></label>
          </fieldset>
      </form>
    </div>
    </div>
    );
  }

}

export default NewPantryForm;