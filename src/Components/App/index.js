import React from 'react';
import ContainerAddToDo from './../AddTodo/ContainerAddToDo';
import ContainerFooter from './../Footer/ContainerFooter';
import VisibleToDoList from "../ToDoList/VisibleToDoList";

const App = () => {
    return (
        <div>
            <ContainerAddToDo/>
            <VisibleToDoList/>
            <ContainerFooter/>
        </div>
    )
}
export default App;