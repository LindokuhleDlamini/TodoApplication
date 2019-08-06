import React, { Component } from 'react';

class TodoInput extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title:''
        }
    }

    handleTitleChange (event) {
        var newTitle = event.target.value;
        this.setState({
            title: newTitle
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        
        if(this.state.title !=='') {
            this.props.addTodo(this.state.title);

            this.setState({
                title: ''
            });
        }

    }

    render() {
        return (
            <div >
                <div >
                    <input
                        type="text"
                        placeholder="title.."
                        required={true}
                        value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)}
                    />
                </div>
                <div>
                    <button onClick={this.handleSubmit.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoInput;
