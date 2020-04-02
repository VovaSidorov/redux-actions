import React from 'react';
import { connect } from 'react-redux'
import ToDo from './ToDo';
import {delTodo,toggleTodo} from './../../actions'

const ContainerToDoList = (props)=>{
    const {items} = props;
    return(
        <div>
              <ul>
           {items.map(item=> <ToDo id={item.id} text={item.text} completed={item.completed}
           delTodo={props.delTodo} toggleTodo={props.toggleTodo}/>)}
  </ul>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        items:state.items
    }
}

// const mapDispathToProps = (dispatch)=>{
//     console.log("MAPDISPATHTOPROPS",dispatch)
//     return {
//         delTodo:delTodo
//     }
// }

export default connect(mapStateToProps,{delTodo,toggleTodo})(ContainerToDoList);