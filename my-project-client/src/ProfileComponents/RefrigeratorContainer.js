import React, { Component } from 'react';
import Refrigerator from './Refrigerator'
import NewRefrigeratorForm from './NewRefrigeratorForm'
import Rsearch from './Rsearch'
import Rdropdown from './Rdropdown'


class RefrigeratorContainer extends Component {

  render() {
    let {username} = this.props.user
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
         <h1 className="headingp">{username}, Share a recipe with refrigerator foods with everyone!</h1>
        <NewRefrigeratorForm token={this.props.token} 
        user={this.props.user}
          addRefrigerator={this.props.addRefrigerator}
           />
        <ol>
          {
            this.props.refrigerator.map((refrigerator) => { 
              return <Refrigerator key={refrigerator.id} refrigerator={refrigerator}
            updateCheese={this.props.updateCheese}
              />
            })
          }
        </ol>

        
         
         
      </div>
    );
  }

}

export default RefrigeratorContainer;