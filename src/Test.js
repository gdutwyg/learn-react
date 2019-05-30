import React, { Component } from 'react'
class Header extends Component {
  constructor() {
    super()
    console.log('construct')
  }

  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }
  componentWillUnmount () {
    console.log('component will unmount')
  }
  render () {
    console.log('render')
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}
class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }
  componentWillMount () {
    this.timer = setInterval(() => {
      // this.setState({ date: new Date() })
    }, 1000)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }
  render () {
    console.log('render')
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
        <span>{this.props.text}</span>
      </div>
    )
  }
}
class Test extends Component {
  constructor() {
    super()
    this.state = {
      text: <h3>123</h3>,
      isShowHeader: true
    }
  }

  handleShowOrHide () {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }

  render () {
    return (
      <div>
        {/* {this.state.isShowHeader ? <Clock></Clock> : null} */}
        <Clock text={this.state.text}></Clock>
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}
export default Test