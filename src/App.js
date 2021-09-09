import React from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Components
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header/Header';
import Home from './components/Home';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/" >
              <Home />
            </Route>
          </Switch>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
