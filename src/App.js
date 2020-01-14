import React, { Component } from 'react';
import EventSearch from './components/eventSearch';
import Partregister from './components/partregister'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router><div>
      <h1>Urvasi Theatres</h1>
      <Route exact path = "/" component={Partregister}/>
      <Route path = "/eventsearch" component ={EventSearch} />
      </div>
      </Router>
           );
  }
}

export default App;
