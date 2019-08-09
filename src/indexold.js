import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  

class TimerInput extends React.Component
{
    render() {
        return (
          <div style={{marginLeft:100}}>
            <h3>Input your desired time</h3>
            <input type="number" end_minutes={this.props.value} handleChange={this.props.handleChange} required />
          </div>
        );
      }
}

class TimerStart extends React.Component
{
    render()
    {
        return (
            <button className="startbutton"
            style={{marginLeft:130}}
            onClick={this.props.startTimer}>
            Start
            </button>
        )
    }
}

class Timer extends React.Component 
{
    startTimer()
    {
        alert('timer start');
        this.setState({
            is_running: true,
        })
    }

    render() 
    {
      return (
        <div>
            <h1 style={{marginLeft:145}}>
            {this.props.current_minutes} : {this.props.current_seconds}
            </h1>
        </div>
        );
    }
}

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            current_seconds: 0,
            current_minutes: 0,
            end_minutes: 3,
            is_running: false,
        };

        this.handleChange = this.handleChange.bind(this);

        
    }

    handleChange(event)
    {
        this.setState(
            {
                end_minutes: event.target.value
            }
        )
    }


    render() {
        return (
            <div>
                <TimerInput minutes={this.state.current_minutes} handleChange={this.handleChange}/>
                <Timer minutes={this.state.current_minutes} seconds={this.state.current_seconds}/>
                <TimerStart/>
            </div>
        );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
  