
export const reducer = (state, action) => {
  if (action.type === "UPDATE_TOKEN_AND_USER_DATA") {
    return {
      ...state,
      isLoggedIn: true,
      email: "",
      password: "",
      userName: action.payload.foundUser.firstName,
    };
  }
  if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  }
  if (action.type === "USER_ALREADY_EXISTS") {
    return {
      ...state,
      userExists: true,
    };
  }
  if (action.type === "USER_NOT_FOUND") {
    return {
      ...state,
      userNotFound: true,
    };
  }
  if (action.type === "USER_LOGOUT") {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  return state;
};
