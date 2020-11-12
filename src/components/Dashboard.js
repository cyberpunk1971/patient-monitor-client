import React, { Fragment } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Patients from './components/Patients';

class Dashboard extends React.Component {
    render() {

        return <>

            <h1>Dashboard</h1>
            <Route path='/patients' component={Patients}></Route>
        </>

    }
}
export default Dashboard;