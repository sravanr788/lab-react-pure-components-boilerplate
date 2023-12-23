import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
            toggle : true
        }
    }
    changeToggle = () =>{
        this.setState({
            toggle : !this.state.toggle
        })
    }
    increaseCount = () =>{
        if(this.state.toggle){
        this.setState({
            count : this.state.count + 1
        })
    }else { //extra step to show  that how pure component works
        this.setState({
            count : this.state.count
        })
    }
    }
  render() {
      console.warn("This is a Simple Component")
    return (
        <>
        <hr />
      <h1>Simple Component</h1>
      <h3>{this.state.count}</h3>
      <button onClick={this.changeToggle} style={{
        backgroundColor : `${this.state.toggle ? "green" : "red"}`
      }}>Toggle</button>
      &nbsp;&nbsp;
      <button onClick={this.increaseCount}>Counter</button>
      <hr />
      </>
    )
  }
}

