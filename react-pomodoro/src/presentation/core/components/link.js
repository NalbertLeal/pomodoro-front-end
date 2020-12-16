function Link(props) {
  return (
    <a href="#" onClick={props.onClick}>
      {props.label}
    </a>
  )
}

export default Link