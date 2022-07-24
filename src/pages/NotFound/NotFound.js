import React from "react";
import "../NotFound/NotFound.css";
import notFound from "../NotFound/notfoundpage.png";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <div className="container">
        <img className="not-found" src={notFound} alt="" />
        <h4>That brought you Nowwhere !</h4>
        <Link to="/">
          <button className="btn btn-primary home-btn">
            Back to home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export { NotFound };
