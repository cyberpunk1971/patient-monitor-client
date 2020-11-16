import React, { useState } from 'react';
import axios from 'axios';

import Button from './UI/buttons/Button';
import Input from './UI/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from '../utils/validators';
//import {  } from '../utils/validators';

const Home = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password
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
            console.error(err.response.data);
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
                    element="input"
                    type="text"
                    label="Username"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a username." />

                <Input
                    element="input"
                    type="text"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address." />

                <Input
                    element="input"
                    type="text"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(72)]}
                    errorText="Please enter a valid password between 8 and 72 characters." />

                <Button type="submit" value="submit">SUBMIT</Button>
            </form>


        </div>
    </>
}

export default Home;