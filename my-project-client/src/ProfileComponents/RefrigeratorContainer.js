import React, { Component } from 'react';
import Refrigerator from './Refrigerator'
import NewRefrigeratorForm from './NewRefrigeratorForm'



class RefrigeratorContainer extends Component {

  render() {
    // let {id, username, actors} = this.props.director
// console.log(this.props.refrigerator)

    return (
      <div className="font">
         <h1 className="headingp">Add a refrigerator recipe for everyone to see!</h1>
        <NewRefrigeratorForm token={this.props.token} 
        user={this.props.user}
          addRefrigerator={this.props.addRefrigerator}
           />
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