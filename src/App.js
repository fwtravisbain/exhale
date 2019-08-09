import React, { Component } from 'react';
import Stopwatch from "./Stopwatch";

class App extends Component
{
    render()
    {
        return (
            <div className="App">
                

                <div className="App-title">    </div>
                <h1 style={{marginLeft:730}}>
                <Stopwatch />
                </h1>
            </div>
        );
    }
}

export default App;