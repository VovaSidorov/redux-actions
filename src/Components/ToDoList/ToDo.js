import React from 'react';

const ToDo=(props)=>{
     console.log("TODO",props);
     let onDeleteUser = (userId) => {
          alert(userId);
           props.delTodo(userId);
        };

return(
<li key={props.id}>
{props.text}
<button onClick={()=>onDeleteUser(props.id)}>del{props.id}</button>
     </li>
)
}
export default ToDo;
