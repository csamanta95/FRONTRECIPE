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
<body class="contactBody">   
        <div class="wrapper">
        <div class="title">
           
      
        </div>
      

        <form class="form" onSubmit={this.handleSubmit}>
          <h2 className="private">Add your private recipe:</h2>
          <input type="text" class="name entry " placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
          
          <input type="url" class="email entry" placeholder="Image" name="image" value={this.state.image} onChange={this.handleChange}/>
          <input type="text" class="email entry" placeholder="Rating(0-10)" name="rating" value={this.state.rating} onChange={this.handleChange}/>
          <input type="text" class="email entry" placeholder="Level" name="level" value={this.state.level} onChange={this.handleChange}/>
          
          <textarea class="message entry" placeholder="Ingredients" name="ingredient" value={this.state.ingredient} onChange={this.handleChange}></textarea> 
          <textarea class="message entry" placeholder="Directions" name="direction" value={this.state.direction} onChange={this.handleChange}></textarea> 
          
          <button class="submit entry" onclick="thanks()">Submit</button>
        </form>  
        
        <div class="shadow"></div>
      </div>
      
    <script src="app.js"></script>
</body>
    </div>
    );
  }

}

export default NewProfileForm;