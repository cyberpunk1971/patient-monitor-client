import React from 'react';
import axios from 'axios';
import TokenService from '../../services/token-service';
import Input from '../UI/Input';
import { useForm } from '../../hooks/form-hook';

const Medication = (props) => {
    const [formState, inputChangeHandler] = useForm({
        inputs: {
            name: {
                value: '',
                isValid: false
            }
        }
    });

    const onSubmit = async e => {
        e.preventDefault();
        const { name } = formState.inputs
        console.log(formState);
        const newMed = {

            name: name.value
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newMed);
            const response = await axios.post('http://localhost:8080/api/users/login', body, config);
            localStorage.authToken = response.data.token
            localStorage.username = response.data.username;
            TokenService.saveAuthToken(response.data.token);
            props.history.push('/dashboard');
            console.log(response.data);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="patient-form" onSubmit={e => onSubmit(e)}>
                <Input
                element="input"
                    type="text"
                    label="Medication:"
                    onInput={inputChangeHandler}
                />
            </form>

        </>
    )

};

export default Medication;