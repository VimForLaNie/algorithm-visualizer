import React from 'react';
import './App.css';
import Array from './modules/Array'

var num = [1,2,3,4,5,6,7,8,9]
var ptr = 0;

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <p>Algorithm Visualize Modules</p>
        <Array arr={num} ptr={ptr}/>
        <Array arr={num} ptr={ptr + 2}/>
        
      </div>
    );
  }
}

export default App;
