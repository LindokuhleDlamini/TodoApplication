import { ADD, EDIT, DELETE, COMPLETE} from './actionNames'

let actions= {
    addTodo: (title) => {

        return {
            type: ADD,
            title
        };
    },

    completeTodo: (id) => {
        return {
            type: COMPLETE,
            id
        };
    },

    deleteTodo: (id) => {
        return {
            type: DELETE,
            id
        };
    },

    editTodo: (id, title) => {
        return {
            type: EDIT,
            id,
            title
        }
    }

}

export default actions;
