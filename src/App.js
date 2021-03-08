import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthApiService from './services/auth';
import TokenService from './services/token-service';

import AppContext from './AppContext';
import Dashboard from './components/Dashboard';
import EditPatient from './components/forms/EditPatient';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import MainNavigation from './components/UI/Navigation/MainNavigation';
import MedicationList from './components/MedicationList';
import NewPatientForm from './components/forms/NewPatientForm';
import PhysicianList from './components/PhysicianList';
import ShowPatient from './components/ShowPatient';

import classes from './App.module.css'


function App() {
  //using localStorage.username as arg for useState keeps
  //logged in user in local storage, i.e. page refresh
  //To logout clean local storage and clean context
  const [user, setUser] = useState(localStorage.username);

  const store = {
    user, setUser
  };
  // const callBack = () => {
  //  AuthApiService.postRefreshToken();
  // }

  // if (TokenService.hasAuthToken()) {
  //   TokenService.queueCallbackBeforeExpiry(callBack);
  // }

  return (
    <AppContext.Provider value={store}>
    <div className={classes.App}>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/patients/new' component={NewPatientForm} />
          <Route exact path='/patients/:pid/' component={ShowPatient} />
          <Route exact path='/patients/:pid/edit' component={EditPatient} />
          <Route exact path='/medications/:pid' component={MedicationList} />
          <Route exact path='/physicians/:pid' component={PhysicianList} />
        </Switch>
      </main>
    </div>
    </AppContext.Provider>
  );
}

export default App;
