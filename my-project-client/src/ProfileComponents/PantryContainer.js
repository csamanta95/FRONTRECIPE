import React, { Component } from 'react';
import Pantry from './Pantry'
import NewPantryForm from './NewPantryForm'
import Psearch from './Psearch'
import Pdropdown from './Pdropdown'

class PantryContainer extends Component {


  render() {
    // console.log(this.props)
    return (
      <div className="font">
        <Pdropdown
        filterTerm={this.props.filterTerm}
        changeFilterTerm= {this.props.changeFilterTerm} />
        <Psearch
        searchTerm={this.props.searchTerm} 
        changeTheSearchTerm={this.props.changeTheSearchTerm } />
        <br />
        <h1 className="headingp">Share a recipe with pantry foods with everyone!</h1>
        <NewPantryForm token={this.props.token} 
        user={this.props.user}
          addPantry={this.props.addPantry}
           />
        <ol>
          {
            this.props.pantry.map((pantry) => { 
              return <Pantry key={pantry.id} pantry={pantry}
              // deletePantry={this.props.deletePantry}
              updateChocolate={this.props.updateChocolate}
              />
            })
          }
        </ol>

        
        
         
         
      </div>
    );
  }

}

export default PantryContainer;