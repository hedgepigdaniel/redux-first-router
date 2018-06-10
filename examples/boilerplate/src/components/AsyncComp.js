import React from 'react';
import {connect} from 'react-redux'

const Async = ({AsyncComponent}) => {
  console.log('AsyncComponent', AsyncComponent);
  return AsyncComponent ? <AsyncComponent/> : <h1>loading</h1>
}

export default connect(state => {
  console.log('STATE',state)

  if (state.location.components && state.location.components.MyComponent) {
    return {AsyncComponent: state.location.components.MyComponent}
  }
})(Async)
