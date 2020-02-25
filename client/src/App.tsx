import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Login/Home'

const App: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;