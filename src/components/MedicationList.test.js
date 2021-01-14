import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MedicationList from './MedicationList';

configure({adapter: new Adapter()});

describe('<MedicationList />', () => {
    it('renders without crashing.', () => {
        shallow(<MedicationList />);
    });
});