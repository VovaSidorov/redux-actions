import React from 'react';
import ContainerAddToDo from './../AddTodo/ContainerAddToDo';
import ContainerToDoList from './../ToDoList/ContainerToDoList';
import ContainerFooter from './../Footer/ContainerFooter';
const App = ()=>{
    return(
        <div>
         <ContainerAddToDo/>
         <ContainerToDoList/>
         <ContainerFooter/>
         </div>
    )
}
export default App;