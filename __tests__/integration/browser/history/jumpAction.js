import createTest from '../../../../__helpers__/createTest'
import { locationToUrl } from '../../../../src/utils'
import { jump } from '../../../../src/actions'

createTest('jump(delta, any, any, action)', {
  SECOND: '/second',
  FIRST: '/:foo?'
}, {
  testBrowser: true,
  basenames: ['/base'],
  convertNumbers: true
}, [], async ({ dispatch, snap, snapPop }) => {
  expect(locationToUrl(window.location)).toEqual('/')

  await dispatch({ type: 'SECOND' })

  const action = {
    params: { foo: 'bar' },
    query: { hell: 'yea' },
    hash: 'yolo',
    basename: 'base',
    state: { something: 123 }
  }

  await snap(jump(-1, undefined, undefined, action))
  expect(locationToUrl(window.location)).toEqual('/base/bar?hell=yea#yolo')

  await snapPop('forward')
  expect(locationToUrl(window.location)).toEqual('/second')

  await snapPop('back')
  expect(locationToUrl(window.location)).toEqual('/base/bar?hell=yea#yolo')
})
