import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesAmountTotal } from '../../component/ExpensesTotal';

test('should correctly render ExpensesAmountTotal with 1 expense', () => {
  const wrapper = shallow(<ExpensesAmountTotal expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesAmountTotal with multiple expenses', () => {
  const wrapper = shallow(<ExpensesAmountTotal expenseCount={23} expensesTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});
