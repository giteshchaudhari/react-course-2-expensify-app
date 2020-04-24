import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startRemoveExpense,startSetExpenses,setExpenses,addExpense,startAddExpense,removeExpense,editExpense} from './../../actions/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore=configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id]={description,note,amount,createdAt};
    })
    database.ref('expenses').set(expensesData).then(()=>done())
});


test('should set up remove',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('should remove from firebase',(done)=>{
    const store=createMockStore({});
    const id=expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const action=store.getActions();
        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })

})

test('My test',()=>{
    const result=editExpense('12345',{note:'new note'});
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'12345',
        updates:{
            note:'new note'
        }
    })
})

test('what we passed',()=>{
    const rs=addExpense(expenses[2]);
    expect(rs).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
})

test('should add expensse to database and store',(done)=>{
    const store=createMockStore({});
    const expensedata={
        description:'kjfk',
        amount:23243,
        note:'sdf',
        createdAt:3243
    }
    store.dispatch(startAddExpense(expensedata)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expensedata
            }
        });
        database.ref(`expenses/${actions[0].expense.id}`).once('value')
        .then((snapShot)=>{
            expect(snapShot.val()).toEqual(expensedata);
            done();
        });

    });
});



test('should set setexpenses object',()=>{
    const action=setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})


test('should fetch thee expenses from firebase',()=>{
    const store=createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions=store.getActions()
        expect(action[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    })
})