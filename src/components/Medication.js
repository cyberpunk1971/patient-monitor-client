import React, {useState, useEffect} from 'react';
import MedicationApiService from '../services/medication-service';
import Button from './UI/buttons/Button';


const Medication = (props) => {
    
const deleteMedication = async () => {
   await MedicationApiService.deleteMedication(props.id, props.patientId);
}
    
//TODO add other inputs and also in AddMedForm
    return (
    <>
        {props.name}
        <Button onClick={() => {
            deleteMedication()
        }}></Button>
    </>
    )
};

export default Medication;