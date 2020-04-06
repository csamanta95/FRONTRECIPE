import React, { Component } from 'react';
import Profile from './Profile'
import NewProfileForm from './NewProfileForm'



class ProfileContainer extends Component {

  render() {
    // let {id, username, actors} = this.props.director
console.log(this.props.user)

    return (
      <div className="font">
        <NewProfileForm token={this.props.token}
        user={this.props.user} 
          addProfile={this.props.addProfile}
           />

        
       <h1 className="private">Your private recipes</h1>
        <ol>
          {
            this.props.user.profiles.map((profile) => { 
              return <Profile key={profile.id} profile={profile}
              deleteProfile={this.props.deleteProfile}
              handleAddRatingTwo={this.props.handleAddRatingTwo}
              handleSubtractRatingTwo={this.props.handleSubtractRatingTwo}
              />
            })
          }
        </ol>

        
        
         
         
      </div>
    );
  }

}

export default ProfileContainer;