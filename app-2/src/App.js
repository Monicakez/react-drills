import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      family: ["Veronica", "Jessica", "Monica", "Aundreya", "Valerie", "Hailee"]
    }
  }


  render() {
    let toDisplay = this.state.family.map((element, index)=> {
    return <h2 key={index}>{element}</h2>
    })

    return (
    <div className="App">{toDisplay}</div>
    );
  }
  
}

export default App;
