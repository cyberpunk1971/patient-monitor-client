import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from './UI/buttons/Button';
import PatientList from './PatientList';
import PatientApiService from '../services/patient-service';
import './Dashboard.css';



//In App.js, where the routes are, do I write /dashboard/:uid, or /:uid/dashboard? Or does it matter?
const Dashboard = (props) => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        update();

    }, []);

    const update = () => {
        PatientApiService.getPatients()
            .then((items) => {
                setPatients(items)
                console.log(patients, items);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <Link to="/patients/new">Add Patient</Link>
            <PatientList patients={patients} update={update} history={props.history} />

        </>
    );

};

export default Dashboard;