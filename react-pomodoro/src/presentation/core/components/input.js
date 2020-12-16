function Input(props) {
  return (
    <div className="form-group mb-3">
      <label for={props.label}>{props.label}:</label>
      <input type={props.inputType} className="form-control" id={props.label} placeholder={props.label} name={props.label} onChange={(e) => props.onClick(e.target.value) } />
    </div>
  )
}

export default Input