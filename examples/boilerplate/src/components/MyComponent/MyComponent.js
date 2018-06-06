import React from 'react';
import {connect} from 'react-redux'

const MyComponent = ({AsyncComponent}) => {
  console.log('AsyncComponent',AsyncComponent);
  return AsyncComponent ? <AsyncComponent/> : <span>Loading</span>
}

export default connect(state => {
  console.log('CONNECTED STATE', state)
  return {AsyncComponent: state.location.components}
})(MyComponent)
