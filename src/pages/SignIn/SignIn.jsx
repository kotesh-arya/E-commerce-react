import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../HomePage/HomePageComponents";
import { Modal } from "../Modal";
import { UserInfo } from "../UserInfo/UserInfo";
import SignInCSS from "../SignIn/SignIn.module.css";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import { UPDATE_USER_DATA } from "../../constants/authStateConstants";
import {REMOVE_MODAL} from "../../constants/cartStateConstants"
function SignIn() {
  const { loginUser, userDispatch, isLoggedIn } = useAuth();
  const { isModalOpen, dispatch } = useCart();
  setTimeout(() => {
    dispatch({ type: REMOVE_MODAL });
  }, 10000);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <NavBar />
      {isLoggedIn ? (
        <UserInfo />
      ) : (
        <div className={SignInCSS["login-container"]}>
          <h1 className={SignInCSS["header-large"]}>LOG IN</h1>
          <div className={SignInCSS["input"]}>
            <label htmlFor="input-box">E-mail address</label>
            <input
              className={`input-box basic ${SignInCSS["text-field"]}`}
              type="text"
              placeholder="user@yahoo.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className={SignInCSS["input"]}>
            <label htmlFor="input-box">Password</label>
            <input
              className={`input-box basic ${SignInCSS["text-field"]}`}
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className={SignInCSS["handy-div"]}>
            <div className={SignInCSS["checkbox-text"]}>
              <input className={SignInCSS["check-box"]} type="checkbox" />
              <label className={SignInCSS["check-label"]} htmlFor="check-box">
                Remember Me
              </label>
            </div>
            <a className={SignInCSS["forgot-password"]} href="#">
              Forgot Password
            </a>
          </div>
          <button
            className={`btn btn-primary ${SignInCSS["login-btn"]}`}
            onClick={() => {
              loginUser(formData.email, formData.password);
              userDispatch({
                type: UPDATE_USER_DATA,
                payload: {
                  email: formData.email,
                  password: formData.password,
                },
              });
            }}
          >
            LOG IN
          </button>
          <button
            className={`btn btn-primary ${SignInCSS["login-btn"]}`}
            onClick={() => {
              loginUser("test@gmail.com", "test@123");
              userDispatch({
                type: UPDATE_USER_DATA,
                payload: { email: "test@gmail.com", password: "test@123" },
              });
              setFormData((prevData) => {
                return {
                  ...prevData,
                  email: "test@gmail.com",
                  password: "test@123",
                };
              });
            }}
          >
            Log In with test credentials
          </button>
          <h3>
            <Link className={SignInCSS["signup-link"]} to="/Signup">
              Create new account &gt;
            </Link>
          </h3>
        </div>
      )}
      {isModalOpen && <Modal />}
    </div>
  );
}

export { SignIn };
