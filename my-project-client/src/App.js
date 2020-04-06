import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import PantryContainer from './ProfileComponents/PantryContainer'
import RefrigeratorContainer from './ProfileComponents/RefrigeratorContainer'
// import Search from './ProfileComponents/Search'
import {withRouter} from 'react-router-dom'


class App extends React.Component {
state={
  user: {
    id: 0,
    username: "",
  },
  token: "",
  pantries: [],
  refrigerators: []
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

deletePantry = (id) => {
  // console.log(id)
  fetch(`http://localhost:3000/pantries/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
  let filteredArray = this.state.pantries.filter(pObj => {
    return pObj.id !== id
  })
  this.setState({
    
      pantries: filteredArray
    
  })
})
}

handleAddRating = (id, number) => {
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

  handleSubtractRating = (id, number) => {
    let foundObject = this.state.pantries.find(rate => rate.id === id)
    fetch(`http://localhost:3000/pantries/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        ...foundObject,
        prating: foundObject.prating - number
      })
    })
    .then(r => r.json())
    .then(() => {
    // console.log(number)
    let updatedArray = this.state.pantries.map(rate => {
      if (rate.id === id) {
        return {
          ...rate,
          prating: rate.prating - number
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
    
    pantry={this.state.pantries}
    user={this.state.user}
    // director={this.returnSearchArray()}
    token={this.state.token}
    addPantry={this.addPantry}
    deletePantry={this.deletePantry}
    handleAddRating={this.handleAddRating}
    handleSubtractRating={this.handleSubtractRating}
  />
}

renderProfile2 = (routerProps) => {
  return <RefrigeratorContainer
    refrigerator = {this.state.refrigerators}
    // user={this.returnSearchArray()}
    user={this.state.user}
    token={this.state.token}
    
    // handleRating={this.handleRating}
  />
}


  render(){
console.log(this.state.user)
    return (
      <div className="App">
        <NavBar/>
        <br />
       
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/pantry" render={ this.renderProfile}  />
          <Route path="/refrigerator" render={ this.renderProfile2}  />

          <Route path="/" exact render={() => <Home /> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App)
