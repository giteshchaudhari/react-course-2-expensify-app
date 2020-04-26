import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesAmountTotal from './ExpensesTotal';


const ExpenseDashboardPage=()=>(
    <div>
        <ExpensesAmountTotal/>
        <ExpenseListFilters/>
        <ExpenseList/>
       
    </div>
);

export default ExpenseDashboardPage;