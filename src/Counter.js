import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : props.inicio
        }
    }
    render(){
        const textStyleColor = {
            color: this.props.color
        }
        return( 
            <div>
                <button onClick={() => this.setState({counter:--this.state.counter })}> - </button>
                <button onClick={() => this.setState({ counter: ++this.state.counter })}> + </button>
                <h1 style={textStyleColor}>
                    A Conta está em: {this.state.counter}
                </h1> 
            </div>
        )
    }
}

export default Counter