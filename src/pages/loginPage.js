import React from 'react'
import Login from "../components/login"
import './pages.css'
export default function loginPage() {
  return (
    <div>
       <div className='loginPage'>
        <div className='logo__text'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/yu/r/dyZbZB6M64R.svg" alt='facebook logo'/>
            <h2>Facebook helps you connect and share with the people in your life.</h2>
        </div>
        <Login/>
       </div>
    </div>
  )
}
