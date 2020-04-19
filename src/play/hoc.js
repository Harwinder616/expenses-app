import React from 'react';

import ReactDOM from 'react-dom';
const Info=(props)=>{

return(<div>
<h1>info</h1>
<p>the info is:{props.info}</p>


</div>


    


)



}

const withAdminwarning=(Wrapped)=>{


    return(props)=>(
        <div>
            {props.isAdmin||<p>not allowed</p>}
            {props.isAdmin&& <Wrapped {...props} />}
           

        </div>

    )

    
}

const Admin=withAdminwarning(Info);
ReactDOM.render(<Admin isAdmin={true} info='there are the details' />,document.getElementById('app2'));