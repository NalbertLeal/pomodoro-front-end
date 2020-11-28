import React from 'react'

// import './Input.css'

class Input extends React.Component {
  constructor(props) {
    super()

    this.props = props
    this.static = {}
  }

  render() {
    return <label id="normal" className="matter-textfield-standard">
      <input placeholder=" "/>
      <span>{this.props.label}</span>
    </label>
  }
}

export default Input