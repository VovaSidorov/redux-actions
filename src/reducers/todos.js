const initialState = [
    {id: 1, text: "First Action", completed: false},
    {id: 2, text: "First 2", completed: false},
    {id: 3, text: "First Acti3on", completed: false}
]
const todos = (state = initialState, action) => {
    console.log("TODOS_STATE", state);
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'DEL_TODO':
            return [...state.filter(item => item.id !== action.userId)]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }

}

export default todos