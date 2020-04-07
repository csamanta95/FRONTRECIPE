import React, {Component} from 'react'
// import Comment from './Comment'
import ScrollUpButton from "react-scroll-up-button";

class Refrigerator extends Component {

    // handleDelete = (id) => {
    // this.props.deleteActor(this.props.actor.id);
    // }

    // handleRating = () => {
    //     this.props.handleRating(this.props.actor.id, 1);
    // }

    state = {
        haveIBeenClickedOn: false
      }
    
      handleClick = (e) => {
        this.setState({
          haveIBeenClickedOn: !this.state.haveIBeenClickedOn
        })
      }

      handleClick2 = () => {
        this.props.updateCheese(this.props.refrigerator.id, 1)
      }


render(){
    let {rname, rimage, rrating, rlevel, ringredient, rdirection} = this.props.refrigerator
    // let arrayOfComments = this.props.actor.comments.map((comment, index) => {
    //     return <Comment key={index} comment={comment}/>
    // <p>{arrayOfComments} </p>
    // })
  return(
    <div className="card" >
      <img src={rimage} alt={rname}
        className="card__image"
        onClick={ this.handleClick }
      />
        <p>{rname}</p>
        <p>Level: {rlevel}</p>
        <h6>Click on the image to switch between ingredients and the recipe and cheese to like</h6>
        <div className="wrapper">
        {
            this.state.haveIBeenClickedOn ? rdirection : ringredient
          }
        </div>
        <div className="card__detail">
        <img src="https://i.imgur.com/Pyc9vJRt.png?2" title="source: imgur.com" className="cheese" onClick={this.handleClick2}/>
        <p className="likes">Likes: {rrating}</p>
        
        </div>
        <div>
            <ScrollUpButton className="scroll"/>
            </div> 
    </div>
       
    
      
    )
  }
}


export default Refrigerator;