import React, { Component } from 'react';
import TodoList from './TodoList';
import { Route, Switch } from 'react-router-dom';
import './CSS/App.css';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';


let todos = [
  {title : 'Todo 1', description : 'It is my Todod', isCompleted : false, id : uuid()},
  {title : 'Todo 2', description : 'It is my Todod', isCompleted : false, id : uuid()},
  {title : 'Todo 3', description : 'It is my Todod', isCompleted : false, id : uuid()}
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : todos
    }
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    this.getTodo = this.getTodo.bind(this);
  }
  handleCreateTodo(todo) {
    this.setState(st => ({
      todos : [...st.todos, todo]
    }))
  }
  handleDelete(id){
    this.setState(
      st => ({
        todos : st.todos.filter(todo => todo.id !== id)
      })
    )
  }
  handleTodoUpdate(todo) {
    this.setState(st => ({
      todos : st.todos.map(t => {
        if(t.id === todo.id) return todo;
        return t;
      })
    }))
  }
 getTodo(id) {
    return this.state.todos.filter(todo => todo.id === id)[0];
  }
  render() {
    return (
      <div className='main-container'>
        <Switch>
          <Route exact path='/' render={param => <TodoList todos = {this.state.todos} handleDelete={this.handleDelete} {...param}/>} />
          <Route exact path='/create-todo' render={param => <TodoForm handleCreateTodo={this.handleCreateTodo} {...param} getTodo={this.getTodo} handleTodoUpdate = {this.handleTodoUpdate}/>}/>
          <Route exact path='/create-todo/:id' render={param => <TodoForm handleCreateTodo={this.handleCreateTodo} {...param} getTodo={this.getTodo} handleTodoUpdate = {this.handleTodoUpdate}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;