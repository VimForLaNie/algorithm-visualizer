import React from 'react';
import './modules.css';

class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ptr: this.props.ptr
        };
    }
    pushArr = e => {
        var temp = this.props.arr;
        temp.push(e);
        this.setState({
            arr: temp
        });
    }

    movePtr = d => {
        console.log(this.props.arr);
        if (this.state.ptr + d >= this.props.arr.length) {
            this.setState({
                ptr: ((this.state.ptr + d) - this.props.arr.length)
            });
        }
        else if (this.state.ptr + d < 0) {
            this.setState({
                ptr: (this.props.arr.length + d)
            });
        }
        else {
            this.setState({
                ptr: this.state.ptr + d //d
            });
        }
    }

    MoveButton = props => {
        return (
            <div onClick={() => this.movePtr(props.i)} className="Array-button">{props.text}</div>
        );
    }

    IndexBox = props => {
        return (
            <div className="Array-index">
                {props.name} : {this.state.ptr}
            </div>
        );
    }

    render() {
        const renderArray = [];
        for (const [index, value] of this.props.arr.entries()) {
            if (this.state.ptr === index) {
                renderArray.push(
                    <div className="Array-ptr-item" key={index}>
                        {value}
                    </div>
                );
            }
            else {
                renderArray.push(
                    <div className="Array-item" key={index}>
                        {value}
                    </div>
                );
            }
        }
        return (
            <div className="Array">
                <this.MoveButton i={1} text="+++" />
                <div className="Array-box">
                    {renderArray}
                </div>
                <this.MoveButton i={-1} text="---" />
                <this.IndexBox name="Pointer" />
            </div>
        );
    }
}

export default Array;