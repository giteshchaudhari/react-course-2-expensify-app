import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesAmountTotal=({expenseCount,ExpenseTotal})=>{
    const expenseWord=expenseCount===1?'expense' : 'expenses';
    const formatExpensesTotal=numeral(ExpenseTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formatExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters);
    return{
        expenseCount:visibleExpenses.length,
        ExpenseTotal:ExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesAmountTotal);