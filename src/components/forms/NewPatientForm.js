import React, { useCallback, useReducer } from 'react';
import axios from 'axios';
import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../hooks/form-hook';
import './NewPatientForm.css';

const NewPatientForm = () => {
    const [formState, inputChangeHandler] = useForm({
        name: {
            value: '',
            isValid: false
        },
        // middlename: {
        //     value: '',
        //     isValid: false
        // },
        // lastname: {
        //     value: '',
        //     isValid: false
        // },
        age: {
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
        }
    }, false);

    const submitHandler = async e => {
        e.preventDefault();
        const { name, age, gender, race } = formState.inputs
        console.log(formState);
        const newPatient = {
           
          name: name.value,
          age: age.value,
          gender: gender.value,
          race: race.value
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.authToken
                }
            }
            const body = JSON.stringify(newPatient);
            const response = await axios.post('http://localhost:8080/api/patients', body, config);
            console.log(response.data);

        } catch (err) {
            console.error(err);
        }
    }

        //TODO: Edit Patient model to "name" property only
        //TODO: Add address and contact info here
        //TODO: Add date of birth property to pt model, newPatient, and editPatient forms
    return <form className="patient-form" onSubmit={submitHandler}>
        <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />
            
        {/* <Input
            id="middlename"
            element="input"
            type="text"
            label="Middle name"
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Please enter required fields."
            onInput={inputChangeHandler} />

        <Input
            id="lastname"
            element="input"
            type="text"
            label="Last name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." 
            onInput={inputChangeHandler}
            /> */}

        <Input
            id="age"
            element="input"
            type="text"
            label="age"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." 
            onInput={inputChangeHandler}
            />

        <Input
            id="gender"
            element="input"
            type="text"
            label="gender"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." 
            onInput={inputChangeHandler}
            />

        <Input
            id="race"
            element="input"
            type="text"
            label="race"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." 
            onInput={inputChangeHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Add Patient</Button>
    </form>;
};

export default NewPatientForm;