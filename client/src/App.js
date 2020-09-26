import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
