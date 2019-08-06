import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todos.map((todo) => {
                    if(!todo.completed) {
                        return (
                            <TodoItem key={todo.id} todo={todo} actions={props.actions} />
                        );
                    }
                })
            }
        </ul>
    );
}

export default TodoList;
