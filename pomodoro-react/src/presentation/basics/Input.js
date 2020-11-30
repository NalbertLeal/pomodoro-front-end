import React, { useState } from 'react'

function Input(label, type) {
  const [value, setValue] = useState("");
  const input = <label id="normal" className="matter-textfield-standard">
    <input placeholder=" " value={value} onChange={e => setValue(e.target.value)} type={type} />
    <span>{label}</span>
  </label>
  return [value, setValue, input];
}

export default Input