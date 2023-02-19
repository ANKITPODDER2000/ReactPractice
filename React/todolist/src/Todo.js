import React, { Component } from 'react';
import './CSS/Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
  }
  handleDelete(){
    this.props.handleDelete(this.props.todo.id);
  }
  handleView(){
    const redirect_url = `/create-todo/${this.props.todo.id}`;
    this.props.history.push(redirect_url);
  }
  render() {
    return (
      <div className='todo-container'>
        <p className='todo-title'>{this.props.todo.title}</p>
        <div className='todoicon-container'>
            <i className="fas fa-pencil-alt" onClick={this.handleView}></i>
            <i className="fas fa-trash" onClick={this.handleDelete}></i>
            <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    )
  }
}
