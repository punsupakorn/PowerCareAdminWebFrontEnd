import React, { useContext } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./Login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebaseConfig from "../../config";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router-dom";

// import {Link} from 'react-router-dom'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/homescreen" />;
  }
  return (
    <div className="login">
      <div className="container fixed-container mb-4">
        <div className="head-register">
          <img src={Powercarepic} alt="Powercare" className="Powercarepic" />
          <h2>Power Care Clinic </h2>
        </div>
        <div className="login-button">
          <form onSubmit={handleSubmit}>
            <center>
              <div className="mb-4-login">
                <label for="doctor-name" className="doctor-login">
                  {" "}
                  Email :{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
                  required
                  title="Must contain correct email form."
                />
              </div>
              <div className="mb-4-login">
                <label for="doctor-password"> Password : </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button className="btn btn-sc"> Login </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;