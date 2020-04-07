import React, {Component} from 'react'
// import Comment from './Comment'
import ScrollUpButton from "react-scroll-up-button";
import InputRange from 'react-input-range';


class Pantry extends Component {

  
    // handleDelete = (id) => {
    //   this.props.deletePantry(this.props.pantry.id);
    //   }
    
  //   handleAddRating = () => {
  //       this.props.handleAddRating(this.props.pantry.id, 1);
  //   }

  //   handleSubtractRating = () => {
  //     this.props.handleSubtractRating(this.props.pantry.id, 1);
  // }
  handleClick2 = () => {
    this.props.updateChocolate(this.props.pantry.id, 1)
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
            <h6>Click on the image to switch between ingredients and the recipe and chocolate to like</h6>
            <div className="wrapper">
            {
                this.state.haveIBeenClickedOn ? pdirection : pingredient
              }
            </div>
            <div className="card__detail">
            <img src="https://i.imgur.com/58roJMc.png?1" title="source: imgur.com" className="cheese2" onClick={this.handleClick2}/>
            <p className="likes">Likes: {prating}</p>
            </div>
            <div>
            <ScrollUpButton className="scroll"/>
            </div>  

        </div>
     
       
        

      
    )
  }
}


export default Pantry;