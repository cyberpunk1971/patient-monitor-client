import React from 'react';
import { configure, shallow, mount }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

ReactDOM.createPortal = jest.fn(backdrop => backdrop);

let wrapper = shallow(
    <Backdrop visible={true}>Hello World</Backdrop>
);

expect(wrapper).toMatchSnapshot();

// describe('<Backdrop />', () => {
//     it('renders without crashing.', () => {
//         shallow(<Backdrop />);
//     });
// });