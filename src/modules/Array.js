import React from 'react';
import './modules.css';

class Array extends React.Component{
    constructor(props){
        super(props);
        console.log("Call constructor");
        this.state={
            arr : this.props.arr,
            ptr : this.props.ptr
        };
    }
    addPtr = d => {
        if(this.state.ptr + d >= this.state.arr.length){
            this.setState({
                ptr : ((this.state.ptr + d) - this.state.arr.length)
            });
        }
        else if(this.state.ptr + d < 0){
            this.setState({
                ptr : (this.state.arr.length + d) 
            });
        }
        else{
            this.setState({
                ptr : this.state.ptr + d //d
            }); 
        }
    }
    
    render(){
        const renderArray = [];
        for (const [index, value] of this.props.arr.entries()) {
            if(this.state.ptr === index){
                renderArray.push(
                    <div className="Array-ptr-item" key={index}>
                        {value}
                    </div>
                );
            }
            else{
                renderArray.push(
                    <div className="Array-item" key={index}>
                        {value}
                    </div>
                );
            }
        }
        return(
            <div>
                <button onClick={() => this.addPtr(-1)}>-</button>
                <div className="Array-box">
                    {renderArray}
                </div>
                <button onClick={() => this.addPtr(1)}>+</button>
            </div>
        );
    }
}

export default Array;