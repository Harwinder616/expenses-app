import React from 'react';
import ExpenseForm from './ExpenseForm'
import {startaddExpense} from '../actions/expenses'
import {connect} from'react-redux'

const create =(props)=>{

    return(
        
        <div>
           
        
            <h1>Add Expense</h1>
            <ExpenseForm  onSubmit={(expense)=>{
                props.dispatch(startaddExpense(expense))
                props.history.push('/')
            }}/>
            
        
        </div>
    )
}


export default connect()(create);