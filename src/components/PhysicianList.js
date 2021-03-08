import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import PhysicianApiService from '../services/patient-service';
import PatientApiService from '../services/patient-service';

import AddPhysicianForm from '../components/forms/AddPhysicianForm';
import Physician from './Physician';

const PhysicianList = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [patient, setPatient] = useState({
        physicians: []
    });

    const refresh = () => {
        PatientApiService.getPatient(props.match.params.pid)
            .then(data => {
                setPatient(data);
            });
    }

    useEffect(() => {
        //mount action
        if (!props.match) {
            return;
        }
        refresh();

        //end mount action
        // return () => {
        //     //unMount action
        // }
    }, [])

    let noPhysicians;
    if (patient.physicians.length === 0) {
        noPhysicians = (
            <div className='center'>
                <h2>No physicians on file for {patient.name}</h2>
            </div>
        );
    }
    let modal;
    if (showModal) {
        modal = <AddPhysicianForm
            refresh={refresh}
            patientId={props.match.params.pid}
            onCancel={setShowModal}
        />
    }
    return <>
        <ul>
            <Link to={`/patients/${patient.id}`}>Back</Link>
            <h2>{patient.name}</h2>
            <h3>ID: {patient.id}</h3>
            {patient.physicians.map((physician) => {
                return (
                    <Physician
                        refresh={refresh}
                        patientId={props.match.params.pid}
                        history={props.history}
                        key={physician.id}
                        {...physician}
                        creatorId={physician.creator}>
                    </Physician>
                );
            })}
            {noPhysicians}

        </ul>
        <button onClick={(e) => {
            setShowModal(true);
        }}>&#43;</button>
        {modal}
    </>
};

//Smoke test so component will always load despite props or no props
PhysicianList.defaultProps = {
    physicians: []
};

export default PhysicianList;