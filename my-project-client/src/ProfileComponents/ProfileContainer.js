import React, { Component } from 'react';
import Profile from './Profile'
import NewProfileForm from './NewProfileForm'



class ProfileContainer extends Component {

  render() {
    let {username} = this.props.user
console.log(this.props.user)

    return (
      <div className="font">
        

        
       <h1 className="private2">{username}, Your private recipes</h1>
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

        <NewProfileForm token={this.props.token}
        user={this.props.user} 
          addProfile={this.props.addProfile}
           />
        
         
         
      </div>
    );
  }

}

export default ProfileContainer;