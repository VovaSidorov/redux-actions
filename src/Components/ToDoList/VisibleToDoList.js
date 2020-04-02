import {connect} from 'react-redux'
import {toggleTodo} from "../../actions";
import ContainerToDoList from "./ContainerToDoList";
import {VisibilityFilters} from "../../actions";

const getVisibleTodos = (items, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return items
        case VisibilityFilters.SHOW_COMPLETED:
            return items.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return items.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    items: getVisibleTodos(state.items, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerToDoList)