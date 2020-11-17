import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import Button from './UI/buttons/Button';
import Input from './UI/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, formReducer } from '../utils/validators';



const Home = () => {
    const [formState, dispatch] = useReducer(formReducer, {
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
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newUser);
            const response = await axios.post('http://localhost:8080/api/users/login', body, config);
            localStorage.authToken = response.data.token;
            localStorage.username = response.data.username;
            console.log(response.data);

        } catch (err) {
            console.error(err);
        }
    }

    return <>
       

        <div className="register-div">
            <form className="register-form" onSubmit={e => onSubmit(e)}>

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

                <Button type="submit" value="submit">SUBMIT</Button>
            </form>


        </div>
    </>
}

export default Home;