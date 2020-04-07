import React, { Component } from 'react';
import Refrigerator from './Refrigerator'
import NewRefrigeratorForm from './NewRefrigeratorForm'
import Rsearch from './Rsearch'
import Rdropdown from './Rdropdown'


class RefrigeratorContainer extends Component {

  render() {
    // let {id, username, actors} = this.props.director
// console.log(this.props.refrigerator)

    return (
      <div className="font">
        <Rdropdown
        filterTerm={this.props.filterTerm}
        changeFilterTerm= {this.props.changeFilterTerm} />
        <Rsearch
        searchTerm={this.props.searchTerm} 
        changeTheSearchTerm={this.props.changeTheSearchTerm }
        />
        <br />
         <h1 className="headingp">Share a recipe with refrigerator items with everyone!</h1>
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