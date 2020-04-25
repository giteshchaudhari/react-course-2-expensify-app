import {login,logout} from './../../actions/auth';

test('should generate login action',()=>{
    const action=login('ssdv');
    expect(action).toEqual({
        type:'LOGIN',
        uid :'ssdv'
    })
})


test('should generate logout action',()=>{
    const action=logout();
    expect(action).toEqual({
        type:'LOGOUT'
    })
})