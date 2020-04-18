import React from 'react';
import NotFoundPage from './../../component/NotFoundPage';
import { shallow } from 'enzyme';

test('should render not found',()=>{
    const wrapper=shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot()
})