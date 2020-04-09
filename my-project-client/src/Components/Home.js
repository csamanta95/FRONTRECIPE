import React, { Component } from 'react';

class Home extends Component {
  
  render() {
  let {username} = this.props.user
  
  return(
    
  <div className="nav-image">
    <h1 className="header"> Welcome {username}!</h1>
    <img src= "https://media.giphy.com/media/3o85g3loeiLcF26OZy/giphy.gif" alt="movie" alt="food" />
  </div>
 
  );
  }
  }

export default Home;