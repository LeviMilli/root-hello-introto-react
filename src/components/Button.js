import React, { Component } from 'react'

class Button extends Component {
  render() {
    const {btnText} = this.props

    return (
      <button>{btnText}</button>
    )
  }
}

export default Button