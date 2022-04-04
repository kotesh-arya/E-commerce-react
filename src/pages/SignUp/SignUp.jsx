import React from 'react'
import {  Footer, NavBar } from '../HomePage/HomePageComponents'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
function SignUp() {
return (
<div>
    <NavBar/>
    <div className="signup-container">
        <h1 className="header-large">SIGN UP</h1>
        <div className="input">
            <label htmlFor="input-box">E-mail adddress</label>
            <input className="input-box basic" type="text" placeholder="user@yahoo.com"/>
        </div>
        <div className="input">
            <label htmlFor="input-box">Password</label>
            <input className="input-box basic" type="password" placeholder="************"/>
        </div>
        <div className="handy-div">
            <div className="text-checkbox">
                <input className="check-box" type="checkbox"/>
                <label className="check-label" htmlFor="check-box">I accept all terms & conditions</label>
            </div>
           
        </div>
        <button className="btn btn-primary">Create new Account</button>
        <h2>
        <Link className="login-link" to="/SignIn">Already have an account &gt;</Link>
        </h2>
    </div>

<Footer/>
</div>
)
}

export {SignUp}