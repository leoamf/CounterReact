import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"

class App extends Component {
    render() {
        return ( 
            <div>
                <Counter inicio ={10} color ="red" />
                <Counter inicio={30} color="gren" />
                <Counter inicio={2345} color="purple" />
            </div>
        );
    }
}

export default App;