import React, { useState } from 'react';
import TokenService from '../../services/token-service';
import MedicationApiService from '../../services/medication-service';
import PatientApiService from '../../services/patient-service';
import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useForm } from '../../hooks/form-hook';

import classes from './AddMedForm.module.css'

const AddMedication = (props) => {


    const [formState, inputChangeHandler] = useForm({

        name: {
            value: '',
            isValid: false
        },
        dosage: {
            value: '',
            isValid: false
        },
        frequency: {
            value: '',
            isValid: false
        },
        route: {
            value: '',
            isValid: false
        },
        date: {
            value: '',
            isValid: false
        }

    });

    const submitHandler = async e => {
        e.preventDefault();
        const { name, dosage, frequency, route, date } = formState.inputs
        console.log(formState);
        const newMed = {
            name: name.value,
            dosage: dosage.value,
            frequency: frequency.value,
            route: route.value,
            date: date.value
        }

        try {
            const response = await MedicationApiService.addMedication(newMed, props.patientId);
            //props.medication.push(response);
            console.log(response);
            props.onCancel(false);
            props.refresh();

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="add_med_form" onSubmit={submitHandler}>
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Medication:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="dosage"
                    element="input"
                    type="text"
                    label="Dosage:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="frequency"
                    element="input"
                    type="text"
                    label="Frequency:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="route"
                    element="input"
                    type="text"
                    label="Route:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="date"
                    element="input"
                    type="text"
                    label="Date:"
                    onInput={inputChangeHandler}
                />

                <button className={classes.confirm_add_btn} type="submit" value="submit" >&#43;</button>

            </form>
        </>
    )

};

export default AddMedication;