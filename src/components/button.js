import React from 'react'
import "./components.css";
export default function button(props) {
  return (
    <div>
      <button className={props.btnType}>{props.name}</button>
    </div>
  )
}