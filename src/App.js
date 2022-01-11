import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'give Reagan snuggles',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Workout and run',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  
  handleAdd = () => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }
  handleClear = () => {
    // 1. set our state
    // 2. loop through all todos
    // 3. remove all todos that have competed === true
    // 4. save filtered
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const { todos } = this.state;
  return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
          <TodoList todos={todos}/>
          <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
