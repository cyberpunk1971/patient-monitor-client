import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Medication from './Medication';

configure({adapter: new Adapter()});

describe('<Medication />', () => {
    it('renders without crashing.', () => {
        shallow(<Medication />);
    });
});