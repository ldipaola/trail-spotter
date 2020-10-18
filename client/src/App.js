import React, { useState, useMemo, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import Admin from "./components/pages/Admin";
import Hero from "./components/hero/Hero";
import UserContext from "./utils/UserContext";
import Map from "./components/pages/Map";

function App()  {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
      async function isLoggedIn() {
        let response = await fetch('/api/userAuthenticated');
        response = await response.json();
        setUser(response);
      }
      isLoggedIn();
  }, [])



    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            <UserContext.Provider value={value}>
            <Navbar />
            <Switch>
              <Route path="/map" />
            <Hero />
            </Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
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
