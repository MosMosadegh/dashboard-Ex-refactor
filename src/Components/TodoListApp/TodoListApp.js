import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";
import {AiOutlinePlusCircle} from 'react-icons/ai'

import './TodoListApp.css'

export default class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.todoTitleHandler = this.todoTitleHandler.bind(this);
    this.statusHandler = this.statusHandler.bind(this);
  }
  todoTitleHandler(event) {
    this.setState({ todoTitle: event.target.value });
  }

  addTodo(event) {
    event.preventDefault();
    let newTodo = {
      id: this.state.todos.length + 1,
      title: this.state.todoTitle,
      completed: false,
    };
    this.setState(prevState=>{
        return{ 
            todos: [...prevState.todos, newTodo], 
            todoTitle: ""
         }
  })
}
  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos,
    });

    this.setState({
      todos: newTodos,
    });
  }
  editTodo(id) {
    let newTodos = [...this.state.todos];
    newTodos.forEach((element) => {
      if (element.id === id) {
        element.completed = !element.completed;
      }
    });

    this.setState({
      todos: newTodos,
    });
  }

  statusHandler(event) {
    let statusValue = event.target.value;
    this.setState({
      status: statusValue,
    });
  }

  render() {
    return (
      <div className="bodyTodo">
        <Header />
        <form onSubmit={(event) => this.addTodo(event)}>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            onChange={(event) => this.todoTitleHandler(event)}
            value={this.state.todoTitle}
          />
          <button className="todo-button" type="submit">
            <AiOutlinePlusCircle/>
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={this.statusHandler}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.status === "completed" &&
              this.state.todos
                .filter((item) => item.completed)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onRemove={this.removeTodo}
                    onEdit={this.editTodo}
                  />
                ))}
            {this.state.status === "uncompleted" &&
              this.state.todos
                .filter((item) => !item.completed)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onRemove={this.removeTodo}
                    onEdit={this.editTodo}
                  />
                ))}
            {this.state.status === "all" &&
              this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={this.removeTodo}
                  onEdit={this.editTodo}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
