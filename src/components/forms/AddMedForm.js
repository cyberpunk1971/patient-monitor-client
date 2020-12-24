import React from 'react';
import axios from 'axios';
import TokenService from '../../services/token-service';
import MedicationApiService from '../../services/medication-service';
import Button from '../UI/buttons/Button';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useForm } from '../../hooks/form-hook';

const Medication = (props) => {
    const [formState, inputChangeHandler] = useForm({
        
            name: {
                value: '',
                isValid: false
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
            const response = await MedicationApiService.addMedication(newMed, props.patientId);
            //props.history.push('/dashboard');
            console.log(response);
            props.onCancel(false);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Modal
                show={true}
                onSubmit={onSubmit}
                onCancel={() => {
                    props.onCancel(false);
                }}>
                <Input
                id="name"
                    element="input"
                    type="text"
                    label="Medication:"
                    onInput={inputChangeHandler}
                />
                <Button type="submit" value="submit">Add</Button>

            </Modal>
        </>
    )

};

export default Medication;