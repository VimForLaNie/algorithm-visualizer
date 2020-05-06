import React from 'react';
import './App.css';
import Array from './modules/Array'
import Test from './testAlgo'

var array = [5,4,3,2,1];

function change(e) {
  e = ['a','b','c','d'];
  console.log(array);
  return e;
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input : []
    }
  }
  render(){
    return (
      <div className="App">
        <p>Algorithm Visualize Modules</p>
        <Array arr={this.state.input} ptr={0}/>
        <Array arr={this.state.input} ptr={0}/>
        <button onClick={() => {this.setState({ input : change(array) })}}>swap</button>
        <button onClick={() => {this.setState({ input : array })}}>switch</button>
        <Test />
      </div> 
    );
  }
}

export default App;
