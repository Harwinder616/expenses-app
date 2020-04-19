import React from 'react';
import{ Router, Route,Switch,Link,NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import create from '../comp/create';
import sagar from '../comp/sagar';
import edit from '../comp/edit';
import help from '../comp/help';
import error from '../comp/error';
import LoginPage from '../comp/login';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


export const history=createHistory()

const Routes=()=>{

return(
    
    <Router history={history}>
    <div>
    <Switch>
    <PublicRoute path="/" component={LoginPage} exact={true}/>
    <PrivateRoute path="/dashboard" component={sagar} />

    <PrivateRoute path="/create" component={create} />
    <PrivateRoute path="/edit/:id" component={edit} />
    <Route path="/help" component={help} />
    <Route component={error} />


    </Switch>
    </div>

    
    </Router>
)
}







export default Routes;

