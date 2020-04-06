import React, {Component} from 'react'
// import Comment from './Comment'

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
        <h6>Click on the image to switch between ingredients and the recipe</h6>
        <div className="wrapper">
        {
            this.state.haveIBeenClickedOn ? rdirection : ringredient
          }
        </div>
        <div className="card__detail">
        <p>Rating: {rrating}</p>
        <button onClick={this.handleDelete} className="btn-slice">Delete</button> 
        </div>
              
    </div>
       
    
      
    )
  }
}


export default Refrigerator;