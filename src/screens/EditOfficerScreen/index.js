import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router";
import { server } from "../../constants/constant";
import { regEmail, regThaiChar, regPhoneNumber } from "../../regex";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function EditOfficerScreen() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Position, setPosition] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  // const history = useHistory();
  const location = useLocation();
  const {
    state_DocumentID,
    state_FirstName,
    state_LastName,
    state_Phone,
    state_Position,
    state_Email,
  } = location.state;

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
    // console.log(result);
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

  const [lgShow, setLgShow] = useState(false);

  // const getOfficerProfile = () => {
  //   try {
  //     // axios
  //     //   .get(`${server.EDIT_OFFICER}/${position}/${documentid}`)
  //     //   .then((res) => {
  //     //     const data = res.data;
  //     //     setfirstname(data.FirstName);
  //     //     setlastname(data.LastName);
  //     //     setphone(data.Phone);
  //     //     setemail(data.Email);
  //     //     setPosition(data.Position);
  //     // setpassword(data.Password);
  //     // });
  //   } catch (error) {}
  // };

  // const checkFirstName = (firstname) => {
  //   const data = firstname.target.value;
  //   setfirstname(data);
  //   const result = regThaiChar.test(firstname);
  //   console.log(result);
  //   return result;
  // };

  return (
    <div className="content-body">
      <div className="grid min-h-screen place-items-center ">
        <div className="w-11/12 p-12 bg-indigo-100 sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">แก้ไขข้อมูลส่วนตัว </h1>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <form className="mt-6">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label className="block text-xs font-semibold text-gray-600 uppercase">
                  ชื่อจริง
                </label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder={state_FirstName}
                  onChange={checkFirstName}
                  className="block b-2 w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label className="block text-xs font-semibold text-gray-600 uppercase">
                  นามสกุล
                </label>
                <input
                  type="text"
                  // value={lastname}
                  name="LastName"
                  placeholder={state_LastName}
                  onChange={checkLastName}
                  className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              หมายเลขโทรศัพท์{" "}
            </label>
            <input
              // value={phone}
              type="tel"
              name="Phone"
              placeholder={state_Phone}
              onChange={checkPhone}
              required
              className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              ตำแหน่งงาน
            </label>
            <input
              disabled
              // value={Position}
              placeholder={state_Position}
              id="position"
              name="Position"
              className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
              // onClick={handlePosition}
              required
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              อีเมลล์{" "}
            </label>
            <input
            disabled
              // value={email}
              type="email"
              name="Email"
              placeholder={state_Email}
              // onChange={checkEmail}
              required
              className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
            />

            <div className="mt-2">
              {/* <Link to="/confirmaddofficer"> */}
              <Button
                variant="secondary"
                onClick={() => setLgShow(true)}
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-900shadow-lg "
                // onClick={handleSubmit}
              >
                เปลี่ยนรหัสผ่าน
              </Button>
              <Modal size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">

            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg" > เปลี่ยนรหัสผ่าน</Modal.Title>
            </Modal.Header>

            <center>
              <Modal.Body>
                <div className="divide-y divide-gray-200">
                  <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">รหัสผ่านเดิม</label>
                      <input
                        type="password"
                        className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="กรุณากรอกรหัสผ่านเดิม"
                        // onChange={handleName}
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">รหัสผ่านใหม่</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="password"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="กรุณากรอกรหัสผ่านใหม่"
                            // onChange={handlePrice}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">ยืนยันรหัสผ่าน</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="password"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="กรุณากรอกยืนยันรหัสผ่าน"
                            // onChange={handleType}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </center>
            <Modal.Footer>
              {/* <Link to="medicine"> */}
                <Button
                  variant="primary"
                  style={{ borderColor: "#818CF8", backgroundColor: "#818CF8"  }}
                  // onClick={handleSubmit}
                >
                  ยืนยันการเปลี่ยนรหัสผ่าน
                </Button>
              {/* </Link> */}
            </Modal.Footer>
          </Modal>
              <Button
              
                variant="secondary"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                // onClick={handleSubmit}
              >
                แก้ไขข้อมูลส่วนตัว
              </Button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditOfficerScreen;
