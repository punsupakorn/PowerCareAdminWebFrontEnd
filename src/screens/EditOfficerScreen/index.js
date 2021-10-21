import React from "react";
import { useState, useEffect, Link } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { server } from "../../constants/constant";
import { regEmail, regThaiChar, regPhoneNumber } from "../../regex";

function EditOfficerScreen() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  const [Position, setPosition] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");
  const location = useLocation();
  const { position, documentid } = location.state;
  useEffect(() => {
    getOfficerProfile();
  });

  const getOfficerProfile = () => {
    try {
      axios
        .get(`${server.EDIT_OFFICER}/${position}/${documentid}`)
        .then((res) => {
          const data = res.data;
          setfirstname(data.FirstName);
          setlastname(data.LastName);
          setphone(data.Phone);
          setemail(data.Email);
          setPosition(data.Position);
          // setpassword(data.Password);
        });
    } catch (error) {}
  };

  const checkFirstName = (firstname) => {
    const data = firstname.target.value;
    setfirstname(data);
    const result = regThaiChar.test(firstname);
    console.log(result);
    return result;
  };

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
                  // value={firstname}
                  type="text"
                  name="FirstName"
                  placeholder={firstname}
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
                  placeholder={lastname}
                  // onChange={checkLastName}
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
              placeholder={phone}
              // onChange={checkPhone}
              required
              className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              ตำแหน่งงาน
            </label>
            <input
              // value={Position}
              placeholder={Position}
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
              // value={email}
              type="email"
              name="Email"
              placeholder={email}
              // onChange={checkEmail}
              required
              className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
            />

            <div className="mt-2">
              {/* <Link to="/confirmaddofficer"> */}
              <button
                variant="secondary"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                // onClick={handleSubmit}
              >
                แก้ไขข้อมูลส่วนตัว
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditOfficerScreen;
