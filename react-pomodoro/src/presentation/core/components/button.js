function Button(props) {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button