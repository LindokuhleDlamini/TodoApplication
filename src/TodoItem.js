import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.todo.id,
            title: this.props.todo.title,
            completed: this.props.todo.completed,
        }
    }

    handleComplete() {
        this.props.actions.completeTodo(this.state.id);

        this.setState({
            completed: !this.state.completed
        });
    }

    handleDelete() {
        this.props.actions.deleteTodo(this.state.id);
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });

        this.props.actions.editTodo(this.state.id, this.state.title);
    }

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    defaultChecked={this.state.completed}
                    required={true}
                    onClick={this.handleComplete.bind(this)}
                />
                <input
                    type="text"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                    required={true}
                />
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
            </li>
        );
    }
}

export default TodoItem;
