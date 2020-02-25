import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Login/Home'
import Celebrity from './components/CelebrityTemplate/CelebrityTemplate'

const App: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/celebrity" exact={true} component={Celebrity} />
    </HashRouter>
  );
}

export default App;