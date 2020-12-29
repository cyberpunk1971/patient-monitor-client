import React from 'react';
import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { useForm } from '../../hooks/form-hook';
import PatientApiService from '../../services/patient-service';
import './NewPatientForm.css';

const NewPatientForm = (props) => {
    const [formState, inputChangeHandler] = useForm({
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
            isvalid: false
        },
        city: {
            value: '',
            isValid: false
        },
        unit: {
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
    }, false);

    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, age, dob, gender, race, address, street, city, unit, usState, zip, phone } = formState.inputs
        console.log(formState);
        const newPatient = {

            name: name.value,
            age: age.value,
            dob: dob.value,
            gender: gender.value,
            race: race.value,
            address: address.value,
            street: street.value,
            city: city.value,
            unit: unit.value,
            usState: usState.value,
            zip: zip.value,
            phone: phone.value
        }

        try {
            const response = await PatientApiService.addPatient(newPatient);
            //console.log(response.data);
            props.history.push('/dashboard');

        } catch (err) {
            console.error(err);
        }
    }

    //TODO: Edit Patient model to "name" property only
    //TODO: Add address and contact info here
    //TODO: Add date of birth property to pt model, newPatient, and editPatient forms
    console.log(formState);
    return <form className="patient-form" onSubmit={submitHandler}>
        <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="age"
            element="input"
            type="text"
            label="Age"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="dob"
            element="input"
            type="text"
            label="DoB"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="gender"
            element="input"
            type="text"
            label="Gender"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="race"
            element="input"
            type="text"
            label="Race"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="street"
            element="input"
            type="text"
            label="Street"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="city"
            element="input"
            type="text"
            label="City"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="unit"
            element="input"
            type="text"
            label="Unit"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="usState"
            element="input"
            type="text"
            label="State"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="zip"
            element="input"
            type="text"
            label="Zip"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />

        <Input
            id="phone"
            element="input"
            type="text"
            label="Phone"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required fields."
            onInput={inputChangeHandler}
        />
        <Button type="submit" value="submit" disabled={!formState.isValid}>Add Patient</Button>
    </form>;
};

export default NewPatientForm;