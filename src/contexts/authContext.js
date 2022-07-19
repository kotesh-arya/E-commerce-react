import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducers/authReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalCartContext } from "./cartContext";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let location = useLocation();
  let navigate = useNavigate();
  const intialState = {
    userName: "",
    email: "",
    password: "",
    isLoggedIn: false,
    userNotFound: false,
    userExists: false,
  };
  const [userState, userDispatch] = useReducer(reducer, intialState);
  const {dispatch} = GlobalCartContext();
  // Login Function

  const loginUser = async (email, password) => {
    console.log(email, password);
    if (email !== "" && password !== "") {
      try {
        let response = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });

        const { data } = response;
        const { encodedToken, foundUser } = data;

        console.log(encodedToken, foundUser);
        if (response.status === 200) {
          userDispatch({
            type: "UPDATE_TOKEN_AND_USER_DATA",
            payload: { encodedToken, foundUser },
          });
          if (location.state) {
            navigate(location.state.from.pathname);
          } else {
            navigate("/ProductList");
          }

          localStorage.setItem("JWT_TOKEN", encodedToken);
          console.log(foundUser);
        }
      } catch (error) {
        dispatch({ type: "INVALID_USER_INPUT" });
        console.log(error);
      }
    }
  };
  // Sign up Function

  const signupUser = async (firstName, lastName, email, password) => {
    if (firstName !== "" && lastName !== "" && email !== "" && password) {
      try {
        const response = await axios.post("/api/auth/signup", {
          firstName,
          lastName,
          email,
          password,
        });
        if (response.status === 201) {
          const { data } = response;
          const { encodedToken, createdUser } = data;
          userDispatch({
            type: "UPDATE_TOKEN_AND_USER_DATA",
            payload: { encodedToken, foundUser: createdUser },
          });
          console.log(createdUser);
          navigate("/");
          localStorage.setItem("JWT_TOKEN", encodedToken);
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 422) {
          userDispatch({ type: "USER_ALREADY_EXISTS" });
        }
      }
    }
  };
  const logoutUser = () => {
    navigate("/");
    userDispatch({ type: "USER_LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{ ...userState, userDispatch, loginUser, signupUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
