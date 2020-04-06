import React, {Component} from 'react'
// import Comment from './Comment'
import ScrollUpButton from "react-scroll-up-button";
import InputRange from 'react-input-range';


class Pantry extends Component {

  
    handleDelete = (id) => {
      this.props.deletePantry(this.props.pantry.id);
      }
    
    handleAddRating = () => {
        this.props.handleAddRating(this.props.pantry.id, 1);
    }

    handleSubtractRating = () => {
      this.props.handleSubtractRating(this.props.pantry.id, 1);
  }
    
    state = {
        haveIBeenClickedOn: false
      }
    
      handleClick = (e) => {
        this.setState({
          haveIBeenClickedOn: !this.state.haveIBeenClickedOn
        })
      }


render(){
    let {pname, pimage, prating, plevel, pingredient, pdirection} = this.props.pantry
    // console.log(this.props)
    // let arrayOfComments = this.props.actor.comments.map((comment, index) => {
    //     return <Comment key={index} comment={comment}/>
    // <p>{arrayOfComments} </p>
    // })
  return(
        <div className="card" >
          <img src={pimage} alt={pname}
            className="card__image"
            onClick={ this.handleClick } 
          />
            <p>{pname}</p>
            <p>Level: {plevel}</p>
            <h6>Click on the image to switch between ingredients and the recipe</h6>
            <div className="wrapper">
            {
                this.state.haveIBeenClickedOn ? pdirection : pingredient
              }
            </div>
            <div className="card__detail">
            <div className= "update">
            <div class="value-button" id="decrease" onClick={this.handleSubtractRating} value="Decrease Value">-</div>
            <input type="number" id="number" value={prating}  />
            
            
            <div class="value-button" id="increase" onClick={this.handleAddRating} value="Increase Value">+</div>
            </div>
            <div id="app-cover">
  <input type="checkbox" id="checkbox" onClick={this.handleDelete}/>
  <div className = "garbage">
  <div id="bin-icon">
    <div id="lid"></div>
    <div id="box">
      <div id="box-inner">
        <div id="bin-lines"></div>
      </div>
    </div>
  </div>
  <div id="layer"></div>
</div>
</div>
            
            
            
            <button onClick={this.handleDelete} className="btn-slice">Delete</button> 
            </div>
            <div>
            <ScrollUpButton className="scroll"/>
            </div>  

        </div>
     
       
        

      
    )
  }
}


export default Pantry;