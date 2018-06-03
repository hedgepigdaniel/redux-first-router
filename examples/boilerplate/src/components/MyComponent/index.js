import MyComponent, { Another } from './MyComponent'
import reducerKey from '../../reducers/async'
import thunk from './thunk'

const components = { MyComponent, Another }
const reducers = { reducerKey }
const chunks = 'my-component'

export { components, reducers, thunk, chunks }
