import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PatientList from './PatientList';

configure({adapter: new Adapter()});

describe('<PatientList />', () => {
    it('renders without crashing.', () => {
        shallow(<PatientList />);
    });
});