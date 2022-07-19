import React from "react";
import "../UserInfo/UserInfo.css";
import { useAuth } from "../../contexts/authContext";
function UserInfo() {
  const { userName, logoutUser } = useAuth();
  return (
    <div className="info-container">
      <h1 className="header-text header-large">User Account Info</h1>
      <div className="user-info">
        <h3>{userName}</h3>
        <h3>
          123, XYZ BSK Phase-3 <br />
          Bangalore, Karnataka, India
        </h3>
        <h3>PIN-CODE : 560 100</h3>
        <button
          onClick={() => {
            logoutUser();
          }}
        >
          <span>LOGOUT</span>
        </button>
      </div>
    </div>
  );
}

export { UserInfo };
