import React, { Component } from 'react';

class NewRefrigeratorForm extends Component {

  state = {
    rname: "",
    rimage: "",
    rrating: "",
    rlevel: "",
    ringredient: "",
    rdirection: "",
    user_id: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.props.token)
    this.props.addRefrigerator(this.state)
    

  }

  handleChange = (e) => {
    this.setState({
      
      [e.target.name]: e.target.value, 
      user_id: this.props.user.id
    })
  }



  render() {
    
    return (

    <div className="second-form">
    <div class="form-style-3">
     <form class="form-style-4" action="" method="post" onSubmit={this.handleSubmit}>
     <h1 className="pantry">Refrigerator Recipe</h1>
      <label for="field3">
      <span>Name</span><input type="text"  name="rname" value={this.state.rname} onChange={this.handleChange} />
      </label>
      <label for="field3">
        <span>Image</span><input type="text"  name="rimage" value={this.state.rimage} onChange={this.handleChange} />
        </label>
      
        <label for="field3">
        <span>Level</span><input type="text"  name="rlevel" value={this.state.rlevel} onChange={this.handleChange}/>
        </label>
      <label for="field3">
      <span>Ingredients</span><textarea  name="ringredient" value={this.state.ringredient} onChange={this.handleChange} ></textarea>
        </label>
        <label for="field4">
      <span>Directions</span><textarea onkeyup="adjust_textarea(this)"  name="rdirection" value={this.state.rdirection} onChange={this.handleChange}></textarea>
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

export default NewRefrigeratorForm;