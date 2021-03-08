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

    return <ul className="patient-list">
        {props.patients.map((patient) => {
            return (
                <>
                <Patient
                    history={props.history}
                    key={patient.id}
                    {...patient}
                    creatorId={patient.creator}
                    
                />
                
                </>
            );
        })}
    </ul>
};

export default PatientList;