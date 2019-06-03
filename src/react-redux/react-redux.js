import React, { Component } from 'react'
import PropTypes from 'prop-types'
export const connect = (mapStateToProps) => (WrappedComponent) => {
  class connect extends Component {
    // constructor () {
    //   super()
    // }
    static contextTypes = {
      store: PropTypes.object
    }
    render () {
      return
    }
  }
}