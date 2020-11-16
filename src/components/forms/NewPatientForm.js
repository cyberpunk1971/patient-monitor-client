import React, { isValidElement, useCallback, useReducer } from 'react';

import Button from '../UI/buttons/Button';
import Input from './UI/Input';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import './NewPatientForm.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId)  {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            };
            default:
                return state;
    }
};

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

    return <form className="patient-form">
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
            errorText="Please enter required fields." />

        <Input
            id="lastname"
            element="input"
            type="text"
            label="Last name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." />

        <Input
            id="age"
            element="input"
            type="text"
            label="age"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." />

        <Input
            id="gender"
            element="input"
            type="text"
            label="gender"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." />

        <Input
            id="race"
            element="input"
            type="text"
            label="race"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields." />
            <Button type="submit" disabled={!formState.isValid}>Add Patient</Button>
    </form>;
};

export default NewPatientForm;