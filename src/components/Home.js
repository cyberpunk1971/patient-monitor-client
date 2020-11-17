import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import Button from './UI/buttons/Button';
import Input from './UI/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, formReducer } from '../utils/validators';



const Home = () => {
    const [formState, dispatch] = useReducer(formReducer, {
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
            console.log(response.data);

        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <div className="class= col-6 side_div_left">
            <h2>Patient Monitor</h2>
            <h3>is an application for efficient management of
                patient data.</h3>
            <p>Issues: Address routes for users/patients in App.js and Dashboard.js.</p>
            <p>Address PatientList.js and Patient.js ID key/value.</p>

            <button>DEMO</button>
        </div>

        <div className="register-div">
            <form className="register-form" onSubmit={e => onSubmit(e)}>
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
                    type="text"
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