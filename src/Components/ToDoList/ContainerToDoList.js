import React from 'react';
import {connect} from 'react-redux'
import ToDo from './ToDo';
import {delTodo, toggleTodo} from './../../actions'

const ContainerToDoList = (props) => {
    console.log("PRRRRROPS", props)
    const {todos} = props;
    return (
        <div>
            <ul>
                {todos.map(item => <ToDo id={item.id} text={item.text} completed={item.completed}
                                         delTodo={props.delTodo} toggleTodo={props.toggleTodo}/>)}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {delTodo, toggleTodo})(ContainerToDoList);