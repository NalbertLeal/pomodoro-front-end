import React from 'react'

class Figure extends React.Component {
  constructor(props) {
    super()

    this.props = props
    this.state = {}
  }

  render() {
    return <figure class="logo-figure">
      <img 
        src={this.props.src}
        alt={this.props.imgAlt}
      >
      </img>
  <figcaption>{this.props.caption}</figcaption>
    </figure>
  }
}

export default Figure