import React from 'react'
import './components.css'
export default function input(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder}  className={props.className}/>
    </div>
  )
}
