import React, { Component, PureComponent } from 'react'

export default class Concept extends PureComponent {
    constructor(){
        super()
        this.state = {
            data : 10
        }
    }
  render() {
    console.log(this.state.data)
    return (
        <>
      <h1>Concept</h1>
      <button onClick={()=>{
        this.setState({data : 30})
      }}>Update</button>
      </>
    )
  }
}

//* What is Pure Components ?
//^ PureComponent is similar to Component but it skips re-renders for same props and state.
//^ Doesnt Implement shouldComponentUpdate
//^ The render() method wont be called for same values of states and props.
//^ Lets Say if you have "a state whose value is 10" and there is a "button" where it does some tasks but doesnt change the value of the state(still 10).
//^ So here we dont need to render everytime we click the button.
//^ So Pure Component will stop those unnecessary rendering .


//* How to Use it ?
//^ import PureComponent from React 
//^ used in Class Component
//^ in functional component we use useMemo and useCallback to achieve similar outputs