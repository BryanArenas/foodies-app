import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Restaurant from './Restaurant/Restaurant'
import Restaurants from './Restaurants/Restaurants'


const App = () => {
    return(
      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/restaurants/:slug" component={Restaurant} />
      </Switch>
    )
  }
  
  export default App