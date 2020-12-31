import React, { useState, useEffect } from 'react';
import MedicationApiService from '../services/medication-service';
import Button from './UI/buttons/Button';


const Medication = (props) => {

    const deleteMedication = async () => {
        await MedicationApiService.deleteMedication(props.id, props.patientId);
        props.refreshAfterDelete();
       
    }

    //TODO add other inputs and also in AddMedForm
    return (
        <>
            <li>
                {props.name}
                {props.dosage}
                {props.frequency}
                {props.route}
                {props.date}
                <Button onClick={() => {
                    deleteMedication()
                }}>Delete</Button>
            </li>
        </>
    )
};

export default Medication;