import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './CSS/TodoForm.css'

export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
            id : uuid(),
            isCompleted : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let todo = {...this.state}
        if(this.props.match.params.id !== undefined) this.props.handleTodoUpdate(todo);
        else this.props.handleCreateTodo(todo)

        this.props.history.push('/');
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentDidMount(){
      let id = this.props.match.params.id;
      if(id !== undefined) {
        let todo = this.props.getTodo(id);
        if(todo === undefined) this.props.history.push('/create-todo');
        else this.setState({title : todo.title, description : todo.description, id : todo.id, isCompleted : todo.isCompleted})
      }
    }
  render() {
    return (
      <div className='todoform-container'>
        <h1 className='todolist-title'>Todo List..</h1>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input required type='text' id='title' name='title' placeholder='Todo Title' value={this.state.title} onChange={this.handleChange}/>
            <label htmlFor='description'>Description</label>
            <textarea required type='text' id='description' name='description' placeholder='Todo Title' value={this.state.description} onChange={this.handleChange}/>
            <button type='submit'>{this.props.match.params.id !== undefined ? 'Update Todo ...' : 'Create Todo!'}</button>
        </form>
      </div>
    )
  }
}
