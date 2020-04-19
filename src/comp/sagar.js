import React from 'react';
import ConnectedExpenselist from './headerlist';
import Connectedlist from './expenseListfilter'
import ExpensesSummary from './ExpenseSummary'

const sagar =()=>{
    return(
        <div>
            <ExpensesSummary />
            
            <Connectedlist />
            <ConnectedExpenselist />
        </div>
    )
}
export default sagar;