import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Restaurant from './Restaurant/Restaurant'
import Restaurants from './Restaurants/Restaurants'
import Navbar from './Navbar'
import Login from './Users/Login'
import Register from './Users/Register'
import Forgot from './Users/Forgot'
import Reset from './Users/Reset'
import { AuthProvider } from './Users/AuthContext'
import PublicRoute from './Users/PublicRoute'
import PrivateRoute from './Users/PrivateRoute'


class App extends Component {
  render(){
      return(
        <AuthProvider>
          <Navbar/>
            <Switch> 
              <Route exact path="/" component={Restaurants} />
              <Route exact path="/:slug" component={Restaurant} />
              <PublicRoute exact path="/users/login" component={Login} />
              <PublicRoute exact path="/users/register" component={Register} />
              <PublicRoute exact path="/users/forgot-password" component={Forgot} />
              <PublicRoute exact path="/users/reset-password" component={Reset} />
            </Switch>
        </AuthProvider>
      )
    }
  }
  
  export default App