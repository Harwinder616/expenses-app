import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './listitem';
import getVisibleExpenses from '../selectors/expenses'

const Expenselist=(props)=>{return(
    <div>
        {props.expenses.length==0?<h2>no expenses</h2>:<h1>expense List</h1>
}
    

       
        {props.expenses.map((expense)=>
            {
                return <ExpenseListItem key={expense.id} {...expense} />
            })}
    </div>
)
}
const convert=(state)=>{
    
        
            return {
                expenses:getVisibleExpenses(state.expenses, state.filters)
            }
        }
    


const ConnectedExpenselist= connect(convert)(Expenselist);
export default ConnectedExpenselist;

