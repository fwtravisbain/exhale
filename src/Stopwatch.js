import React, {Component} from 'react';
import "./App.css";

class Stopwatch extends Component
{
    state = 
    {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        animationPaused: "paused",
        animation: "none",
    };

    startTimer = ()=> 
    {
        this.setState(
            {
                timerOn:true,
                timerTime: this.state.timerTime,
                timerStart: Date.now() - this.state.timerTime,
                animationPaused: "running",
                animation: "animateBreath 3s ease-in-out infinite alternate",
            }
        );

        this.timer = setInterval(() => 
        {
            this.setState(
            {
                timerTime: Date.now() - this.state.timerStart,
                circleInterval: this.state.circleInterval + 10,
            });
        }, 10);
    }

    stopTimer = () => 
    {
        this.setState(
            {
                timerOn: false,
                animationPaused: "paused",
            });
        clearInterval(this.timer);
    };

    resetTimer = () =>
    {
        this.setState({
            timerOn:false,
            timerStart: 0,
            timerTime: 0,
            circleOut:0,
            animation: "none",
        });
    }

    render()
    {
        const {timerTime} = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return(
            <div className="Stopwatch">
                <div id="container">

                    <div className="Visualizer"> 
                        <div className="circle"
                            style = {
                            {
                                animationPlayState: `${this.state.animationPaused}`,
                                animation: `${this.state.animation}`,
                            }
                        }>
                        </div>
                        <div class="dot"></div>
                    </div>
                
                    <div className="Stopwatch-header">Deep Breaths</div>
                    <div className="Stopwatch-display">
                        {hours} : {minutes} : {seconds} : {centiseconds}
                    </div>

                    {this.state.timerOn === false && this.state.timerTime === 0 && (
                        <button onClick={this.startTimer}>Start</button>
                    )}
                    {this.state.timerOn === true && (
                        <button onClick={this.stopTimer}>Stop</button>
                    )}
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button onClick={this.startTimer}>Resume</button>
                    )}
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button onClick={this.resetTimer}>Reset</button>
                )}
                </div>
            </div>
        );
    }
}

export default Stopwatch;