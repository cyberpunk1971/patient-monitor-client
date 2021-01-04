import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../hooks/form-hook';
import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import classes from './EditPatient.module.css';
import PatientApiService from '../../services/patient-service';

const EditPatient = (props) => {
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
        street: {
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


    useEffect(async () => {
        //Take id from URL
        const existingPatient = await PatientApiService.getPatient(pid)
        setFormData({
            name: {
                value: existingPatient.name,
                isValid: true
            },

            age: {
                value: existingPatient.age,
                isValid: true
            },

            dob: {
                value: existingPatient.dob,
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

            street: {
                value: existingPatient.street,
                isValid: true
            },

            unit: {
                value: existingPatient.unit,
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
    }, [setFormData]);


    const editPatientSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(formState.inputs, 'line 133');
        const {
            name,
            age,
            dob,
            gender,
            race,
            address,
            street,
            unit,
            city,
            usState,
            zip,
            phone } = formState.inputs

        const patient = {
            id: pid,
            name: name.value,
            age: age.value,
            dob: dob.value,
            gender: gender.value,
            race: race.value,
            address: address.value,
            street: street.value,
            unit: unit.value,
            city: city.value,
            usState: usState.value,
            zip: zip.value,
            phone: phone.value
        }
        await PatientApiService.editPatient(patient)
        props.history.push('/dashboard');
    };

    // if (!existingPatient) {
    //     return (
    //         <h2>Patient not found!</h2>
    //     );
    // }

    if (isLoading || !formState.loaded) {
        return <h2>Loading...</h2>

    };
    console.log(formState);
    console.log(formState.inputs.name.value, "Name: Value");
    return (

        <form className="patient-form" onSubmit={editPatientSubmitHandler}>

            <Input
                id="name"
                element="input"
                type="text"
                label="Name"
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
                label="Age"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter all fields"
                onInput={inputChangeHandler}
                initialValue={formState.inputs.age.value}
                initialValid={formState.inputs.age.isValid}
            />

            <Input
                id="dob"
                element="input"
                type="text"
                label="DoB"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter all fields"
                onInput={inputChangeHandler}
                initialValue={formState.inputs.dob.value}
                initialValid={formState.inputs.dob.isValid}
            />

            <Input
                id="gender"
                element="input"
                type="text"
                label="Gender"
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
                label="Race"
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
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter all fields"
                onInput={inputChangeHandler}
                initialValue={formState.inputs.address.value}
                initialValid={formState.inputs.address.isValid}
            />

            <Input
                id="street"
                element="input"
                type="text"
                label="Street"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter all fields"
                onInput={inputChangeHandler}
                initialValue={formState.inputs.street.value}
                initialValid={formState.inputs.street.isValid}
            />

            <Input
                id="unit"
                element="input"
                type="text"
                label="Unit"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter all fields"
                onInput={inputChangeHandler}
                initialValue={formState.inputs.unit.value}
                initialValid={formState.inputs.unit.isValid}
            />

            <Input
                id="city"
                element="input"
                type="text"
                label="City"
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
                label="State"
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
                label="Zip"
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
                label="Phone"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter all fields"
                onInput={() => { }}
                initialValue={formState.inputs.phone.value}
                initialValid={formState.inputs.phone.isValid}
            />

            <button className={classes.edit_btn} type="submit">Update</button>

        </form>

    );
};

export default EditPatient;