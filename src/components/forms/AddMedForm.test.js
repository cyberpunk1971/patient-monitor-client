import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddMedForm from './AddMedForm';

configure({adapter: new Adapter()});

describe('<AddMedForm />', () => {
    it('renders without crashing.', () => {
        shallow(<AddMedForm />);
    });
});