import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatientApiService from '../services/patient-service';


const ShowPatient = (props) => {
    const styles = {
        color: "black",
        background: "transparent",
        border: "none",
        fontFamily: "Josefin Sans",
        cursor: "pointer",
        fontSize: "16px"
    }


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

    const editPatient = async () => {
        props.history.push(`/patients/${patient.id}/edit`)
    }

    const deletePatient = async () => {
        await PatientApiService.deletePatient(patient.id);
        props.update();
    }
    return (
        <>
            <div>
                <ul>
                    <div>
                        <h3>ID: {patient.id}</h3>
                        <h3>Name: {patient.name}</h3>
                        <h3>Age: {patient.age}</h3>
                        <h3>DoB: {patient.dob}</h3>
                        <h3>Gender: {patient.gender}</h3>
                        <h3>Race: {patient.race}</h3>
                    </div>
                    <div>
                        <h3>Address: {patient.address}</h3>
                        <h3>Street: {patient.street}</h3>
                        <h3>Unit: {patient.unit}</h3>
                        <h3>City: {patient.city}</h3>
                        <h3>State: {patient.usState}</h3>
                        <h3>Zip: {patient.zip}</h3>
                        <h3>Phone: {patient.phone}</h3>
                    </div>
                </ul>


            </div>
            <button style={styles} onClick={deletePatient}>Delete</button>
            <button style={styles} onClick={editPatient}>Edit</button>
            <Link to={'/medications/' + patient.id}>Medications</Link>

        </>
    );
}

export default ShowPatient;