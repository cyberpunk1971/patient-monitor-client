import React from 'react';
import Input from '../UI/Input';

import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../hooks/form-hook';
import PatientApiService from '../../services/patient-service';

import classes from './NewPatientForm.module.css';

const NewPatientForm = (props) => {
    const [formState, inputChangeHandler] = useForm({
        name: {
            value: '',
            isValid: false
        },
        age: {
            value: '',
            isValid: false
        },
        dob: {
            value: '',
            isValid: false
        },
        gender: {
            value: '',
            isValid: false
        },
        race: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        },
        street: {
            value: '',
            isvalid: false
        },
        unit: {
            value: ''
        },
        city: {
            value: '',
            isValid: false
        },
       
        usState: {
            value: '',
            isValid: false
        },
        zip: {
            value: '',
            isValid: false
        },
        phone: {
            value: '',
            isValid: false
        }
    }, false);

    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, age, dob, gender, race, address, street, city, unit, usState, zip, phone } = formState.inputs
        const newPatient = {

            name: name.value,
            age: age.value,
            dob: dob.value,
            gender: gender.value,
            race: race.value,
            address: address.value,
            street: street.value,
            city: city.value,
            unit: unit.value,
            usState: usState.value,
            zip: zip.value,
            phone: phone.value
        } 
 
        try {
            //What is this doing and do i need it?
            const response = await PatientApiService.addPatient(newPatient);
            props.history.push('/dashboard');

        } catch (err) {
            console.error(err);
        }
    }

    return <form className={classes.patient_form} onSubmit={submitHandler}>
        <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="age"
            element="input"
            type="text"
            label="Age"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="dob"
            element="input"
            type="text"
            label="DoB"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="gender"
            element="input"
            type="text"
            label="Gender"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="race"
            element="input"
            type="text"
            label="Race"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="street"
            element="input"
            type="text"
            label="Street"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="city"
            element="input"
            type="text"
            label="City"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="unit"
            element="input"
            type="text"
            label="Unit"
            //validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="usState"
            element="input"
            type="text"
            label="State"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="zip"
            element="input"
            type="text"
            label="Zip"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="phone"
            element="input"
            type="text"
            label="Phone"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />
        <button className={classes.add_patient_btn} type="submit" value="submit">Submit</button>
    </form>;
};

export default NewPatientForm;