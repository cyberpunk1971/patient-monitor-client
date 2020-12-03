import React from 'react';
import { Link } from 'react-router-dom';

import Button from './UI/buttons/Button';
import MedicationList from './MedicationList';
import './Patient.css';
import axios from 'axios';


//Will props ID refer to user ID or patient ID?
//Refer to PatientList.js
const Patient = (props) => {

    //TODO: Fix edit pt functionality
    const editPatient = () => {
        axios.patch(`http://localhost:8080/api/patients/${props.id}`)
        props.history.push('/dashboard');
    }

    const deletePatient = () => {
        axios.delete(`http://localhost:8080/api/patients/${props.id}`)
        props.history.push('/dashboard');
    }

    const medList = () => {
        axios.get(`http://localhost:8080/api/medications/${props.id}`)
        props.history.push('/medications')
    }
    return (
        <Link to={`/${props.id}/patients`}>
            <li className="patient-card">
                <div className="patient-demos">
                    <h3>ID: {props.id}</h3>
                    <h3>{props.name}</h3>
                    <h3>{props.age}</h3>
                    <h3>{props.gender}</h3>
                    <h3>{props.race}</h3>
                </div>
                <div className="patient-contact-info">
                    <h3>{props.address}</h3>
                    <h3>{props.city}</h3>
                    <h3>{props.state}</h3>
                    <h3>{props.zip}</h3>
                    <h3>{props.phone}</h3>
                </div>
                <Button onClick={deletePatient}>Delete</Button>
                <Button onClick={editPatient}>Edit</Button>
                <Button onClick={medList}>Medications</Button>
            </li>
        </Link>
    );
};

export default Patient;