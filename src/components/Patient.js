import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './UI/buttons/Button';
import MedicationList from './MedicationList';
import Modal from './UI/Modal';
import PatientApiService from '../services/patient-service';
import './Patient.css';
import axios from 'axios';


//Will props ID refer to user ID or patient ID?
//Refer to PatientList.js
const Patient = (props) => {
    const [showMeds, setShowMeds] = useState(false);

    const openMedsHandler = () => {
        setShowMeds(true);
    };

    const closeMedsHandler = () => {
        setShowMeds(false);
    };
    //TODO: Fix edit pt functionality
    const editPatient = async () => {
        props.history.push(`/patients/${props.id}/edit`)
    }

    const deletePatient = async () => {
        await PatientApiService.deletePatient(props.id);
        props.update();
    }

    const medList = () => {
        axios.get(`http://localhost:8080/api/medications/${props.id}`)
        props.history.push('/medications')
    }
    return (
        <>
        <Modal show={showMeds} onCancel={closeMedsHandler} header={props.name} contentClass="place-item__modal-content" footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMedsHandler}>CLOSE</Button>}
        >
        <div className="med-container">
            <h2>Meds</h2>
        </div>
        </Modal>
        
            <li className="patient-card">
            <Link to={`/patients/${props.id}`}>
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
                </Link>
                <Button onClick={deletePatient}>Delete</Button>
                <Button onClick={editPatient}>Edit</Button>
                <Button onClick={openMedsHandler}>Medications</Button>
            </li>
    
        </>
    );
};

export default Patient;