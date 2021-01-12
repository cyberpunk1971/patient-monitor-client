import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './UI/buttons/Button';
import Modal from './UI/Modal';
import classes from './Patient.module.css';


//Will props ID refer to user ID or patient ID?
//Refer to PatientList.js
const Patient = (props) => {


    const [showMeds, setShowMeds] = useState(false);

    // const openMedsHandler = () => {
    //     setShowMeds(true);
    // };
 
    const closeMedsHandler = () => {
        setShowMeds(false);
    };

    return (
        <>
            <Modal show={showMeds} onCancel={closeMedsHandler} header={props.name} contentClass="place-item__modal-content" footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMedsHandler}>CLOSE</Button>}
            >
                <div className="med-container">
                    <h2>Meds</h2>
                </div>
            </Modal>

            <li className={classes.patient_card}>
                <Link to={`/patients/${props.id}`}>
                    <div className={classes.patient_demos}>
                        <h3>ID: {props.id}</h3>
                        <h3>NAME: {props.name}</h3>
                        <h3>AGE: {props.age}</h3>
                        <h3>DoB: {props.dob}</h3>
                        <h3>GENDER: {props.gender}</h3>
                        <h3>RACE: {props.race}</h3>
                    </div>
                    <div className={classes.patient_demos}>
                        <h3>ADDRESS: {props.address}</h3>
                        <h3>STREET: {props.street}</h3>
                        <h3>UNIT: {props.unit}</h3>
                        <h3>CITY:{ props.city}</h3>
                        <h3>STATE: {props.usState}</h3>
                        <h3>ZIP: {props.zip}</h3>
                        <h3>PHONE: {props.phone}</h3>
                    </div>
                </Link>

            </li>

        </>
    );
};

export default Patient;