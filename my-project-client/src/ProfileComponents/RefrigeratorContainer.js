import React, { Component } from 'react';
import Refrigerator from './Refrigerator'
// import NewPantryForm from './NewPantryForm'



class RefrigeratorContainer extends Component {

  render() {
    // let {id, username, actors} = this.props.director
// console.log(this.props.refrigerator)

    return (
      <div className="font">
        
        <ol>
          {
            this.props.refrigerator.map((refrigerator) => { 
              return <Refrigerator key={refrigerator.id} refrigerator={refrigerator}
            //   deleteActor={this.props.deleteActor}
            //   handleRating={this.props.handleRating}
              />
            })
          }
        </ol>

        
         
         
      </div>
    );
  }

}

export default RefrigeratorContainer;