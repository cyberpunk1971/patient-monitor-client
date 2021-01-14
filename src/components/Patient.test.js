import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Patient from './Patient';

configure({adapter: new Adapter()});

describe('<Patient />', () => {
    it('renders without crashing.', () => {
        shallow(<Patient />);
    });
});