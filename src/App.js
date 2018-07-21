import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path = '/' component = {Home}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
