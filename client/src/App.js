import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import User from "./components/pages/User";
import Hero from "./components/hero/Hero"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Hero />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/blog" component={Blog} />
            <Route path="/user" component={User} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
