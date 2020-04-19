

/*class  ExpenseListfilters extends React.Component{
    state={
        calenderfocused:null
    }
    onDatesChange=(startDate,endDate)=>{
      this.props.dispatch(Startdate(startDate));
      this.props.dispatch(Enddate(endDate));



    }
    onFocusChange=(calenderfocused)=>{
        this.setState(()=>
        {

            return{
                calenderfocused
            }
        }
        
        )
    }
    render()
    {return(

        <div><input type="text" value={this.props.filters.text} onChange={(e)=>{
           this. props.dispatch(changeText(e.target.value))
        }} />
        <select value={this.props.filters.sortBy}
         onChange={(e)=>{if(e.target.value==='date')
            this.props.dispatch(sortbyDate());
            else if(e.target.value==='amount')
            this.props.dispatch(sortbyAmount())}}>
        
                <option value="date">Date</option>
                <option value="amount">amount</option>
            </select>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
            
            
      
        />
        </div>
        
            )

    }
}

const convert=(state)=>{
    
        
    return {
        filters:state.filters
    }
}



const Connectedlist= connect(convert)(ExpenseListfilters);
export default Connectedlist;*/
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {  sortbyDate, sortbyAmount, Startdate, Enddate, changeText } from '../actions/filters';
import {  totalExpense} from '../actions/expenses';


class ExpenseListfilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(Startdate(startDate));
    this.props.dispatch(Enddate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  

  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(changeText(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortbyDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortbyAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
       
      </div>
    );
  }
};

const convert=(state)=>{
    
        
    return {
        filters:state.filters
    }
}



const Connectedlist= connect(convert)(ExpenseListfilters);
export default Connectedlist;
