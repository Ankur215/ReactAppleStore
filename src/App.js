import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Header from './components/header'
import Products from './components/products'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
            <h2>Welcome to React</h2>
            <Header/>
          <Router>
          <div className="App-intro">
          <Redirect from="/" to="products" />
            <Route exact path="/products" component={Products} />
            <Route exact path="/head" component={Header} />
          </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
