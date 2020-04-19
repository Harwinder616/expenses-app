import { createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense=({description='',amount=0,note='',createdAt=0}={})=>{
    return{
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description:description,
            amount:amount,
            note:note,

            createdAt:createdAt
        }
    }
}

const changeExpense=(id,updates)=>{
    return {type:'CHANGE_EXPENSE',
        id,
        updates
    }
}
const removeExpense=({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
    id:id

    }
}
const check=()=>{
    return{
        type:'check',
  

    }
}

const changeText=(text='')=>{
    return{
        type:'CHANGE_TEXT',
        
            text
        

    }
}



const sortbyAmount=()=>{
    return{
        type:'SA'
        
        
        }
}


const sortbyDate=()=>{
    return{
        type:'SD'
        
        
        

    }
}

const Startdate=(date=undefined)=>{
    return{
        type:'Start',
        date
        
        
        

    }
}

const Enddate=(date=undefined)=>{
    return{
        type:'End',
        date
        
        
        

    }
}


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
    else if(action.type==='check')
    return state.expense.length
        
    
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
const filterstate={ text:'',
sortBy:'amount',

startDate:undefined,
endDate:undefined


}
const filtersReducers=(state=filterstate,action)=>{
    if(action.type==='CHANGE_TEXT')
    {
       return {...state,text:action.text}
    }
    if(action.type==='SA')
    {
       return {...state,sortBy:'amount'}
    }
    if(action.type==='SD')
    {
       return {...state,sortBy:'date'}
    }
    if(action.type==='Start')
    {
       return {...state,startDate:action.date}
    }
    if(action.type==='End')
    {
       return {...state,endDate:action.date}
    }
    else
    return state;

}

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{

        const start=typeof startDate!=='number'||expense.createdAt>=startDate;
        const end=typeof endDate!=='number'||expense.createdAt<=endDate;
        const textmatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return start&&end&&textmatch;
        
    }).sort((a,b)=>{
if(sortBy==='amount')
        return (a.amount>b.amount?1:-1)
    });
}
const store=createStore(combineReducers({   
    expenses:expensesReducer,
    filters:filtersReducers
}

))
store.subscribe(()=>{
    const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);})
    const one=store.dispatch(addExpense({description:'sagar-karan',amount:500000,createdAt:-100000}));
    const two=store.dispatch(addExpense({description:'saga',amount:5000,createdAt:-1000}));
    store.dispatch(check());
   /* store.dispatch(changeExpense(two.expense.id,{amount:5080}));*/
   //store.dispatch(changeText( '-'));
    //store.dispatch(Startdate(0));
    //store.dispatch(Enddate(999))

   /*store.dispatch(sortbyAmount( ))*/
   // store.dispatch(sortbyDate())

//store.dispatch(removeExpense({id:one.expense.id}));
    
    
    const demoState={
expenses:[
    {

id:'id',
description:'jan rent',
note:'this was the final payment',
amount:566,
createdAt:0

    }
],

filters:{
    text:'sagar',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined

}

    }