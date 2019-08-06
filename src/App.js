import React, { Component } from 'react';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions.js';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
