import React, { useState } from "react";
// import Powercarepic from "../../img/Powerpuff.png";
import "./AddOfficerScreen.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import firebaseConfig from "../../config";
import { regEmail, regThaiChar, regPhoneNumber } from "../../regex";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const AddOfficerScreen = () => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Phone, setPhone] = useState();
  const [Position, setPosition] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const checkFirstName = (firstname) => {
    const data = firstname.target.value;
    setFirstName(data);
    const result = regThaiChar.test(FirstName);
    console.log(result);
    return result;
  };

  const checkLastName = (lastname) => {
    const data = lastname.target.value;
    setLastName(data);
    const result = regThaiChar.test(LastName);
    console.log(result);
    return result;
  };

  const checkPhone = (phone) => {
    const data = phone.target.value;
    setPhone(data);
    const result = regPhoneNumber.test(Phone);
    console.log(result);
    return result;
  };

  const checkEmail = (email) => {
    const data = email.target.value;
    setEmail(data);
    const result = regEmail.test(Email);
    return result;
    console.log(result);
  };

  const handlePosition = (e) => {
    const position = e.target.value;
    setPosition(position);
    console.log(position);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(Password);
  };

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    console.log(confirmPassword);
  };

  const handleSubmit = () => {
    try {
      if (Password !== ConfirmPassword) {
        console.log("Password Is Not Match !");
      } else if (FirstName || LastName || Phone || Email == false) {
        return false;
        //     axios
        //       .post("/AddOfficer", {
        //         FirstName: FirstName,
        //         LastName: LastName,
        //         Phone: Phone,
        //         Position: Position,
        //         Email: Email,
        //         Password: Password,
        //       })
        //       .then((res) => {
        //         console.log(res);
        //       });
        //   }
        // } catch (error) {
        //   return error;
      }
      // try {
      //   if (Password !== ConfirmPassword) {
      //     console.log("Password Is Not Match !");
      //     return false;
      //   } else if (!regEmail.test(Email)) {
      //     console.log("Wrong Pattern Email !");
      //     return false;
      //   } else if (!regThaiChar.test(FirstName)) {
      //     console.log("FirstName Is Wrong Pattern !");
      //     return false;
      //   } else if (!regThaiChar.test(LastName)) {
      //     console.log("LastName Is Wrong Pattern !");
      //     return false;
      //   } else if (!regPhoneNumber.test(Phone)) {
      //     console.log("Invalid Phone Number Pattern !");
      //     return false;
      //   } else {
      //     axios
      //       .post("/AddOfficer", {
      //         FirstName: FirstName,
      //         LastName: LastName,
      //         Phone: Phone,
      //         Position: Position,
      //         Email: Email,
      //         Password: Password,
      //       })
      //       .then((res) => {
      //         console.log(res);
      //       });
      //   }
    } catch (error) {}
  };

  return (
    <div className="content-body">
      <div className="flex h-screen   bg-white">
        <div
          className="w-1/2 bg-cover h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)",
          }}
        />
        <div className="md:w-1/2 max-w-lg mx-auto my-3 shadow-none">
          <div className="text-center p-0">
            <h1 className=" text-gray-800 text-3xl ">เพิ่มบุคลากร</h1>
            <h4 className="p-1 text-gray-700">สำหรับผู้ดูแลระบบ</h4>
          </div>
          <form>
            <div className="mt-4">
              <input
                type="text"
                name="FirstName"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกชื่อจริง (ภาษาไทย)"
                onChange={checkFirstName}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="LastName"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกนามสกุล (ภาษาไทย)"
                onChange={checkLastName}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="tel"
                name="Phone"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกหมายเลขโทรศัพท์"
                onChange={checkPhone}
                required
              />
            </div>
            <div className="  mt-3">
              <select
                required={require}
                id="position"
                name="Position"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                onClick={handlePosition}
              >
                <option disabled selected value>
                  {" "}
                  โปรดระบุตำแหน่งงาน
                </option>
                <option className="option" value="Doctor">
                  {" "}
                  หมอ{" "}
                </option>
                <option className="option" value="Admin">
                  เจ้าหน้าที่
                </option>
              </select>
            </div>
            <div className="mt-3">
              <input
                type="email"
                name="Email"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="โปรดกรอก อีเมลล์"
                onChange={checkEmail}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                name="Password"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="โปรดกรอก รหัสผ่าน (ไม่ต่ำกว่า 6 ตัวอักษร)"
                onChange={handlePassword}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                name="ConfirmPassword"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="ยืนยันรหัสผ่าน"
                onChange={handleConfirmPassword}
                required
              />
            </div>
            <Link to="/confirmaddofficer">
            <div className="mt-2">
                <Button
                  variant="secondary"
                  style={{ borderColor: "#a5b4fc", backgroundColor: "#a5b4fc"  }}
                  onClick={handleSubmit}
                >
                                  เพิ่มบุคคลากร
                </Button>{" "}
            </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddOfficerScreen;
