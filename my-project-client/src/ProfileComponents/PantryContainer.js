import React, { Component } from 'react';
import Pantry from './Pantry'
import NewPantryForm from './NewPantryForm'
import Psearch from './Psearch'


class PantryContainer extends Component {


  render() {
    console.log(this.props)
    return (
      <div className="font">
        <Psearch
        searchTerm={this.props.searchTerm} 
        changeTheSearchTerm={this.props.changeTheSearchTerm } />
        <br />
        <h1 className="headingp">Add a pantry recipe for everyone to see!</h1>
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