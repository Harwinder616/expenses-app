import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now=moment();
console.log(now.format('MMM Do'))
export default class ExpenseForm extends React.Component{
    constructor(props){

        super(props);
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?((props.expense.amount)).toString():'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calenderfocused:false,
            error:''
        }

    }
    
    onDateChange=(createdAt)=>{
        this.setState(()=>{
            return{
                createdAt
            }
        })
    }
    onFocusChange=({focused})=>{
        this.setState(()=>{
            return{
                calenderfocused:focused
            }
        })
    }
    onSubmit=(e)=>{e.preventDefault();
        if(!this.state.description||!this.state.amount)
        {
            let error='please enter some info';
            this.setState(()=>{return{

         error:error}

            })
        }
        else
        { this.setState(()=>{return{

            error:''}
        
   
               })
               this.props.onSubmit({
                   description:this.state.description,
                   amount:parseFloat(this.state.amount,10),
                   createdAt:this.state.createdAt.valueOf(),
                   note:this.state.note
               })
            
        }
    }
    render(){return(
        <div>
            {this.state.error&&<p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="description" autoFocus value={this.state.description} onChange={(e)=>{
                const description=e.target.value;
                this.setState(()=>{
                    return{description:description

                    }
                })
            }}></input>
            <input type="text" placeholder="amount" value={this.state.amount} onChange={(e)=>{
                const amount=e.target.value;
                if (!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
                this.setState(()=>{
                    return{amount

                    }
                })}
            }}></input>
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderfocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false} />
            <textarea placeholder="add data to your expense"  value={this.state.note} onChange={(e)=>{
                const note=e.target.value;
                this.setState(()=>{
                    return{note

                    }
                })
            }}></textarea>
            <button>add expense</button>

            </form>
        </div>)

    }
}