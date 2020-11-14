import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import MainNavigation from './components/UI/Navigation/MainNavigation';




function App() {
  return (
    <div className="app">
      <MainNavigation />
      <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
