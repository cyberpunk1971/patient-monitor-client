import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatientList from './PatientList';
import PatientApiService from '../services/patient-service';
import './Dashboard.css';

const Dashboard = (props) => {
    const [patients, setPatients] = useState([]);
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
    useEffect(() => {
         update();
        
    }, []);

   
 
    return (
        <>
            <Link to="/patients/new">Add Patient</Link>
            <PatientList patients={patients} update={update} history={props.history} />

        </>
    );

};

export default Dashboard;