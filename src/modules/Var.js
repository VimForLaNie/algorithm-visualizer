import React from 'react';
import './modules.css';

class Var extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Var">
                {this.props.name} : {this.props.value}
            </div>
        );
    }
}

export default Var;