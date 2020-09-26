import React, { Component } from 'react'
import { Provider } from 'react-redux'
//import './App.css'
import store from './store'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
