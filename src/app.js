import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter  from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store =configureStore();

store.dispatch(addExpense({
    description:'Water Bill',
    amount:4500,
    createdAt:10000,
    note:"first expense"
}));
store.dispatch(addExpense({
    description:'Coffee',
    amount:5000,
    createdAt:1000,
    note:"2nd expense"
}));
store.dispatch(addExpense({
    description:'Coffee', 
    amount:103443,
    createdAt:100,
    note:"3rd expense"
}));


const state=store.getState();
console.log(state);


const visibleExpenses=getVisibleExpenses(state.expenses,
    state.filters)
console.log( visibleExpenses); 



const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
 