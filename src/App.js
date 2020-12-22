import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppContext from './AppContext';
import Dashboard from './components/Dashboard';
import EditPatient from './components/forms/EditPatient';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import MainNavigation from './components/UI/Navigation/MainNavigation';
import Medication from './components/Medication';
import MedicationList from './components/MedicationList';
import NewPatientForm from './components/forms/NewPatientForm';
import ShowPatient from './components/ShowPatient';

function App() {
  //using localStorage.username as arg for useState keeps
  //logged in user in local storage, i.e. page refresh
  //To logout clean local storage and clean context
  const [user, setUser] = useState(localStorage.username);

  const store = {
    user, setUser
  };
console.log(store);
  return (
    <AppContext.Provider value={store}>
    <div className="app">
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
        </Switch>
      </main>
    </div>
    </AppContext.Provider>
  );
}

export default App;
