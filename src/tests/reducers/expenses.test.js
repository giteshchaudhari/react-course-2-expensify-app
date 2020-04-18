import expenseReducer from './../../reducers/expenses';

const state=[
    {
        id:'1',
        description:'Bun',
        note:'jh',
        amount:234,
        createdAt:0
    },
    {
        id:'2',
        description:'raj',
        note:'ew',
        amount:23,
        createdAt:0
    },
    {
        id:'3',
        description:'sdfxc',
        note:'4efw',
        amount:4323,
        createdAt:0
    }
]

test("should add expense",()=>{
    const action={
        type:'ADD_EXPENSE',
        expense:{
            description:'guj',
            note:'sdac',
            amount:2132,
            createdAt:0,
            id:expect.any(String)
        }
        
    }
    const res=expenseReducer(state,action);
    expect(res).toEqual([...state,action.expense])
})

test ('should remove expense',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'2'
    }
    const res=expenseReducer(state,action);
    expect(res).toEqual([state[0],state[2]])
})

test("should edit expense",()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'2',
        updates:{
            description:'guj',
            note:'sdac',
            amount:2132,
            createdAt:0,
        }
        
    }
    const res=expenseReducer(state,action);
    expect(res).toEqual([state[0],{
        description:'guj',
        note:'sdac',
        amount:2132,
        createdAt:0,
        id:'2'
    },state[2]])
})