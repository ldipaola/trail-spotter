import React, { useState, useMemo } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import User from "./components/pages/User";
import Admin from "./components/pages/Admin";
import Hero from "./components/hero/Hero";
import UserContext from "./utils/UserContext"

function App()  {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);


    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            <UserContext.Provider value={value}>
            <Navbar />
            <Hero />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
            </UserContext.Provider>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  
}

export default App;
