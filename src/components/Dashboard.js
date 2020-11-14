import React, { Fragment } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PatientList from './PatientList';
import './Dashboard.css';


const Dashboard = (props) => {
    const PATIENTS = [{id: 'p1', name: 'Alex Thomas', age: '49'}];

    return <PatientList patients={PATIENTS} />
    
};

export default Dashboard;