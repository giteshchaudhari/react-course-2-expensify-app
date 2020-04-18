import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('should setup default values',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
    })
})

test('should setup sort by amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount')
})

test('should setup sort by date',()=>{
    const curstate={
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
    }
    const state=filtersReducer(curstate,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date')
})

test('should setup text filter',()=>{
    const curstate={
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
    }
    const state=filtersReducer(curstate,
        {
            type:'SET_TEXT_FILTER',
            text:"rajesh"
        }
    );
    expect(state.text).toEqual('rajesh')
})

test('should setup startdate',()=>{
    const state=filtersReducer(undefined,
        {
            type:'SET_START_DATE',
            date:moment(0)
        }
    );
    expect(state.startDate).toEqual(moment(0))
})

test('should setup endDate',()=>{
    const state=filtersReducer(undefined,
        {
            type:'SET_END_DATE',
            date:moment(0)
        }
    );
    expect(state.endDate).toEqual(moment(0))
})