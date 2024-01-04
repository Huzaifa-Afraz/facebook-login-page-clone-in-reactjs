import React from 'react'
import Input from "./input.js";
import Button from "./button.js"
export default function login() {
  return (
    <div className='login'>
      <Input type="email" placeholder="Email address" className="loginInputs"/>
      <Input type="Password" placeholder="Password" className="loginInputs"/>
      <Button btnType="loginBtn" name="Log in"/>
      <Button btnType="ForgetBtn" name="Forget password"/>
      <hr/>
      <Button btnType="createACC" name="Create New Account"/>
    </div>
  )
}
