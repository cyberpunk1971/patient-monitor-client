import React from 'react';

import { useParams } from 'react-router-dom';
//import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../utils/validators';

import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import './EditPatient.css';


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
    const pid = useParams().pid;

    const existingPatient = PATIENTS.find(p => p.id === pid);

    if (!existingPatient) {
        return (
            <h2>Patient not found!</h2>
        );
    }

    return <form>
        <Input
            id="name"
            element="input"
            type="text"
            label="name"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.name}
            valid={true}
        />

        <Input
            id="age"
            element="input"
            type="text"
            label="age"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.age}
            valid={true}
        />

        <Input
            id="gender"
            element="input"
            type="text"
            label="gender"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.gender}
            valid={true}
        />

        <Input
            id="race"
            element="input"
            type="text"
            label="race"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.race}
            valid={true}
        />

        <Input
            id="address"
            element="input"
            type="text"
            label="address"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.address}
            valid={true}
        />

        <Input
            id="city"
            element="input"
            type="text"
            label="city"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.city}
            valid={true}
        />

        <Input
            id="state"
            element="input"
            type="text"
            label="usState"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.usState}
            valid={true}
        />

        <Input
            id="zip"
            element="input"
            type="text"
            label="zip"
           // validator={[VALIDATOR_MINLENGTH(5), VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.zip}
            valid={true}
        />

        <Input
            id="phone"
            element="input"
            type="text"
            label="phone"
            //validator={[VALIDATOR_REQUIRE()]}
            errorText="Please enter all fields"
            onInput={() => { }}
            value={existingPatient.phone}
            valid={true}
        />

        <Button type="submit" disabled={true}>Edit Patient</Button>

    </form>;
};

export default EditPatient;