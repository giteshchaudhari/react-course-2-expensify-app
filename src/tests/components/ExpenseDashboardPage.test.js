import React from 'react'
import ExpenseDashboardPage from './../../component/ExpenseDashboardPage';
import { shallow } from 'enzyme';


test('shouldd render dashboard',()=>{
    const wrapper=shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot();
})