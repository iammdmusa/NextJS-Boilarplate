import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../src/pages/index'

describe('With Enzyme', () => {
  it('App shows "Hello, Sunshine!"', () => {
    const app = shallow(<App />)

    expect(app.find('div').text()).toEqual('Hello, Sunshine!')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello, Sunshine!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
