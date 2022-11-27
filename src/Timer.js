
import React, { Component } from 'react'

function Starttimer({ time }) {
  return <h2> TIME LEFT: {time} </h2>
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time, 
      step: props.step, 
      autostart: props.autostart,
    }
  }

  componentDidMount() {
    if (!this.state.autostart) {
      clearInterval(this.timerIntervalId)
     } else {
       this.interval()
    }
  }

  interval() {

    clearInterval( this.timerIntervalId)
    
    this.timerIntervalId = setInterval(() => 
    this.tick(), this.state.step);
}

  componentWillUnmount() {
    clearInterval(this.timerIntervalId)
  }

  
   getTime(ms) {
    let sec = Math.floor(ms / 1000)
    let min = Math.floor(sec / 60)
  
    sec = sec % 60;
    min = min % 60;
  
    return `${min}:${sec}`
  }


  tick() {
   this.setState((state) => ({
    time: state.time - state.step
   }))
   if (this.state.time < 1) {
    this.setState({ time: this.state.time - 0})
  }}

  render() {
    console.log(this.state.time)
    return (
      <div>
        <Starttimer time={ this.getTime(this.state.time)} />
        <button className='btn' onClick={() => this.setState(this.interval())}> start </button>
        <button className='btn' onClick={() => clearInterval(this.timerIntervalId)}> pause </button>
      </div>
    )
  }
}

export default Timer