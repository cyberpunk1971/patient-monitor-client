import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';

configure({adapter: new Adapter()});

describe('<Modal />', () => {
    it('renders without crashing.', () => {
        shallow(<Modal />);
    });
});