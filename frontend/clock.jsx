import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    hours = (hours < 10) ? `0${hours}` : hours;
    return (
      <div>
       <h1> RECLAIM YOUR TIME </h1>
       <div className="clock">
       <p>
       <span>
         Time:
       </span>
       <span>
         {hours}:{minutes}:{seconds} <br/>
       </span>
       </p>
       <p>
         <span>
         Date:
          </span>
          <span>
         {this.state.time.toDateString()}
        </span>
      </p>
    </div>

      </div>
      );
    }
}
