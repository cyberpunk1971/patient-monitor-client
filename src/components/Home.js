import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import Button from './UI/buttons/Button';
import Input from './UI/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../hooks/form-hook';
import './forms/NewPatientForm.css'

const Home = (props) => {
    const [formState, inputChangeHandler] = useForm({
        inputs: {
            username: {
                value: '',
                isValid: false
            },
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        }


    });

    const onSubmit = async e => {
        e.preventDefault();
        const { username, email, password } = formState.inputs
        console.log(formState);
        const newUser = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newUser);
            const response = await axios.post('http://localhost:8080/api/users/register', body, config);
            localStorage.authToken = response.data.token
            localStorage.username = response.data.username;
            props.history.push('/dashboard');

        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <div className="patient-form">
            <h2>Patient Monitor</h2>
            <h3>is an application for efficient management of
                patient data.</h3>
            <p>Issues: Address routes for users/patients in App.js and Dashboard.js.</p>
            <p>Address PatientList.js and Patient.js ID key/value.</p>

            <button>DEMO</button>
        </div>

        <div className="register-div">
            <form className="patient-form" onSubmit={e => onSubmit(e)}>
                <Input
                    id="username"
                    element="input"
                    type="text"
                    label="Username"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a username."
                    onInput={inputChangeHandler}
                />

                <Input
                    id="email"
                    element="input"
                    type="text"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address."
                    onInput={inputChangeHandler} />

                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(72)]}
                    errorText="Please enter a valid password between 8 and 72 characters."
                    onInput={inputChangeHandler} />

                <Button type="submit" value="submit">SUBMIT</Button>
            </form>


        </div>
    </>
}

export default Home;