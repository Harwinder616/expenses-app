import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

const Header =(props)=>{
    return(<div>
       <h1>expensify</h1>
       <NavLink to="/" activeClassName="isactive" exact={true}>dashboard </NavLink>
       <NavLink to="/create" activeClassName="isactive">create expense </NavLink>
       <button onClick={()=>{props.dispatch(startLogout())

       }}>Logout</button>       
       </div>

       

    )
}
export default connect()(Header)