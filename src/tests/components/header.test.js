import React from 'react';
import {Header} from './../../component/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';

test('shoild render header',()=>{
const wrapper=shallow(<Header startLogOut={()=>{}}/>);
expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click',()=>{
    const startLogOut=jest.fn();
    const wrapper=shallow(<Header startLogOut={startLogOut}/>);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled()
})


