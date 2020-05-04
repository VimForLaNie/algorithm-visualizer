import React from 'react';
import './modules.css';

class Array extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr : this.props.arr,
            ptr : this.props.ptr
        };
    }
    pushArr = e => {
        var temp = this.state.arr;
        temp.push(e);
        this.setState({
            arr : temp
        });
        console.log(this.state.arr);
    }

    movePtr = d => {
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
    MoveButton = props =>{
        return(
            <button onClick={() => this.movePtr(props.i)}>{props.text}</button>
        );
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
            <div className="Array">
                <this.MoveButton i={1} text="+++"/>
                <div className="Array-box">
                    {renderArray}
                </div>
                <this.MoveButton i={-1} text="---"/>
            </div>
        );
    }
}

export default Array;