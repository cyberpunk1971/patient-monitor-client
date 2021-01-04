import React from 'react';

import Patient from './Patient';
import './PatientList.css';

const PatientList = (props) => {
    if (props.patients.length === 0) {
        return (
            <div className='center'>
                <h2>Your patient list is empty...</h2>
            </div>
        );
    }
    console.log(props.patients);
    //Should the key be the patient ID or the user ID?
    //Refer to {Link} in Patient.js
    return <ul className="patient-list">
        {props.patients.map((patient) => {
            return (
                <Patient
                    update={props.update}
                    history={props.history}
                    key={patient.id}
                    id={patient.id}
                    name={patient.name}
                    age={patient.age}
                    dob={patient.dob}
                    gender={patient.gender}
                    race={patient.race}
                    address={patient.address}
                    street={patient.street}
                    unit={patient.unit}
                    city={patient.city}
                    usState={patient.usState}
                    zip={patient.zip}
                    phone={patient.phone}
                    creatorId={patient.creator}
                />
            );
        })}
    </ul>
};

export default PatientList;