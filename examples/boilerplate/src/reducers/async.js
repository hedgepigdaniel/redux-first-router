export default (state = '', action = {}) => {
  if (action.type === 'CODESPLIT') {
    console.log('reducer', {state, action})
    return action
  }
  return state
}
