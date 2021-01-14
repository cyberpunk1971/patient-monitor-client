import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainNavigation from './MainNavigation';

configure({adapter: new Adapter()});

describe('<MainNavigation />', () => {
    it('renders without crashing.', () => {
        shallow(<MainNavigation />);
    });
});