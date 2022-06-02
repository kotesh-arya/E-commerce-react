import React from "react";
import { NavBar } from "../HomePage/HomePageComponents";
import { Link } from "react-router-dom";
import SignUpCSS from "../SignUp/SignUp.module.css";
function SignUp() {
  return (
    <div>
      <NavBar />
      <div className={SignUpCSS["signup-container"]}>
        <h1 className={SignUpCSS["header-large"]}>SIGN UP</h1>
        <div className={SignUpCSS["input"]}>
          <label htmlFor="input-box">E-mail adddress</label>
          <input
            className={`input-box basic ${SignUpCSS["text-field"]}`}
            type="text"
            placeholder="user@yahoo.com"
          />
        </div>
        <div className={SignUpCSS["input"]}>
          <label htmlFor="input-box">Password</label>
          <input
            className={`input-box basic ${SignUpCSS["text-field"]}`}
            type="password"
            placeholder="************"
          />
        </div>
        <div className={SignUpCSS["signup-checkbox-text"]}>
          <input className={SignUpCSS["check-box"]} type="checkbox" />
          <label className="check-label" htmlFor="check-box">
            I accept all terms & conditions
          </label>
        </div>

        <button className={`btn btn-primary ${SignUpCSS["signup"]}`}>
          Create new Account
        </button>
        <h3>
          <Link className={SignUpCSS["login-link"]} to="/SignIn">
            Already have an account &gt;
          </Link>
        </h3>
      </div>
    </div>
  );
}

export { SignUp };
