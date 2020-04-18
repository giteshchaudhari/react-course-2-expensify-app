import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './../../actions/filters';
import moment from 'moment';

test('should gen set start',()=>{
    const action=setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
});

test('should gen end date',()=>{
    const action=setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
});

test('text filter default',()=>{
    const result=setTextFilter();
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('text filter',()=>{
    const result=setTextFilter("rajesh");
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rajesh'
    })
})

test("sort by date",()=>{
    const res=sortByDate();
    expect(res).toEqual({
        type:'SORT_BY_DATE'
    })
})

test("sort by amount",()=>{
    const res=sortByAmount();
    expect(res).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})