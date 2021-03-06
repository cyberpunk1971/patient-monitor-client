import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import PatientApiService from '../services/patient-service';

import AddMedForm from '../components/forms/AddMedForm';
import Medication from './Medication';
import './MedicationList.module.css';
import classes from './MedicationList.module.css';

const MedicationList = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [patient, setPatient] = useState({
        medications: []
    });

    const refresh = () => {
        PatientApiService.getPatient(props.match.params.pid)
            .then(data => {
                setPatient(data);
            });
    }

    useEffect(() => {
        //mount action
        if (!props.match) {
            return;
        }
        refresh();

        //end mount action
        // return () => {
        //     //unMount action
        // }
    }, [])

    let noMeds;
    if (patient.medications.length === 0) {
        noMeds = (
            <div className='center'>
                <h2>No medications on file for {patient.name}</h2>
            </div>
        );
    }
    let modal;
    if (showModal) {
        modal = <AddMedForm
            refresh={refresh}
            patientId={props.match.params.pid}
            onCancel={setShowModal}
        />
    }
    return <>
        <ul className={classes.medication_list}>
            <Link to={`/patients/${patient.id}`}>Back</Link>
            <h2>{patient.name}</h2>
            <h3>ID: {patient.id}</h3>
            {patient.medications.map((medication) => {
                return (
                    <Medication
                        refresh={refresh}
                        patientId={props.match.params.pid}
                        history={props.history}
                        key={medication.id}
                        {...medication}
                        creatorId={medication.creator}>
                    </Medication>
                );
            })}
            {noMeds}

        </ul>
        <button className={classes.add_med_btn} onClick={(e) => {
            setShowModal(true);
        }}>&#43;</button>
        {modal}
    </>
};

//Smoke test so component will always load despite props or no props
MedicationList.defaultProps = {
    medications: []
};

export default MedicationList;