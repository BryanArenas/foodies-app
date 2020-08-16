import React from 'react'
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



const App = () => {
      return(
      
      <Switch>
        <AuthProvider>
        <Navbar/>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/:slug" component={Restaurant} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PublicRoute path="/forgot-password" component={Forgot} />
        <PublicRoute path="/reset-password" component={Reset} />
        </AuthProvider>
      </Switch>
    )
  }
  
  export default App