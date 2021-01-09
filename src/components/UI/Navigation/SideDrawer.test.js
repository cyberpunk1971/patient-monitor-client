import React from 'react';
import ReactDOM from "react-dom";
import { render, fireEvent, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import "jest-styled-components";
import {mount} from 'enzyme';

import Backdrop from '../UI/Backdrop';

describe("Backdrop component test", () => {
    let mockHideBackdrop;

    beforeEach(() => {
        mockHideBackdrop = jest.fn();
    });

    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element;
        })
    })

    afterEach(() => {
        ReactDOM.createPortal.mockClear();
    })

    it("not hidden backdrop is not hidden", () => {
        const {container} = render(<Backdrop onClick={props.onClick}></Backdrop>);
        expect(container.firstChild).toMatchSnapshot();
    })
})

