import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducers/authReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "./cartContext";
import { toast } from "react-toastify";

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
  const { dispatch } = useCart();
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

          console.log(foundUser);
          toast.success("Succesfully Signed In!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        dispatch({ type: "INVALID_USER_INPUT" });
        console.log(error);
        toast.warning(" User Not Found, Please SignUP", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
          toast.success("Succesfully Signed Up & In!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 422) {
          userDispatch({ type: "USER_ALREADY_EXISTS" });
          toast.warning("User Already Exists", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }
  };
  const logoutUser = () => {
    navigate("/");
    userDispatch({ type: "USER_LOGOUT" });
    toast.success("Logged OUT", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
