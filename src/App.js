import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputTask: '',
      todos: []
    };
  }
  addTask = () => {
    const { inputTask,todos } = this.state;

    const task = {
      name: inputTask,
      done: false
    }

    todos.push(task);
    this.setState({todos})
    this.setState({inputTask: ''})
  }
  onChange = event => {
    const { value: inputTask } = event.target;
    this.setState({inputTask})
  }
  delete = (ind) => {
    const { todos } = this.state;
    todos.splice(ind, 1);
    this.setState({todos})
  }
  done = (ind) => {
    const { todos } = this.state;
    todos[ind].done = !todos[ind].done;
    this.setState({todos});
  }
  clearAll = () => {
    this.setState({todos: []});
  }
  render() {
    return (
      <div className='container'>
        <h1>TODO LIST</h1>
        <div className='new-task'>
          <input value={this.state.inputTask} onChange={this.onChange} placeholder='Add a task'/>
          <button onClick={this.addTask} className='btn add'>Add</button>
        </div>
        <div className='content'>
          <ul>
            {
              this.state.todos.map((todo,ind) => {
                const cross = todo.done ? 'crossed' : '';
                return (
                  <li key={ind} className={cross}>
                    <input onClick={() => this.done(ind)} type='checkbox'/>{todo.name}<span onClick={() => this.delete(ind)} className='delete'>X</span>
                    </li>
                )
              })
            }
          </ul>
          <button onClick={this.clearAll} className='btn clear'>Clear</button>
        </div>
      </div>
    );
  }
}

export default App;
