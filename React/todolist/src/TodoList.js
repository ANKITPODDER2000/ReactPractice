import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './CSS/TodoList.css'
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <div className='todolist-container'>
        <h1 className='todolist-title'>Todo List..</h1>
        <div className='todos-container'>
          {this.props.todos.map(todo => <Todo key={todo.id} todo = {todo} handleDelete = {this.props.handleDelete} history = {this.props.history}/>)} 
        </div>
        <Link to='/create-todo'>Create a New Todo <i className="fas fa-plus-circle"></i></Link>
      </div>
    )
  }
}
