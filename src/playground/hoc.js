//Higher Order Component (HOC)->A component (HOC) that randers another component
//Reause code
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>(
        <div>
            <h1>Info</h1>
            <p>The info is :{props.info}</p>
        </div>
    )    

const withAdminWarning=(WappedComponent)=>{
        return (props)=>(
            <div>
                {props.isAdmin && <p>This is private info. Please dont share</p>}
                <WappedComponent {...props}/>
            </div>
            )
};
const requireAuthentication=(Component)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? (<Component {...props}/>):
            (<p>Please login first</p>)
               }
        </div>
    )
}
const AdminInfo = withAdminWarning(Info); 
const AuthInfo=requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={!false} info={"Thse are details"}/> ,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={!false} info="Thse are details"/> ,document.getElementById('app'))