import React, { useContext } from 'react';

import AuthApiService from '../services/auth';
import config from '../config';

import AppContext from '../AppContext';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from '../utils/validators';

import Button from './UI/buttons/Button';
import Input from './UI/Input';

import classes from './Register.module.css'

const Register = (props) => {
    const context = useContext(AppContext);


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
        // console.log(formState);
        const newUser = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        const data = await AuthApiService.register(newUser)
        context.setUser(data.username);
        props.history.push('/dashboard');
    }

    return <>
        {/* <div className="patient-form">
            <h2>Patient Monitor</h2>
            <h3>is an application for efficient management of
                patient data.</h3>
           
            <button>DEMO</button>
        </div> */}

        <header>
            <h1>Register</h1>
        </header>
        <div className={classes.p}>
            <form className={classes.register_form} onSubmit={e => onSubmit(e)}>
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

                <button className={classes.register_btn} type="submit" value="submit">SUBMIT</button>
            </form>
            <div>
                <p>Already Have an Account?</p>
                <Button to='/login'>Login</Button>
            </div>


        </div>
    </>
}

export default Register;
