import React from 'react'
import "./inputcontrol.css"

const InputControl = (props) => {
  return (
    <div className='container-i'>
        {props.label && <label>{props.label}</label>}
      <input type="text"  {...props}/>
    </div>
  )
}

export default InputControl
