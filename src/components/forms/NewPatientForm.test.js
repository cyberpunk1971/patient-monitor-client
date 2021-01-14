import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewPatientForm from './NewPatientForm';

configure({adapter: new Adapter()});

describe('<NewPatientForm />', () => {
    it('renders without crashing.', () => {
        shallow(<NewPatientForm />);
    });
});