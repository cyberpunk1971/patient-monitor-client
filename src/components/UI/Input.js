import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';
import './Input.css';

const inputReducer = (state, action) => {
    // console.log(state, action, "Hello from inputReducer")
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state;
    }
};

const Input = props => {
    const initialState =  {
        value: props.initialValue,
        isTouched: false,
        isValid: props.initialValid || false
    }
    // console.log(props.initialValue)
    const [inputState, dispatch] = useReducer(inputReducer, {...initialState});
    // console.log(JSON.stringify(initialState), JSON.stringify(props.initialValue), JSON.stringify(inputState))
    // console.log(initialState, props.initialValue, inputState);
    const { id, onInput} = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const blurHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };
    
    const element = props.element === 'input' ?
        (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={changeHandler}
                onBlur={blurHandler}
                value={inputState.value}
            />

        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={blurHandler}
                value={inputState.value}
            />
        );


    return <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
};

export default Input;