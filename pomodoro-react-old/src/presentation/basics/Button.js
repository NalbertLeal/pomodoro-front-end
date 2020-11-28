import React from 'react'

// import './Button.css'

class Button extends React.Component {
  constructor(props) {
    super()

    this.props = props
    this.state = {}
  }

  render() {
    return <button id="login-btn" className="matter-button-contained" type="submit" onClick={this.props.onClick}>{this.props.label}</button>
  }
}

export default Button