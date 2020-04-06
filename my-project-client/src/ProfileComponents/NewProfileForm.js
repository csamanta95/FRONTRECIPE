import React, { Component } from 'react';

class NewProfileForm extends Component {

  state = {
    name: "",
    image: "",
    rating: "",
    level: "",
    ingredient: "",
    direction: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/profiles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
        rating: this.state.rating,
        level: this.state.level,
        ingredient: this.state.ingredient,
        direction: this.state.direction
      })
    })
    .then(r => r.json())
    .then((resp) => {
      console.log(resp);
      if (resp.id) {
        this.props.addProfile(resp)
      } else {
        alert("Error");
      }
    })

  }

  handleChange = (e) => {
    this.setState({
      
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (

    <div className="second-form">
    <div class="form-style-3">
      <form onSubmit={this.handleSubmit}>
      <fieldset><legend>Add another Secret Recipe</legend>
        
        <label for="field1"><span>Name<span className="required">*</span></span><input type="text" class="input-field" name="name" value={this.state.name} onChange={this.handleChange} /></label>
        <label for="field2"><span>Image<span className="required">*</span></span><input type="url" class="input-field" name="image" value={this.state.image} onChange={this.handleChange} /></label>
        <label for="field3"><span>Rating<span className="required">*</span></span><input type="text" class="input-field" name="rating" value={this.state.rating} onChange={this.handleChange} /></label>
        <label for="field4"><span>Level<span className="required">*</span></span><input type="text" class="input-field" name="level" value={this.state.level} onChange={this.handleChange} /></label>
        <label for="field4"><span>Ingredients<span className="required">*</span></span><input type="text" class="input-field" name="ingredient" value={this.state.ingredient} onChange={this.handleChange} /></label>
        <label for="field4"><span>Directions<span className="required">*</span></span><input type="text" class="input-field" name="direction" value={this.state.direction} onChange={this.handleChange} /></label>
        <label><span> </span><input type="submit" value="Submit" /></label>
          </fieldset>
      </form>
    </div>
    </div>
    );
  }

}

export default NewProfileForm;