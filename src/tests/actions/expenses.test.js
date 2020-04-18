import {addExpense,removeExpense,editExpense} from './../../actions/expenses';
import uuid from 'uuid';

test('should set up remove',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
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
    const obj={
        description:'hello there',
        note:'abcdefgh',
        amount:1234,
        createdAt:1234
    }
    const rs=addExpense(obj);
    expect(rs).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'hello there',
            note:'abcdefgh',
            amount:1234,
            createdAt:1234
        }
    })
})