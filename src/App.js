import React, {Component} from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {v4 as uuid} from 'uuid';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Feed the dog',
        completed: false
      },
      {
        id: uuid(),
        title: 'Water the garden',
        completed: false
      }
    ]
  }

  //Toggle Complete 
  markComplete = (id) =>{
        this.setState({todos: this.state.todos.map(todo =>{
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
        })});
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo=> todo.id !== id)]})
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

render(){ 
return ( //this is JSX, similar to HTML setup but can use JS in it
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
  );
}
}

export default App;
