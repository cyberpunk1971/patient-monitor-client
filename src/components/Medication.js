import React, {useState, useEffect} from 'react';
import axios from 'axios';

import MedicationApiService from '../services/medication-service';

import MedicationList from '../components/MedicationList';
import AddMedForm from '../components/forms/AddMedForm';


const Medication = (props) => {
    const [medications, setMedication] = useState([]);
    useEffect(() => {
        medList()
    })

    const medList = async () => {
       const response = await MedicationApiService.getMedicationByPatientId
       setMedication(response.data);
    }

    return (
    <>
    <MedicationList medications={medications}/>
    
    <AddMedForm />
    
    </>
    )
};

export default Medication;