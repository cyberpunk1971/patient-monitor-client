import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PatientList from './PatientList';
import './Dashboard.css';


const Dashboard = (props) => {
    const PATIENTS = [
        {
            id: 'p1', 
            name: 'John Doe', 
            age: '49',
            gender: 'Male',
            race: 'Caucasian',
            address: '123 E. Main St',
            city: 'Anytown',
            state: 'USA',
            zip: '12345',
            phone: '555-555-5555'
        }
    ];

    return <PatientList patients={PATIENTS} />
    
};

export default Dashboard;