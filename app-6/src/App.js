import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from "./Todo"; 

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      list: [], 
      input: ""
    }

    this.addTask = this.addTask.bind(this); 

  }

  onInput(value) {
    this.setState({input: value})
  }

  addTask() {
    this.setState({
      list: [...this.state.list, this.state.input], 
      input: ""
    })
  }
  
  
  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/> 
    })

    return (
    <div className="App">
      <h1>My to-do list:</h1>

      <div>
        <input 
        value={this.state.input} 
        placeholder="Enter New Task" 
        onChange={e => this.onInput(e.target.value)}/>
        <botton onClick={this.addTask}>Add</botton>
      </div>

      <br/>
      {list}

    </div>
  );
 }
}

export default App;
