import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

ReactDOM.createPortal = jest.fn(button => button);

configure({adapter: new Adapter()});

describe('<Home />', () => {
    it('should render a <button />', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(<button />)).not.toHaveLength(1);
    });
});