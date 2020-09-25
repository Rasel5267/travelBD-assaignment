import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import './App.css';
import News from './Component/News/News';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';
import Hotel from './Component/Hotel/Hotel';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact  component={News}/>
        </Switch>
        <Switch>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Switch>
          <Route path="/hotel" component={Hotel}/>
        </Switch>
        <Switch>
          <Route path="/logIn" component={LogIn}/>
        </Switch>
        <Switch>
          <Route path="/SignUp" component={SignUp}/>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
