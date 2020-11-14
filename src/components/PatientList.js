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
    //Should the key be the patient ID or the user ID?
    //Refer to {Link} in Patient.js
    return <ul className="patient-list">
        {props.patients.map((patient) => {
            return (
                <Patient
                    key={patient.id}
                    id={patient.id}
                    name={patient.name}
                    age={patient.age}
                    gender={patient.gender}
                    race={patient.race}
                    address={patient.address}
                    city={patient.city}
                    state={patient.state}
                    zip={patient.zip}
                    phone={patient.phone} />
            );
        })}
    </ul>
};

export default PatientList;