import React from "react";

class Counter extends React.Component {
    render(){
        const textStyleColor = {
            color: this.props.color
        }
        return( 
            <h1 style={textStyleColor}>
                A Conta está em: {this.props.inicio}
            </h1>
        )
    }
}

export default Counter