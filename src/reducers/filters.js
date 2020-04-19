import moment from 'moment'
const filterstate={ text:'',
sortBy:'date',

startDate:moment().startOf('month'),
endDate:moment().endOf('month')


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
export default  filtersReducers;