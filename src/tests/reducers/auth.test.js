import authReducer from './../../reducers/auth';
import { act } from 'react-test-renderer';

test('should set uid for login',()=>{
    const action={
        type:'LOGIN',
        uid:'123er'
    }
    const state=authReducer({},action);
    expect(state.uid).toBe(action.uid);
})


test('should clear uid for logout',()=>{
    const action={
        type:'LOGOUT'
    }
    const state=authReducer({uid:'sddf432'},action);
    expect(state).toEqual({});
    
})