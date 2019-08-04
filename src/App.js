import React, {Component} from 'react';
import './App.css';
import Func from './functionfull';
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="container-fluid">
                    <Func/>
                </header>
            </div>
        );
    }
}
