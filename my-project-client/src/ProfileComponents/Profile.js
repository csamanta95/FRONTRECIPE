import React, {Component} from 'react'
// import Comment from './Comment'
import ScrollUpButton from "react-scroll-up-button";


class Profile extends Component {

  
    handleDelete = (id) => {
      this.props.deleteProfile(this.props.profile.id);
      }
    
    handleAddRating = () => {
        this.props.handleAddRatingTwo(this.props.profile.id, 1);
    }

    handleSubtractRating = () => {
      this.props.handleSubtractRatingTwo(this.props.profile.id, 1);
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
    // console.log(this.props)
    let {name, image, rating, level, ingredient, direction} = this.props.profile
    
  return(
        <div className="card" >
          <img src={image} alt={name}
            className="card__image"
            onClick={ this.handleClick } 
          />
            <p>{name}</p>
            <p>Level: {level}</p>
            <h6>Click on the image to switch between ingredients and the recipe</h6>
            <div className="wrapper">
            {
                this.state.haveIBeenClickedOn ? direction : ingredient
              }
            </div>
            <div className="card__detail">
            <div className= "update">
            <div class="value-button" id="decrease" onClick={this.handleSubtractRating} value="Decrease Value">-</div>
            
            <input type="number" id="number" value={rating}  />
            
            <div class="value-button" id="increase" onClick={this.handleAddRating} value="Increase Value">+</div>
            </div>
            
            <div className="garbagenew">
            <div id="app-cover">
            <input type="checkbox" id="checkbox" onClick={this.handleDelete} className="garbagei"/>
            <div className = "garbage"></div>
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
            
            
            </div>
            <div>
            <ScrollUpButton className="scroll"/>
            </div>  

        </div>
     
       
        

      
    )
  }
}


export default Profile;