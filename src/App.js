import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
        <Route exact path='/login' component={Login} />
        <Route exact path='/:uid/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
