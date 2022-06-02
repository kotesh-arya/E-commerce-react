import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../HomePage/HomePageComponents";
import SignInCSS from "../SignIn/SignIn.module.css";
function SignIn() {
  return (
    <div>
      <NavBar />
      <div className={SignInCSS["login-container"]}>
        <h1 className={SignInCSS["header-large"]}>LOG IN</h1>
        <div className={SignInCSS["input"]}>
          <label htmlFor="input-box">E-mail adddress</label>
          <input
            className={`input-box basic ${SignInCSS["text-field"]}`}
            type="text"
            placeholder="user@yahoo.com"
          />
        </div>
        <div className={SignInCSS["input"]}>
          <label htmlFor="input-box">Password</label>
          <input
            className={`input-box basic ${SignInCSS["text-field"]}`}
            type="password"
            placeholder="************"
          />
        </div>
        <div className={SignInCSS["handy-div"]}>
          <div className={SignInCSS["checkbox-text"]}>
            <input className={SignInCSS["check-box"]} type="checkbox" />
            <label className={SignInCSS["check-label"]} htmlFor="check-box">
              Remind Me
            </label>
          </div>
          <a className={SignInCSS["forgot-password"]} href="#">
            Forgot Password
          </a>
        </div>
        <Link className={SignInCSS["home-page-link"]} to="/">
          <button className={`btn btn-primary ${SignInCSS["login-btn"]}`}>
            LOG IN
          </button>
        </Link>
        <h3>
          <Link className={SignInCSS["signup-link"]} to="/Signup">
            Create new account &gt;
          </Link>
        </h3>
      </div>
    </div>
  );
}

export { SignIn };
