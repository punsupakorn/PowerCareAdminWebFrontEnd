import React from "react";
import { useState, useEffect ,Link} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { server } from "../../constants/constant";

function EditOfficerScreen() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [Position, setPosition] = useState("");
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
          // setPosition(data.Position);
          // setpassword(data.Password);
        });
    } catch (error) {}
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
                  type="text"
                  name="FirstName"
                  placeholder="daris"
                  // onChange={checkFirstName}
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
                  name="LastName"
                  placeholder="Pinta"
                  // onChange={checkLastName}
                  className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <div className="  mt-3">
              <input
                type="tel"
                name="Phone"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกหมายเลขโทรศัพท์"
                value={position}
                disabled
                // onChange={handlePhone}
              />
              {/* <select
                id="position"
                name="Position"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                // onClick={handlePosition}
              >
                <option disabled selected value>
                  {" "}
                  โปรดระบุตำแหน่งงาน
                </option>
                <option className="option" value="Doctor">
                  {" "}
                  หมอ{" "}
                </option>
                <option className="option" value={position}>
                  {position}
                </option>
              </select> */}
            </div>
            <div className="mt-3">
              <input
                type="email"
                name="Email"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="โปรดกรอก อีเมลล์"
                value={email}
                // onChange={handleEmail}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                name="Password"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="โปรดกรอก รหัสผ่าน (ไม่ต่ำกว่า 6 ตัวอักษร)"
                // onChange={handlePassword}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                name="ConfirmPassword"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="ยืนยันรหัสผ่าน"
                // onChange={handleConfirmPassword}
                required
              />
            </div>
            {/* <div className="mt-1 block p-3 text-sm text-xs text-gray-800">
              <input type="checkbox" className="inline-block border-0  " />
              <span display="inline" className>
                ยอมรับ
                <a className target="_blank" data-test="Link">
                  <span className="underline ">เงื่อนไข</span>{" "}
                </a>{" "}
              </span>
            </div> */}
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
