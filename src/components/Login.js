import React, { useContext } from 'react';
import axios from 'axios';

import AuthApiService from '../services/auth';
import config from '../config';

import AppContext from '../AppContext';
import Input from './UI/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../hooks/form-hook';
import TokenService from '../services/token-service';

import classes from './Login.module.css';


const Login = (props) => {
    const context = useContext(AppContext);

    const [formState, inputChangeHandler] = useForm({
        inputs: {
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
        const { email, password } = formState.inputs
        const newUser = {

            email: email.value,
            password: password.value
        }
        const data = await AuthApiService.login(newUser)
        
        context.setUser(data.username);
        props.history.push('/dashboard');
       
    }

    return <>
    <header>
            <h1>Login</h1>
        </header>
        <div>
            <form className={classes.login_form} onSubmit={e => onSubmit(e)}>

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
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(72)]}
                    errorText="Please enter a valid password between 8 and 72 characters."
                    onInput={inputChangeHandler} />

                <button className={classes.login_btn} type="submit" value="submit">SUBMIT</button>
            </form>


        </div>
    </>
}

export default Login;