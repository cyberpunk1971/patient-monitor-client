import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppContext from './AppContext';
import Dashboard from './components/Dashboard';
import EditPatient from './components/forms/EditPatient';
import Home from './components/Home';
import Login from './components/Login';
import MainNavigation from './components/UI/Navigation/MainNavigation';
import MedicationList from './components/MedicationList';
import NewPatientForm from './components/forms/NewPatientForm';
import ShowPatient from './components/ShowPatient';




function App() {
  const [user, setUser] = useState(null);

  const store = {
    user: {get: user, set: setUser}
  };

  return (
    <AppContext.Provider value={store}>
    <div className="app">
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/patients/new' component={NewPatientForm} />
          <Route exact path='/patients/:pid/' component={ShowPatient} />
          <Route exact path='/patients/:pid/edit' component={EditPatient} />
          <Route exact path='/medications' component={MedicationList} />
        </Switch>
      </main>
    </div>
    </AppContext.Provider>
  );
}

export default App;
