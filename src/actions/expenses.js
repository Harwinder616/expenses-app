
import database from '../firebase/firebase'

export const addExpense=(expense)=>{
    return{
        type:'ADD_EXPENSE',
        expense
    }
}
export const startaddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const{description='',
        amount=0,
        note='',
        createdAt=0}=expenseData
        const expense={description,amount,note,createdAt}
        return database.ref('users/'+uid+'/expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,...expense
            }))
        })
    }
    
}


export const changeExpense=(id,updates)=>{
    return {type:'CHANGE_EXPENSE',
        id,
        updates
    }
}

export const startchangeExpense=(id,updates)=>{
    return (dispatch,getState)=>{        const uid=getState().auth.uid;

        return database.ref('users/'+uid+'/expenses/'+id).update(updates).then(()=>{
            dispatch (changeExpense(id,updates))
        })

        }
    }



export const totalExpense=()=>{
    return {
        type:'TOTAL_EXPENSE'
    }
}
export const removeExpense=({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
    id:id

    }
}

export const startremoveExpense=({id}={})=>{

    return (dispatch,getState)=>{ const uid=getState().auth.uid;
        return database.ref('users/'+uid+'/expenses/'+id).remove().then(()=>{
            dispatch(removeExpense({id}))

        })

    }


}

export const setexpenses=(expenses)=>{

return{
    type:'SET_EXPENSE',
    expenses
}

}

 export const startsetExpenses=()=>{
    return(dispatch,getState)=>{ const uid=getState().auth.uid;
   return database.ref('users/'+uid+'/expenses').once('value').then((snapshot)=>{
        const expenses=[];
        snapshot.forEach((child)=>{console.log(child.val())
          expenses.push({
            id:child.key,
            ...child.val()
          })
    
        })
        dispatch(setexpenses(expenses))
      })
    }
    
}
