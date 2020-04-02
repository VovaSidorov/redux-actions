import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from './../../actions'

const ContainerAddToDo = (props)=>{
    let input
    console.log(props);
    return(
        <div>
        <div>
        <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node}/>
        <button >
          Add Todo
        </button>
      </form>
       </div>
        </div>
    )
}

export default connect()(ContainerAddToDo)