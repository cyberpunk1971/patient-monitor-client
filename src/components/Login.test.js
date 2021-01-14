import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './UI/Input';
import Login from './Login';

configure({adapter: new Adapter()});

describe('<Login />', () => {
    it('should render two <Input /> elements', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Input)).toHaveLength(2);
    });
});