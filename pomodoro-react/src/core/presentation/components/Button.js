import React from 'react'

import './Button.css'

class Figure extends React.Component {
  constructor(props) {
    super()

    this.props = props
    this.state = {}
  }

  render() {
    return <button 
      className={`${this.props.color}`}
    >
      { this.props.label }
    </button>
  }
}

export default Figure