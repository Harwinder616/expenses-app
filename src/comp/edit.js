import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startchangeExpense,startremoveExpense} from '../actions/expenses';

const edit =(props)=>{
    console.log(props.expense)

    return(
        <div>
            <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
                console.log(expenses)
                
               props.dispatch(startchangeExpense(props.expense.id,expense));
               props.history.push('/')
               
            }}/>
            <button onClick={()=>{


props.dispatch(startremoveExpense({ id:props.expense.id }));
props.history.push('/')

}}>Remove</button>
        </div>
    )
}

const convert=(state,props)=>{
    return{

        expense:state.expenses.find((expense)=>{if(expense.id===props.match.params.id )
            console.log('true');
            else
            console.log('false');
            return expense.id===props.match.params.id 
        })
    }
}

export default connect(convert)(edit)