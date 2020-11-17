import React, { useCallback, useReducer } from 'react';

import Button from '../UI/buttons/Button';
import Input from './UI/Input';
import { VALIDATOR_REQUIRE, formReducer } from '../../utils/validators';
import './NewPatientForm.css';

const NewPatientForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            firstname: {
                value: '',
                isValid: false
            },
            middlename: {
                value: '',
                isValid: false
            },
            lastname: {
                value: '',
                isValid: false
            },
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
        },
        isValid: false
    });

    const inputChangeHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE', 
            value: value, 
            isValid: isValid, 
            inputId: id
        });
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        const {  email, password } = formState.inputs
        console.log(formState);
        const newUser = {
           
            email: email.value,
            password: password.value
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.authToken
                }
            }
            const body = JSON.stringify(newUser);
            const response = await axios.post('http://localhost:8080/api/users/login', body, config);
            console.log(response.data);

        } catch (err) {
            console.error(err);
        }
    }

    return <form className="patient-form" onSubmit={onSubmit}>
        <Input
            id="firstname"
            element="input"
            type="text"
            label="First name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="middlename"
            element="input"
            type="text"
            label="Middle name"
            //validators={[VALIDATOR_REQUIRE()]} 
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
            />

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