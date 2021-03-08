import React from 'react';
import PhysicianApiService from '../services/physician-service';
import classes from './Physician.module.css';

const Physician = (props) => {

    return (
        <>
            <ul className={classes.medication_item_list}>
                <li className={classes.medication_item}>Name: {props.name}</li>
                <li className={classes.medication_item}>NPI: {props.npi}</li>
                <li className={classes.medication_item}>Address: {props.address}</li>
                <li className={classes.medication_item}>Unit/Ste: {props.unit}</li>
                <li className={classes.medication_item}>City: {props.city}</li>
                <li className={classes.medication_item}>State: {props.usState}</li>
                <li className={classes.medication_item}>Zip: {props.zip}</li>
                <li className={classes.medication_item}>Phone: {props.phone}</li>
                <li className={classes.medication_item}>Fax: {props.fax}</li>
                {props.children}
                
            </ul>
        </>
    )
};

export default Physician;