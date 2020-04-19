import moment from 'moment'

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const createdAtmoment=moment(expense.createdAt);

        const start=startDate?startDate.isSameOrBefore(createdAtmoment,'day'):true;
        const end=endDate?endDate.isSameOrAfter(createdAtmoment,'day'):true;
    
        const textmatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return start&&end&&textmatch;
        
    }).sort((a,b)=>{
if(sortBy==='date')
        return (a.date<b.date?1:-1)
        else if(sortBy==='amount')
        return (a.amount<b.amount?1:-1)
    });
}
export default getVisibleExpenses;



// Get visible expenses

/*export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};


*/