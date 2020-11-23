import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../hooks/form-hook';
import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import './NewPatientForm.css';


const PATIENTS = [
    {
        id: 'p1',
        name: 'John Doe',
        age: '49',
        gender: 'Male',
        race: 'Caucasian',
        address: '123 E. Main St',
        city: 'Anytown',
        usState: 'USA',
        zip: '12345',
        phone: '555-555-5555',
        creator: 'u1'
    },
    {
        id: 'p2',
        name: 'Jane Doe',
        age: '49',
        gender: 'female',
        race: 'Caucasian',
        address: '123 E. Main St',
        city: 'Anytown',
        usState: 'USA',
        zip: '12345',
        phone: '555-555-5555',
        creator: 'u2'
    }

];

const EditPatient = () => {
    const [isLoading, setIsLoading] = useState(true);
    const pid = useParams().pid;

    const [formState, inputChangeHandler, setFormData] = useForm({
        name: {
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
        },
        address: {
            value: '',
            isValid: false
        },
        city: {
            value: '',
            isValid: false
        },
        usState: {
            value: '',
            isValid: false
        },
        zip: {
            value: '',
            isValid: false
        },
        phone: {
            value: '',
            isValid: false
        }
    },
        false
    );

    const existingPatient = PATIENTS.find(p => p.id === pid);

    useEffect(() => {
        setFormData({
            name: {
                value: existingPatient.name,
                isValid: true
            },
            age: {
                value: existingPatient.age,
                isValid: true
            },
            gender: {
                value: existingPatient.gender,
                isValid: true
            },
            race: {
                value: existingPatient.race,
                isValid: true
            },
            address: {
                value: existingPatient.address,
                isValid: true
            },
            city: {
                value: existingPatient.city,
                isValid: true
            },
            usState: {
                value: existingPatient.usState,
                isValid: true
            },
            zip: {
                value: existingPatient.zip,
                isValid: true
            },
            phone: {
                value: existingPatient.phone,
                isValid: true
            }
        }, true);
        setIsLoading(false);
    }, [setFormData, existingPatient]);


    const editPatientSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!existingPatient) {
        return (
            <h2>Patient not found!</h2>
        );
    }

    if (isLoading) {
        <h2>Loading...</h2>
    };

    return (
            <form className="patient-form" onSubmit={editPatientSubmitHandler}>
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.name.value}
                    initialValid={formState.inputs.name.isValid}
                />

                <Input
                    id="age"
                    element="input"
                    type="text"
                    label="age"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.age.value}
                    initialValid={formState.inputs.age.isValid}
                />

                <Input
                    id="gender"
                    element="input"
                    type="text"
                    label="gender"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.gender.value}
                    initialValid={formState.inputs.gender.isValid}
                />

                <Input
                    id="race"
                    element="input"
                    type="text"
                    label="race"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.race.value}
                    initialValid={formState.inputs.race.isValid}
                />

                <Input
                    id="address"
                    element="input"
                    type="text"
                    label="address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.address.value}
                    initialValid={formState.inputs.address.isValid}
                />

                <Input
                    id="city"
                    element="input"
                    type="text"
                    label="city"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.city.value}
                    initialValid={formState.inputs.city.isValid}
                />

                <Input
                    id="state"
                    element="input"
                    type="text"
                    label="usState"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.usState.value}
                    initialValid={formState.inputs.usState.isValid}
                />

                <Input
                    id="zip"
                    element="input"
                    type="text"
                    label="zip"
                    validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={inputChangeHandler}
                    initialValue={formState.inputs.zip.value}
                    initialValid={formState.inputs.zip.isValid}
                />

                <Input
                    id="phone"
                    element="input"
                    type="text"
                    label="phone"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter all fields"
                    onInput={() => { }}
                    initialValue={formState.inputs.phone.value}
                    initialValid={formState.inputs.phone.isValid}
                />

                <Button type="submit" disabled={!formState.isValid}>Update</Button>

            </form>
        );
};

export default EditPatient;