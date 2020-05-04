import React from 'react';
import './App.css';
import Array from './modules/Array'


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <p>Algorithm Visualize Modules</p>
        <Array arr={[1,2,3,4]} ptr={0}/>
        <Array arr={[1,2,3,3,4]} ptr={0}/>
        {/* <button onClick={() => addToNum(num,12)}>Add 12</button> */}
      </div>
    );
  }
}

export default App;
