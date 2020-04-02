import React from 'react';

const ToDo=(props)=>{
     console.log("TODO",props);

return(
<li key={props.id} onClick={()=>props.toggleTodo(props.id)}
    style={{
     textDecoration: props.completed ? 'line-through' : 'none'
   }} >
{props.text}
<button onClick={()=>props.delTodo(props.id)}>del{props.id}</button>
     </li>
)
}
export default ToDo;
