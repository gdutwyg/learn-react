import React, { Component } from 'react'
import propTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
function createStore (reducer) {
  let state
  let listeners = []
  let subscribe = (listener) => listeners.push(listener)
  let getState = () => state
  let dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, subscribe, dispatch }
}
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer)
class Index extends Component {
  static childContextTypes = {
    store: propTypes.object
  }
  getChildContext () {
    return { store }
  }
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
export default Index