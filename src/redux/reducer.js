import { ADD, EDIT, DELETE, COMPLETE} from './actionNames'

let initialState = {
    todos: []
  }

let reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                todos: [...state.todos, {
                    title:action.title,
                    completed: false,
                    id: getId(state)
                }]
            });

        case EDIT:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return todo.id === action.id ?
                    Object.assign({}, todo, {title: action.title}) :
                    todo
                })
            })

        case COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return todo.id === action.id ?
                    Object.assign({}, todo, {Updated: false, completed: !todo.completed}) :
                    todo
                })
            });
        
        case DELETE:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id
                })
            });

        default:
            return state;
    }
}

function getId(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1;
}

export default reducer;
