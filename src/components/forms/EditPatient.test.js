import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EditPatient from './EditPatient';

configure({adapter: new Adapter()});

describe('<EditPatient />', () => {
    it('renders without crashing.', () => {
        shallow(<EditPatient />);
    });
});