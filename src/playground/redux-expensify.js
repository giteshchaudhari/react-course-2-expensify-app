import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
//Add expenses
const addExpense=(
    {
        description=' ',
        note=' ',
        amount=0,
        createdAt=0
    }={}
)=>{
    return {
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}
//Remove expense

const removeExpense=({id }={})=>({
    type: 'REMOVE_EXPENSE',
    expense:{
        id
    }
})

//EditExpense 
const editExpense=((id,updates)=>{
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
})


//filter function generator

const setTextFilter=(text='')=>{
    return{
        type:'SET_TEXT_FILTER',
        text
    }
}
 
const sortByAmount=()=>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}

const sortByDate=()=>{
    return {
        type:'SORT_BY_DATE'
    }
}


const setStartDate=(date=undefined)=>{
    return {
        type:'SET_START_DATE',
        date
    }
}
const setEndDate=(date=undefined)=>{
    return {
        type:'SET_END_DATE',
        date
    }
}
//expenses reducer

const expenseReducerDefaultState=[]
const expenseReducer=(state=expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]  ; 
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{   
                    return id!==action.expense.id;
            })
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id===action.id){
                        return {
                            ...expense,
                            ...action.update
                        }
                }
                else{
                        return expense;
                }})
        default:
            return state;
    }
};

//filter reducers

const filtersReducersDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filtersReducer=(state=filtersReducersDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return  {
                ...state,
                text:action.text
                    };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.date
            }
        default:
            return state;
    }
};

const  getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
        return expenses.filter((expense)=>{
            const startDateMatch=typeof startDate !=='number'||expense.createdAt>=startDate;
            const endDateMatch =typeof endDate!=='number'|| expense.createdAt<=endDate;
            const textMatch= expense.description.toLowerCase().includes(text.toLowerCase()) ;

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if (sortBy==='date'){
                return a.createdAt<b.createdAt? 1 :-1;
            }
            else if (sortBy==='amount'){
                return a.amount<b.amount?1:-1;
            }
        })
};



//store creation
const store =createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state=store.getState()
    const visibleExpenses=getVisibleExpenses(state.expenses,
        state.filters)
    console.log(visibleExpenses);
})

const expenseone=store.dispatch(addExpense({
    description:'rent',
    amount:100,
    createdAt:100
}));
const expensetwo=store.dispatch(addExpense({
    description:'Coffee',
    amount:5000,
    createdAt:-1000
}));


store.dispatch(removeExpense({
    id:expenseone.expense.id
}))

//store.dispatch(setTextFilter('fe'));
// store.dispatch(setTextFilter('home'));

store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState={
    expenses:[{
        id:'dssff',
        description:'jan rent',
        note:'nbnfnk jfnf; .skn,,skbjnwlnlkmwb',
        amount:454323,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//or date,
        startDate:undefined,
        endDate:undefined
    }
};













