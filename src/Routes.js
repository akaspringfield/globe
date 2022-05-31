import React from 'react'
import { BrowserRouter, Route, Switch,Redirect, Link } from 'react-router-dom'
import Setup from './globe/ContinentList'
import CountryDetails from './globe/CountryDetails'
function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
          <Route exact path='/' component={Setup} />
          <Route path='/country/:code' component={CountryDetails}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes