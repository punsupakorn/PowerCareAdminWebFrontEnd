import React, { useState } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./AddOfficerScreen.css";
import { Link } from "react-router-dom";
import axios from "axios";
import firebaseConfig from "../../config";

const AddOfficerScreen = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Position, setPosition] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
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

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const AddUserToFirbaseAuth = () => {
    const user = firebaseConfig.auth().createUserWithEmailAndPassword(Email,Password);
  }

  // console.log(FirstName);
  // console.log(LastName);
  // console.log(Phone);
  // console.log(Position);
  // console.log(Email);
  // console.log(Password);

  // const handleSubmit = () => {
  //   try {
  //     if (Password !== ConfirmPassword) {
  //       console.log("Error : Password Is Not Match !");
  //     } else {
  //       firebaseConfig.auth().createUserWithEmailAndPassword(Email, Password);
  //       axios
  //         .post("/AddOfficer", {
  //           FirstName: FirstName,
  //           LastName: LastName,
  //           Phone: Phone,
  //           Position: Position,
  //           Email: Email,
  //           Password: Password,
  //         })
  //         .then((res) => {
  //           console.log(res);
  //         });
  //     }
  //   } catch (error) {}
  // };

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
            <h1 className=" text-gray-800 text-3xl ">เพิ่มบุคคลากร</h1>
            <h3 className="p-1 text-gray-700">สำหรับแอดมิน</h3>
          </div>
          <form>
            <div className="mt-4">
              <input
                type="text"
                name="FirstName"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกชื่อจริง"
                onChange={handleFirstName}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="LastName"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกนามสกุล"
                onChange={handleLastName}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="tel"
                name="Phone"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกหมายเลขโทรศัพท์"
                onChange={handlePhone}
                required
              />
            </div>
            <div className="  mt-3">
              <select
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
                onChange={handleEmail}
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
            <div className="mt-1 block p-3 text-sm text-xs text-gray-800">
              <input type="checkbox" className="inline-block border-0  " />
              <span display="inline" className>
                ยอมรับ
                <a className target="_blank" data-test="Link">
                  <span className="underline ">เงื่อนไข</span>{" "}
                </a>{" "}
              </span>
            </div>
            <div className="mt-2">
              <button
                // onClick={handleSubmit}
                type="submit"
                className="button-done py-3 text-white w-full h-14 rounded"
              >
                {" "}
                เพิ่มบุคคลากร
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddOfficerScreen;
