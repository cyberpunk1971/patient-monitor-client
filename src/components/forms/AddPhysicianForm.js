import React from 'react';
import PhysicianApiService from '../../services/physician-service';
import Input from '../UI/Input';
import { useForm } from '../../hooks/form-hook';

import classes from './AddMedForm.module.css'

const AddPhysicianForm = (props) => {


    const [formState, inputChangeHandler] = useForm({

        name: {
            value: '',
            isValid: false
        },
        npi: {
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
        },
        fax: {
            value: '',
            isValid: false
        }

    });

    const submitHandler = async e => {
        e.preventDefault();
        const { name, npi, address, unit, city, usState, zip, phone, fax } = formState.inputs
        const newPhysician = {
            name: name.value,
            npi: npi.value,
            address: address.value,
            unit: unit.value,
            city: city.value,
            usState: usState.value,
            zip: zip.value,
            phone: phone.value,
            fax: fax.value

        }

        try {
            const response = await PhysicianApiService.addPhysician(newPhysician, props.patientId);
            props.onCancel(false);
            props.refresh();

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="add_med_form" onSubmit={submitHandler}>
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Medication:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="npi"
                    element="input"
                    type="text"
                    label="NPI:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="address"
                    element="input"
                    type="text"
                    label="Address:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="unit"
                    element="input"
                    type="text"
                    label="Unit/Ste:"
                    onInput={inputChangeHandler}
                />

                <Input
                    id="city"
                    element="input"
                    type="text"
                    label="City:"
                    onInput={inputChangeHandler}
                />
                <Input
                    id="usState"
                    element="input"
                    type="text"
                    label="State:"
                    onInput={inputChangeHandler}
                />
                <Input
                    id="zip"
                    element="input"
                    type="text"
                    label="Zip:"
                    onInput={inputChangeHandler}
                />
                <Input
                    id="phone"
                    element="input"
                    type="text"
                    label="Phone:"
                    onInput={inputChangeHandler}
                />
                <Input
                    id="fax"
                    element="input"
                    type="text"
                    label="Fax:"
                    onInput={inputChangeHandler}
                />

                <button className={classes.confirm_add_btn} type="submit" value="submit" >&#43;</button>

            </form>
        </>
    )

};

export default AddPhysicianForm;