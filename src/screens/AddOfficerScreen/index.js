import React, { useState } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./AddOfficerScreen.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import firebaseConfig from "../../config";


const AddOfficerScreen = ()=> {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Position, setPosition] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleFirstName = (e) => {
    const firstname = e.target.value;
    setFirstName(firstname);
  };

  const handleLastName = (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };

  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const handlePosition = (e) => {
    const position = e.target.value;
    setPosition(position);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  console.log(FirstName);
  console.log(LastName);
  console.log(Phone);
  console.log(Position);
  console.log(Email);
  console.log(Password);

  const handleSubmit = () => {
    firebaseConfig.auth().createUserWithEmailAndPassword(Email, Password);
    axios
      .post("/registration", {
        FirstName: FirstName,
        LastName: LastName,
        Phone: Phone,
        Position: Position,
        Email: Email,
        Password: Password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="content-body">
      <div className = "head-addofficer">
      <img src={Powercarepic} alt="Powercare" className="Powercarepic" />
      <h2>เพิ่มบุคคลากร</h2>
      <Link to ="/officerlistscreen"><button className="btn btn-officerlistscreen"> รายชื่อเจ้าหน้าที่</button></Link>
      
      </div>
      
      {/* Input Date */}
    
      <div className="addofficer-content">
        <center>
        <div className="mb-3">
          <label for="doctor-name"> ชื่อจริง : </label>
          <input
            type="text"
            name="FirstName"
            className="form-control"
            placeholder="โปรดกรอกชื่อจริง"
            onChange={handleFirstName}
            required
          />
        </div>

        <div className="mb-3">
          <label for="doctor-name"> นามสกุล : </label>
          <input
            type="text"
            name="LastName"
            className="form-control"
            placeholder="โปรดกรอกนามสกุล"
            onChange={handleLastName}
            required
          />

          </div>

          <div className="mb-3">
            <label for="doctor-name"> เบอร์ติดต่อ : </label>
            <input
              type="tel"
              name="Phone"
              className="form-control"
              placeholder="โปรดกรอกหมายเลขโทรศัพท์"
              onChange={handlePhone}
              required
            />
          </div>
          <div className="mb-3">
            <label for="position"> ตำแหน่ง : </label>
            <select id="position" name='Position' className="form-control" onClick={handlePosition}>
              <option disabled selected value>
                {" "}
                โปรดระบุตำแหน่งงาน
              </option>
              <option className="option" value="Doctor">
                {" "}
                Doctor{" "}
              </option>
              <option className="option" value="Admin">

                Admin
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label for="doctor-name"> Email : </label>
            <input
              type="email"
              name = "Email"
              className="form-control"
              placeholder="โปรดกรอก Email"
              onChange={handleEmail}
              required
            />
          </div>

          <div className="mb-3">
            <label for="doctor-name"> Password : </label>
            <input
              type="password"
              name ="Password"
              className="form-control"
              placeholder="โปรดกรอก password (ไม่ต่ำกว่า 6 ตัวอักษร)"
              onChange={handlePassword}
              required
            />
          </div>
          <button onClick={handleSubmit} type='submit' className="btn btn-addofficer"> เพิ่มบุคคลากร</button>
          </center>
      </div>
    </div>
  );
}
export default AddOfficerScreen ;
