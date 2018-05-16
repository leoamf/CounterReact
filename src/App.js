import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"

class App extends Component {
    render() {
        return ( 
            <Counter inicio ={10} color ="red" />
        );
    }
}

export default App;