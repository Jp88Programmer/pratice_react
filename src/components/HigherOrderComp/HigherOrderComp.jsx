import React, { Component } from 'react'

const HigherOrderComp = (SecondComp) => {

    // class InnerClass extends Component {
    //     render() {
            
    //     }
    // }
  return (
    // <div>HigherOrderComp</div>
    <>
        <SecondComp />
    </>
  )
}

export default HigherOrderComp