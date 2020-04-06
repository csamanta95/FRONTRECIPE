import React, { Component } from 'react';
import Pantry from './Pantry'
import NewPantryForm from './NewPantryForm'



class PantryContainer extends Component {

  render() {
    // let {id, username, actors} = this.props.director
// console.log(this.props.pantry)

    return (
      <div className="font">
        <h1>Add a pantry recipe for everyone to see!</h1>
        <NewPantryForm token={this.props.token} 
        user={this.props.user}
          addPantry={this.props.addPantry}
           />
        <ol>
          {
            this.props.pantry.map((pantry) => { 
              return <Pantry key={pantry.id} pantry={pantry}
              deletePantry={this.props.deletePantry}
              handleAddRating={this.props.handleAddRating}
              handleSubtractRating={this.props.handleSubtractRating}
              />
            })
          }
        </ol>

        
        
         
         
      </div>
    );
  }

}

export default PantryContainer;