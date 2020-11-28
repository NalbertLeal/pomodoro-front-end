import React from 'react'
import { Link } from 'react-router-dom'

// import './Button.css'

import "./Link.css"

class LinkComponent extends React.Component {
  constructor(props) {
    super()

    this.props = props
    this.state = {}
  }

  render() {
    // return <a className="matter-link" href={this.props.href}>{this.props.label}</a>
    return <Link to={this.props.href} className="matter-link">{this.props.label}</Link>
  }
}

export default LinkComponent