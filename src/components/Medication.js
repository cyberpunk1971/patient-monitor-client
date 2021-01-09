import React, { useState, useEffect } from 'react';
import MedicationApiService from '../services/medication-service';
import Button from './UI/buttons/Button';

import classes from './Medication.module.css';


const Medication = (props) => {

    const deleteMedication = async () => {
        await MedicationApiService.deleteMedication(props.id, props.patientId);
        props.refresh();

    }

    //TODO add other inputs and also in AddMedForm
    return (
        <>
            <ul className={classes.medication_item_list}>
                <li className={classes.medication_item}>Name: {props.name}</li>
                <li className={classes.medication_item}>Dosage: {props.dosage}</li>
                <li className={classes.medication_item}>Frequency: {props.frequency}</li>
                <li className={classes.medication_item}>Route: {props.route}</li>
                <li className={classes.medication_item}>Date: {props.date}</li>
                {props.children}
                
                <button className={classes.delete_med_btn} onClick={() => {
                    deleteMedication()
                }}>Delete</button>
                
            </ul>
        </>
    )
};

export default Medication;