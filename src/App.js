import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header/Header';
import Home from './components/Home';
import Details from './components/Details/Details';
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/details">
              <Header />
              <Details />
            </Route>
            <Route path="/" >
              <Header />
              <Home />
            </Route>
          </Switch>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
