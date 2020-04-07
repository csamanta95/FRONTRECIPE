import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import PantryContainer from './ProfileComponents/PantryContainer'
import RefrigeratorContainer from './ProfileComponents/RefrigeratorContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
// import Search from './ProfileComponents/Search'
import {withRouter} from 'react-router-dom'


class App extends React.Component {
state={
  user: {
    id: 0,
    username: "",
    profiles: []
  },
  token: "",
  pantries: [],
  refrigerators: [],
  searchTerm: "",
  filterTerm: "All"
}

componentDidMount() {
  
  if (localStorage.token) {
    fetch("http://localhost:3000/persist", {
      headers: {
        "Authorization": `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(this.handleResp)
  }
  fetch("http://localhost:3000/pantries")
      .then(r=> r.json())
      .then((pArray) => {
        this.setState({
         
            pantries: pArray
         
        })
      })
      fetch("http://localhost:3000/refrigerators")
      .then(r=> r.json())
      .then((rArray) => {
        this.setState({
            refrigerators: rArray
        })
      })
  }
      
handleResp = (resp) => {
  if (resp.user) {
    localStorage.token = resp.token
    this.setState({
      user: resp.user,
      token: resp.token
    }, () => {
      this.props.history.push("/")
    })
  } else {
    alert(resp.error)
  }
}

handleLoginSubmit = (userInfo) => {
console.log(userInfo)
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
  .then(r => r.json())
  .then(this.handleResp)
}

handleRegisterSubmit = (userInfo) => {
  // console.log(userInfo)
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username: userInfo.username,
      password: userInfo.password
    })
  })
  .then(r => r.json())
  .then(this.handleResp)
}


addPantry = (pInfo) => {
  console.log(pInfo)
  fetch("http://localhost:3000/pantries", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${this.props.token}`
    },
    body: JSON.stringify(pInfo)
  })
  .then(r => r.json())
  .then(results => {
    console.log(results)
    let newArray = [...this.state.pantries, results]
    this.setState({
      pantries: newArray
    })
  }) 

}

// deletePantry = (id) => {
//   // console.log(id)
//   fetch(`http://localhost:3000/pantries/${id}`, {
//       method: "DELETE"
//     })
//     .then(r => r.json())
//     .then(() => {
//   let filteredArray = this.state.pantries.filter(pObj => {
//     return pObj.id !== id
//   })
//   this.setState({
    
//       pantries: filteredArray
    
//   })
// })
// }

    deleteProfile = (id) => {
      fetch(`http://localhost:3000/profiles/${id}`, {
          method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
      let filteredArray = this.state.user.profiles.filter(pObj => {
        return pObj.id !== id
      })
      this.setState({
        user: {
          ...this.state.user,
          profiles: filteredArray
        }
      })
    })
    }

    handleAddRatingTwo = (id, number) => {
      let foundObject = this.state.user.profiles.find(rate => rate.id === id)
      fetch(`http://localhost:3000/profiles/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          ...foundObject,
          rating: foundObject.rating + number
        })
      })
      .then(r => r.json())
      .then(() => {
      // console.log(number)
      let updated = this.state.user.profiles.map(rate => {
        if (rate.id === id) {
          return {
            ...rate,
            rating: rate.rating + number
          }
          } else {
            return rate
          } 
        })                                           
          this.setState({
            user: {
              ...this.state.user,
              profiles: updated
            }
          })
      })
      }
    
      handleSubtractRatingTwo = (id, number) => {
        let foundObject = this.state.user.profiles.find(rate => rate.id === id)
        fetch(`http://localhost:3000/profiles/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            ...foundObject,
            rating: foundObject.rating - number
          })
        })
        .then(r => r.json())
        .then(() => {
        // console.log(number)
        let updatedArray = this.state.user.profiles.map(rate => {
          if (rate.id === id) {
            return {
              ...rate,
              rating: rate.rating - number
            }
            } else {
              return rate
            } 
          })                                           
            this.setState({
              user: {
                ...this.state.user,
                profiles: updatedArray
              }
            })
        })
        }
    
        addProfile = (pObj) => {
          console.log(pObj)
          this.setState({
            user: {
              ...this.state.user,
              profiles: [...this.state.user.profiles, pObj]
            }
          })
        }

        addRefrigerator = (rInfo) => {
          console.log(rInfo)
          fetch("http://localhost:3000/refrigerators", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Authorization": `Bearer ${this.props.token}`
            },
            body: JSON.stringify(rInfo)
          })
          .then(r => r.json())
          .then(results => {
            console.log(results)
            let newArray = [...this.state.refrigerators, results]
            this.setState({
              refrigerators: newArray
            })
          }) 
        
        }

        changeTheSearchTerm = (termOfChild) => {
        console.log(termOfChild)
          this.setState({
            searchTerm: termOfChild
          })
        }

        returnSearchArray = () => {
          let returnArray = this.state.pantries
          if (this.state.filterTerm === "beginner") 
          returnArray= this.state.pantries.filter( (p) =>{
            return p.plevel.indexOf(this.state.filterTerm) !== -1;
          })
      
          if (this.state.filterTerm === "intermediate") 
          returnArray= this.state.pantries.filter( (p) =>{
            return p.plevel.indexOf(this.state.filterTerm) !== -1; 
          })

          if (this.state.filterTerm === "advanced") 
          returnArray= this.state.pantries.filter( (p) =>{
            return p.plevel.indexOf(this.state.filterTerm) !== -1;
          })
          
          
          returnArray= returnArray.filter((act) => {
              return act.pname.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || act.pingredient.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || act.pdirection.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            
        return returnArray
        }

        changeFilterTerm= (termFromChild) => {
          console.log(termFromChild)
          this.setState({
            filterTerm: termFromChild  
          })
        }
  
          returnSearchArray2 = () => {
            let returnArray = this.state.refrigerators
            if (this.state.filterTerm === "beginner") 
            returnArray= this.state.refrigerators.filter( (p) =>{
              return p.rlevel.indexOf(this.state.filterTerm) !== -1;
            })
        
            if (this.state.filterTerm === "intermediate") 
            returnArray= this.state.refrigerators.filter( (p) =>{
              return p.rlevel.indexOf(this.state.filterTerm) !== -1; 
            })
  
            if (this.state.filterTerm === "advanced") 
            returnArray= this.state.refrigerators.filter( (p) =>{
              return p.rlevel.indexOf(this.state.filterTerm) !== -1;
            })
            
            
            returnArray= returnArray.filter((act) => {
                return act.rname.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || act.ringredient.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || act.rdirection.toLowerCase().includes(this.state.searchTerm.toLowerCase())
              })
              
          return returnArray
          }


          updateCheese = (id, number) => {
            let foundObject = this.state.refrigerators.find(rate => rate.id === id)
            fetch(`http://localhost:3000/refrigerators/${id}`, {
              method: "PATCH",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({
                ...foundObject,
                rrating: foundObject.rrating + number
              })
            })
            .then(r => r.json())
            .then(() => {
            // console.log(number)
            let updatedArray = this.state.refrigerators.map(rate => {
              if (rate.id === id) {
                return {
                  ...rate,
                  rrating: rate.rrating + number
                }
                } else {
                  return rate
                } 
              })                                           
                this.setState({
                    refrigerators: updatedArray
                })
            })
            }

            updateChocolate = (id, number) => {
              let foundObject = this.state.pantries.find(rate => rate.id === id)
              fetch(`http://localhost:3000/pantries/${id}`, {
                method: "PATCH",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify({
                  ...foundObject,
                  prating: foundObject.prating + number
                })
              })
              .then(r => r.json())
              .then(() => {
              // console.log(number)
              let updatedArray = this.state.pantries.map(rate => {
                if (rate.id === id) {
                  return {
                    ...rate,
                    prating: rate.prating + number
                  }
                  } else {
                    return rate
                  } 
                })                                           
                  this.setState({
                      pantries: updatedArray
                  })
              })
              }

renderForm = (routerProps) => {
  if(routerProps.location.pathname === "/login"){
    return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
  } else if (routerProps.location.pathname === "/register") {
    return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
  }
}

renderProfile = (routerProps) => {
  return <PantryContainer
    
    // pantry={this.state.pantries}
    user={this.state.user}
    pantry={this.returnSearchArray()}
    token={this.state.token}
    addPantry={this.addPantry}
    // deletePantry={this.deletePantry}
    updateChocolate={this.updateChocolate}
    searchTerm={this.state.searchTerm} 
    changeTheSearchTerm={this.changeTheSearchTerm }
    filterTerm={this.state.filterTerm}
    changeFilterTerm= {this.changeFilterTerm}
  />
}

renderProfile2 = (routerProps) => {
  return <RefrigeratorContainer
    // refrigerator = {this.state.refrigerators}
    refrigerator={this.returnSearchArray2()}
    user={this.state.user}
    token={this.state.token}
    addRefrigerator={this.addRefrigerator}
    searchTerm={this.state.searchTerm} 
    changeTheSearchTerm={this.changeTheSearchTerm }
    filterTerm={this.state.filterTerm}
    changeFilterTerm= {this.changeFilterTerm}
    updateCheese={this.updateCheese}
  />
}

renderProfileUser = (routerProps) => {
  return <ProfileContainer
    user = {this.state.user}
    // user={this.returnSearchArray()}
    token={this.state.token}
    deleteProfile={this.deleteProfile}
    handleAddRatingTwo={this.handleAddRatingTwo}
    handleSubtractRatingTwo={this.handleSubtractRatingTwo}
    addProfile={this.addProfile}
  />
}


  render(){
    return (
      <div className="App">
        <NavBar/>
        <br />
       
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/pantry" render={ this.renderProfile}  />
          <Route path="/refrigerator" render={ this.renderProfile2}  />
          <Route path="/profile" render={ this.renderProfileUser}  />
          <Route path="/" exact render={() => <Home /> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App)
