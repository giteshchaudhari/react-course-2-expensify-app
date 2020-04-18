import {createStore} from 'redux';
const incrementcount=({incrementBy=1}={})=>{
    return {
        type:'INCREMENT',
        incrementBy
    }
}

const decrementcount=({decrementBy=1}={})=>{
    return {
        type:'DECREMENT',
        decrementBy
    }
}
const setcount=({count=0}={})=>{
    return {
        type:'SET',
        count
    }
}
const resetcount=()=>{
    return {
        type:'RESET'
    }
}
//reducers
//reducerss are pure function

const countreducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
            count:state.count+action.incrementBy
        };
        case 'DECREMENT':
            return{
            count:state.count-action.decrementBy
        };
        case 'RESET':return{
            count:0
        };
        case 'SET':return{
            count:action.count
        };
        default:
            return state;
    } 
}
const store=createStore(countreducer);

const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(incrementcount({incrementBy:5}));
store.dispatch(incrementcount()); 
store.dispatch(resetcount());
store.dispatch(decrementcount({decrementBy:6}));
store.dispatch(setcount({count:11}));