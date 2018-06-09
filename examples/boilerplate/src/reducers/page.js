export default (state = 'HOME', action = {}) => {
// console.log(components)
//   console.log(action)
  console.log(action.type, action);

  if (action.params) {
    // console.log('addingComponents', Object.assign(components, {[action.type]: action.params.page})) .
  }
  console.log('PAGE RESUDER', action, state);
  // console.log(components);
  return components[action.type] || state
}

const components = {
  HOME: 'Home',
  LIST: 'List',
  NOT_FOUND: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
