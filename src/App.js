import React from 'react';
import { Counter } from './features/counter/Counter';

//Components
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
