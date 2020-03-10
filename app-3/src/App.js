import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      filtered: "", 
      family: ["Veronica", "Jessica", "Monica", "Aundreya", "Valerie", "Hailee"]
    }
  }

  handleChange(filter) {
    this.setState({filtered: filter})
  }

  render() {
    let toDisplay = this.state.family
    .filter((element, index) => {
      return element.includes(this.state.filtered)
    })
    .map((element, index)=> {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {toDisplay}
      </div>
    );
  }
}

export default App;
