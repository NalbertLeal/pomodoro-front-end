import React from 'react'

import './Input.css'

class Input extends React.Component {
  constructor(props) {
    super()

    this.props = props
    this.static = {}
  }

  render() {
    return <label>
      <p> {this.props.label} </p>
      <input
        placeholder={this.props.label}
        value={this.props.value} 
        onChange={this.props.onChange}
        type={this.props.type}
      />
    </label>
  }
}

export default Input