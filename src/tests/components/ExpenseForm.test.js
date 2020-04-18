import React from 'react';
import ExpenseForm from './../../component/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from './../fixtures/expenses';
import moment from 'moment';
test('should render expense form ',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form ',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot()
})

test ('shouldd render error',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
})

test('should render for data change',()=>{
    const value="123243rtrew";
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change',{
    target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should render for note change',()=>{
    const value="123243rtrew";
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change',{
    target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should render for amount change',()=>{
    const value='12.34';
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
    target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should render for  negative amount change',()=>{
    const value='12.231234233';
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
    target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test ('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn()
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}
        onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount*100,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
})

test('should state new date',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    const now=moment()
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})


test('should state calendarfocused',()=>{
    const wrapper=shallow(<ExpenseForm/>)
    const focused=true
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarfocused')).toEqual(focused);
})