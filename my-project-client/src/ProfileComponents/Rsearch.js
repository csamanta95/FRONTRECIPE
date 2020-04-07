import React from 'react';

class Rsearch extends React.Component {

  handleChange = (e) => {
    this.props.changeTheSearchTerm(e.target.value)
  }

 

  render() {
  return (
      
      <div className="fullsearch">
   
   <div className="searchBox">

<input className="searchInput" type="text" name="" placeholder="Search food item" name="searchTerm" value={this.props.searchTerm}
 onChange={this.handleChange} />
<button className="searchButton" href="#">
    <i className="material-icons">
        search
    </i>
</button>
</div>
</div> 
  );
}

}

export default Rsearch;