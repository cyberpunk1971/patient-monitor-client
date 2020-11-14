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
    return <ul>
        {props.patients.map((patient) => {
            return (
                <Patient
                    key={patient.id}
                    id={patient.id}
                    age={patient.age}
                    name={patient.name} />
            );
        })}
    </ul>
};

export default PatientList;