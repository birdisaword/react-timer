
import React, { useState, useEffect } from 'react'
import { Component } from 'react'

function Starttimer(props) {
  return <h2> TIME LEFT: {props.time} </h2>
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time, 
      step: props.step, 
      decrement: props.decrement,
      autostart: props.autostart,
    }
  }

  componentDidMount() {
    if (!this.state.autostart) {
      clearInterval(this.timerIntervalId)
    } else {
      this.setState(this.interval())
    }
  }

  interval() {
    this.timerIntervalId = setInterval(() => 
    this.tick(), this.state.step)
  }

  componentWillUnmount() {
    clearInterval(this.timerIntervalId)
  }

  tick() {
   this.setState((state) => ({
    time: state.time - state.decrement
   }))
  }

  render() {
    return (
      <div>
        <Starttimer time={this.state.time} />
        <button className='btn' onClick={() => this.setState(this.interval())}> start </button>
        <button className='btn' onClick={() => clearInterval(this.timerIntervalId)}> pause </button>
      </div>
    )
  }
}

export default Timer