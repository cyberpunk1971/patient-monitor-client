import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import EditPatient from './components/forms/EditPatient';
import Home from './components/Home';
import Login from './components/Login';
import MainNavigation from './components/UI/Navigation/MainNavigation';
import NewPatientForm from './components/forms/NewPatientForm';





function App() {
  return (
    <div className="app">
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/patients/new' component={NewPatientForm} />
          <Route exact path='/patients/:pid' component={EditPatient} />

        </Switch>
      </main>
    </div>
  );
}

export default App;
