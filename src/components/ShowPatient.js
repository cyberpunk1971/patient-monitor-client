import React, { useEffect, useState } from 'react';

import PatientApiService from '../services/patient-service';


const ShowPatient = (props) => {
    const [patient, setPatient] = useState({});

    useEffect(() => {
        //mount action
        console.log(props)
        PatientApiService.getPatient(props.match.params.pid)
            .then(data => {
                setPatient(data);
                console.log(data);
            });
        //end mount action
        // return () => {
        //     //unMount action
        // }
    }, [])
    return (
        <>
            <div>
                <ul>
                    ID: {patient.id}
                    <h2>{patient.name}</h2>
                </ul>
            </div>
        </>
    );
}

export default ShowPatient;