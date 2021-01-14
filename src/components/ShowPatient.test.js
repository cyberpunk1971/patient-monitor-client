import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowPatient from './ShowPatient';

configure({adapter: new Adapter()});

describe('<ShowPatient />', () => {
    it('renders without crashing.', () => {
        shallow(<ShowPatient />);
    });
});