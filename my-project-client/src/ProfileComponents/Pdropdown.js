import React, { Component } from "react";

class Pdropdown extends Component {

handleSubmit = (e) => {
    this.props.changeFilterTerm(e.target.value);
}

  render() {
// console.log(this.props.filterTerm)
    return (
    <div className="box">
       <select value={this.props.filterTerm} onChange={this.handleSubmit}>
        <option className ="box1" value="All">All</option>
        <option className ="box1" value="beginner">beginner</option>
        <option className ="box1" value="intermediate">intermediate</option>
        <option className ="box1" value="advanced">advanced</option>
        <option className ="box1" value="popularity">popularity</option>
      </select>
    </div>
    );
  }
}

export default Pdropdown;