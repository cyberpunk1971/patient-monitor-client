import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './UI/buttons/Button';
import PatientList from './PatientList';
import './Dashboard.css';


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
        phone: '555-555-5555',
        creator: 'u1'
    },
    {
        id: 'p2',
        name: 'Jane Doe',
        age: '49',
        gender: 'female',
        race: 'Caucasian',
        address: '123 E. Main St',
        city: 'Anytown',
        state: 'USA',
        zip: '12345',
        phone: '555-555-5555',
        creator: 'u2'
    }

];
//In App.js, where the routes are, do I write /dashboard/:uid, or /:uid/dashboard? Or does it matter?
const Dashboard = (props) => {

    const uid = useParams().uid;
    const myPatients = PATIENTS.filter(patient => patient.creator === uid);


    return (
        <>
            <Button>Add Patient</Button>
            <PatientList patients={myPatients} />

        </>
    );

};

export default Dashboard;