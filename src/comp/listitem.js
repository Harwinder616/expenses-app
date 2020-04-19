import React from 'react';
import numeral from 'numeral';

import {Link} from 'react-router-dom';
import moment from 'moment';
const ExpenseListItem=({ id, description, amount, createdAt })=>{
    
    return(


    <div>


<Link to={`/edit/${id}`}><h3>{description}</h3></Link> 
<p>
  
{numeral(amount).format('$0,0.00')}
-->
{moment(createdAt).format('MMMM Do, YYYY')}
</p>



    
    </div>)
}
export default ExpenseListItem


/*import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
*/