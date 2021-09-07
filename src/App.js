import React from 'react';
import { Counter } from './features/counter/Counter';

//Components
import Header from './components/Header/Header';
import {GlobalStyle} from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
    </div>
  );
}

export default App;
