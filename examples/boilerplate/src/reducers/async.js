export default (state = '', action = {}) => {
  console.log('CODESPLIT', state, action)
  if (action.type === 'CODESPLIT') {
    return action
  }
  return state
}
