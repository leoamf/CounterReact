import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : props.inicio
        }

        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        
    }
    handleDecrement() {
        this.setState({ counter: --this.state.counter })
    }
    handleIncrement(){
        this.setState({ counter: ++this.state.counter })
    }

    render(){
        const textStyleColor = {
            color: this.props.color
        }
        return( 
            <div>
                <button onClick={this.handleDecrement}> - </button>
                <button onClick={this.handleIncrement}> + </button>
                <h1 style={textStyleColor}>
                    A Conta está em: {this.state.counter}
                </h1> 
            </div>
        )
    }
}

export default Counter