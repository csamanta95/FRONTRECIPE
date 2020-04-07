import React from 'react';

class Psearch extends React.Component {

  handleChange = (e) => {
    this.props.changeTheSearchTerm(e.target.value)
  }

  handleChangeCheck = (e) => {
    this.props.checkArray(e.target.value)
  }

 




  render() {
  return (
      
      <div className="fullsearch">
   
   <div class="searchBox">

<input class="searchInput" type="text" name="" placeholder="Search food item" name="searchTerm" value={this.props.searchTerm}
 onChange={this.handleChange} />
<button class="searchButton" href="#">
    <i class="material-icons">
        search
    </i>
</button>
</div>

     
    </div> 
  );
}

}

export default Psearch;