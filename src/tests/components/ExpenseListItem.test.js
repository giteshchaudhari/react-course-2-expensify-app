import React from 'react';
import ExpenseListItem from './../../component/ExpenseListItem';
import expenses from './../fixtures/expenses';
import { shallow } from 'enzyme';


test('should render expenselistitem',()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[0]}/>) ;
    expect(wrapper).toMatchSnapshot();
})

