import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './UI/Input';
import Register from './Register';

configure({adapter: new Adapter()});

describe('<Register />', () => {
    it('should render three <Input /> elements', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find(Input)).toHaveLength(3);
    });
});