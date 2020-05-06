import React from 'react';
import './App.css';
import Array from './modules/Array'
import Var from './modules/Var'

var array = [5, 4, 3, 2, 1];

function change(e) {
  e = ['a', 'b', 'c', 'd'];
  console.log(array);
  return e;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      input2: [],
      ptr: 1,
      ptr2: 0
    }
  }
  render() {
    return (
      <div className="App">
        <p>Algorithm Visualize Modules</p>
        <Array arr={this.state.input} ptr={this.state.ptr} />
        <Array arr={this.state.input2} ptr={this.state.ptr2} />
        <button onClick={() => { this.setState({ input: change(array) }) }}>swap</button>
        <button onClick={() => { this.setState({ input: array }) }}>switch</button>
        <button onClick={() => { this.setState({ input2: change(array) }) }}>swap 2</button>
        <button onClick={() => { this.setState({ input2: array }) }}>switch 2</button>
        <Var name="First Pointer" value={this.state.ptr} />
        <Var name="Second Pointer" value={this.state.ptr2} />
      </div>
    );
  }
}

export default App;
