import {
  UPDATE_TOKEN_AND_USER_DATA,
  UPDATE_USER_DATA,
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
  USER_LOGOUT,
} from "../constants/authStateConstants";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TOKEN_AND_USER_DATA:
      return {
        ...state,
        isLoggedIn: true,
        email: "", 
        password: "",
        userName: action.payload.foundUser.firstName,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    case USER_ALREADY_EXISTS:
      return {
        ...state,
        userExists: true,
      };

    case USER_NOT_FOUND:
      return {
        ...state,
        userNotFound: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
  }
};

// ---------------------

// export const reducer = (state, action) => {
//   if (action.type === "UPDATE_TOKEN_AND_USER_DATA") {
//     return {
//       ...state,
//       isLoggedIn: true,
//       email: "",
//       password: "",
//       userName: action.payload.foundUser.firstName,
//     };
//   }
//   if (action.type === "UPDATE_USER_DATA") {
//     return {
//       ...state,
//       email: action.payload.email,
//       password: action.payload.password,
//     };
//   }
//   if (action.type === "USER_ALREADY_EXISTS") {
//     return {
//       ...state,
//       userExists: true,
//     };
//   }
//   if (action.type === "USER_NOT_FOUND") {
//     return {
//       ...state,
//       userNotFound: true,
//     };
//   }
//   if (action.type === "USER_LOGOUT") {
//     return {
//       ...state,
//       isLoggedIn: false,
//     };
//   }
//   return state;
// };
