const array=[];
const expensesReducer=(state=array,action)=>{
    if(action.type==='ADD_EXPENSE')
    return  [
        ...state,
        action.expense
      ];
    else if(action.type==='REMOVE_EXPENSE')
    return state.filter((expense)=>{
    return expense.id!==action.id})
    else if(action.type==='SET_EXPENSE')
    {

        return action.expenses
    }
   

    else if(action.type==='CHANGE_EXPENSE')
    {
        return state.map((expense)=>{

            if(expense.id===action.id)
            {
                return {
                    ...expense,...action.updates
                }
            }
            else
            return expense;
        })
    }
    
  else  return state;
}
export default expensesReducer;
