import React from 'react';

import Medication from './Medication';
import './PatientList.css';

const MedicationList = (props) => {
    
    console.log(props.medications);
    //Should the key be the patient ID or the user ID?
    //Refer to {Link} in Medication.js
    return <ul className="patient-list">
        {props.medications.map((medication) => {
            return (
                <Medication
                history={props.history}
                    key={medication.id}
                    id={medication.id}
                    name={medication.name}
                    creatorId={medication.creator}
                     />
            );
        })}
    </ul>
};

export default MedicationList;