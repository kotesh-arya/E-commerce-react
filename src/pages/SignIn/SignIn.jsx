import React from 'react'
import { Link } from 'react-router-dom'
import {NavBar,Footer} from '../HomePage/HomePageComponents'
import '../SignIn/SignIn.css'
function SignIn() {
return (
<div>
    <NavBar />
    {/* <h1>Blank SignIn page for Route checking</h1> */}
    <div className="login-container">
        <h1 className="header-large">LOG IN</h1>
        <div className="input">
            <label htmlFor="input-box">E-mail adddress</label>
            <input className="input-box basic" type="text" placeholder="user@yahoo.com"/>
        </div>
        <div className="input">
            <label htmlFor="input-box">Password</label>
            <input className="input-box basic" type="password" placeholder="************"/>
        </div>
        <div className="handy-div">
            <div className="checkbox-text">
                <input className="check-box" type="checkbox"/>
                <label className="check-label" htmlFor="check-box">Remember Me</label>
            </div>
            <Link className="forgot-password" to="">Forgot Password</Link>
        </div>
        <button className="btn btn-primary"> 
        <Link className="home-page-link" to="/"> LOG IN</Link>
        </button>
        <h2>
            <Link className="signup-link" to="/SignUp">Create new account &gt;</Link>
        </h2>
    </div>

    <Footer />
</div>
)
}

export {SignIn}