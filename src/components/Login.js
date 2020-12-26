import React, { useReducer, useCallback, useContext } from 'react';
import axios from 'axios';

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
        // console.log(formState);
        const newUser = {

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
            const response = await axios.post('http://localhost:8080/api/users/login', body, config);
            localStorage.authToken = response.data.token
            localStorage.username = response.data.username;
            TokenService.saveAuthToken(response.data.token);
            context.setUser(response.data.username);
            props.history.push('/dashboard');
            console.log(response.data);

        } catch (err) {
            console.error(err);
        }
    }

    return <>
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
                    type="text"
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