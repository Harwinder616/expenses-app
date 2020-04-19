import { createStore } from 'redux';

const increment=({incrementBy=1}={})=>{
return{
type:'INCREMENT',
incrementBy:incrementBy}

}
const decrement=({decrementBy=1}={})=>{
    return{
    type:'DECREMENT',
    decrementBy:decrementBy}
    
    }
    const reset=()=>{
        return{
        type:'RESET',
        }
        
        }

        const reducers=(state={count:0},action)=>{
    
            if (action.type === 'INCREMENT'){
            
        return {count:state.count+action.incrementBy}}
        else if (action.type === 'DECREMENT'){const decrease=typeof action.decrementBy==='number'?action.decrementBy:1;
            
            return {count:state.count-decrease}}
            else if (action.type === 'RESET'){
            
                return {count:0}}
        
            else{
            return state;
        }
        }

const  store=createStore(reducers);

store.subscribe(()=>{console.log(store.getState());

}
)
store.dispatch(increment({incrementBy:8}));
store.dispatch(decrement({decrementBy:4}));
store.dispatch(reset());


