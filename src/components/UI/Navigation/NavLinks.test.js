import React from 'react';

import { configure, shallow, mount }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavLinks from './NavLinks';
import { MemoryRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<NavLinks />', () => {
    it('Should render 3 <NavLinks /> elements if user not authenticated.', () => {
        const wrapper = shallow(<MemoryRouter><NavLinks /></MemoryRouter>);
        expect(wrapper.find('NavLinks')).toHaveLength(3);
        console.log(wrapper.debug());
    });
});