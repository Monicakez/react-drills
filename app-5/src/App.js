import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from "./Image"; 

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Image url={"https://barkpost.com/wp-content/uploads/2015/02/featmeme.jpg"}/>
      </div>
    );
  }
}

export default App;
