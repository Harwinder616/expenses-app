export const changeText=(text='')=>{
    return{
        type:'CHANGE_TEXT',
        
            text
        

    }
}



export const sortbyAmount=()=>{
    return{
        type:'SA'
        
        
        }
}


export const sortbyDate=()=>{
    return{
        type:'SD'
        
        
        

    }
}

export const Startdate=(date=undefined)=>{
    return{
        type:'Start',
        date
        
        
        

    }
}

export const Enddate=(date=undefined)=>{
    return{
        type:'End',
        date
        
        
        

    }
}

