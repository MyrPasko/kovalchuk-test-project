import React, { Component } from 'react';
import Lesson from "./02_components/Lesson";
import CounterButton from "./03_state/Lesson";

class App extends Component {
  render() {
    return (
      <div>
        Here are my child components.
        <Lesson />
        <CounterButton />
      </div>
    );
  }
}

export default App;
