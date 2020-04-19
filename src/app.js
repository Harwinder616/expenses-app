import React from 'react';
import {login,logout} from './actions/auth.js'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import Routes,{history} from './router/approuter';
import './styles/styles.scss'
import store from './store/configstore.js';
import 'normalize.css/normalize.css';
import {startsetExpenses }from './actions/expenses';
import {firebase} from './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';

const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)

let state=false;
const changed=()=>{
    if(!state)
    {
   
        ReactDOM.render(jsx,document.getElementById('app2'));
        state=true;

    }
    }
ReactDOM.render(<p>loading...</p>,document.getElementById('app2'));






firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    { store.dispatch(login(user.uid))
        store.dispatch(startsetExpenses()).then(()=>{
        changed();
        if(history.location.pathname==='/')
        {history.push('/dashboard')}
        console.log('log in')

    })}
        else
    {store.dispatch(logout())
        console.log('logout')
    changed()

    history.push('/')}
})


   
