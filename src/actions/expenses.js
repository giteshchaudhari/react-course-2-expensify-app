import uuid from 'uuid';
import database from '../firebase/firebase';
//only redux
//component calls action generator
//action generator returns object
//component dispatches object
// redux store changes

//redux+firebase
//component calls action generator
//action generator returns function
//component dispatches function
//function runs (has the ability to dispatch other actions and do whatever it wants)


export const addExpense=(expense)=>{
    return {
        type:'ADD_EXPENSE',
        expense
    }   
}  
 
export const startAddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const {
            description=' ',
            note=' ',
            amount=0,
            createdAt=0
        }=expenseData;
        const expense={description,note,amount,createdAt};

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
    };
};

 
export const removeExpense=({id }={})=>({
    type: 'REMOVE_EXPENSE',
    id
})
export const startRemoveExpense=({id}={})=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        })
    }
}
export const editExpense=((id,updates)=>{
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
})

export const startEditExpense=(id,updates)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates))
        })
    }
}



export const setExpenses=(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})
//export const startSetExpenses
export const startSetExpenses=()=>{
    return (dispatch,getState)=>
    {
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
                const expenses=[]

                snapshot.forEach((childsnapshot)=>{
                    expenses.push({
                        id:childsnapshot.key,
                        ...childsnapshot.val()
                    })
                })
                dispatch(setExpenses(expenses))
            })
    }
}