import React from 'react';
import {AddExpensePage} from './../../component/AddExpensePage';
import {shallow} from 'enzyme';
import expenses from './../fixtures/expenses';

test ('should render AddExpensePage correctly',()=>{
    const onSubmit=jest.fn();
    const history={push:jest.fn()}
    const wrapper=shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
    expect(wrapper).toMatchSnapshot()

})

test("should handl on submit",()=>{
    const onSubmit=jest.fn();
    const history={push:jest.fn()}
    const wrapper=shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
})