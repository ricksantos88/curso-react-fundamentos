import React, { Component } from 'react'

import Display from './Display'
import Button from './Button'
import StepForm from './StepForm'

import './Counter.css'

class Counter extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            number: props.initialNumber || 0,
            step: props.initialStep || 5
        }
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number}/>
                <StepForm step={this.state.step} handler={this.setStep}/>
                <Button handler={this.inc} label="+" />
                <Button handler={this.dec} label="-" />
            </div> 
        );
    }
}

export default Counter;