import React from 'react';
import { useState } from 'react'

import AddMedForm from '../components/forms/AddMedForm';
import Button from './UI/buttons/Button';
import Medication from './Medication';
import './PatientList.css';

const MedicationList = (props) => {

    const [showModal, setShowModal] = useState(false);
    let noMeds;
    if (props.medications.length === 0) {
        noMeds = (
            <div className='center'>
                <h2>No medications on file...</h2>

            </div>
        );
    }
    let modal;
    if (showModal) {
        modal = <AddMedForm 
            onCancel = {setShowModal}
        />
    }
    console.log(props.medications);
    console.log(showModal);
    //Should the key be the patient ID or the user ID?
    //Refer to {Link} in Medication.js
    return <>

        <ul className="patient-list">
            {props.medications.map((medication) => {
                return (

                    <Medication>
                        history={props.history}
                    key={medication.id}
                    id={medication.id}
                    name={medication.name}
                    creatorId={medication.creator}
                    </Medication>

                );
            })}
            {noMeds}

        </ul>
        <Button onClick={(e) => {
            setShowModal(true);
        }}>Add Medication</Button>
        {modal}
    </>

};

//Smoke test so component will always load despite props or no props
MedicationList.defaultProps = {
    medications: []
};

export default MedicationList;