import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./PostponeScreen.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";
import axios from "axios";
import { server } from "../../constants/constant";

function PostponeScreen() {
  const location = useLocation();
  const { userID, username, date, time, symtoms, doctorname } = location.state;
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [sex, setsex] = useState("");
  const [email, setemail] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  // const [date, setDate] = useState();

  const getWorkingDetail = () => {
    try {
      axios.get(`${server.WORKING_DETAIL}/${userID}`).then((res) => {
        setaddress(res.data.Address);
        setphone(res.data.Phone);
        setsex(res.data.Sex);
        setemail(res.data.Email);
        setdateofbirth(res.data.DateOfBirth);
      });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getWorkingDetail();
  }, []);

  const displayThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return result;
  };
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <p class="text-xl mt-3 font-semibold">เลื่อนนัด</p>
            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
          border-b-2 border-gray-200
        "
            >
              <p className="text-gray-500 ml-4">
                <b>ชื่อ-สกุล :</b> {username} <b>เพศ :</b> {sex}{" "}
                <b>วัน/เดือน/ปีเกิด :</b> {displayThaiDate(dateofbirth)}
              </p>
            </div>
            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
          border-b-2 border-gray-200
        "
            >
              <p className="text-gray-500 ml-4">
                <b>ที่อยู่ : </b>
                {address}
              </p>
            </div>
            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
          border-b-2 border-gray-200
        "
            >
              <p className="text-gray-500 ml-4">
                <b>เบอร์โทร :</b> {phone} <b>E-mail :</b> {email}
              </p>
            </div>
            <div
              className="
        flex
        justify-between
        items-center
        w-full
        py-3
        border-b-2 border-gray-200
      "
            >
              <p className="text-red-500 ml-4">
                <b> วันที่ทำนัดเดิม : {displayThaiDate(date)}</b>
              </p>
            </div>
            <div
              className="
        flex
        justify-between
        items-center
        w-full
        py-3
        border-b-2 border-gray-200
      "
            >
              <p className="text-red-500 ml-4">
                <b> เวลาที่ทำนัดเดิม : {time}</b>
              </p>
            </div>
            <div
              className="
        flex
        justify-between
        items-center
        w-full
        py-3
      "
            >
              <p className="text-black ml-4">
                กรุณาเลือกวัน และเวลาที่ต้องการทำนัดใหม่
              </p>
            </div>
            <div className=" -m-2 text-center">
              <div className=" p-2">
                <div className="  inline-flex items-center bg-white  text-black rounded-full p-2 ">
                  <span className="postpone-text inline-flex bg-indigo-300 text-white rounded-full h-6 px-3 justify-center items-center">
                    วันที่ทำนัดใหม่ :
                  </span>
                  <select className="inline-flex  px-3">
                    <option disabled selected value>
                      {" "}
                      เลือกวันที่การทำนัด
                    </option>
                    <option className="option" value="">
                      {" "}
                      11.00-12.00{" "}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" m-2 text-center">
              <div className="p-2">
                <div className=" inline-flex items-center bg-white  text-black rounded-full p-2 ">
                  <span className="postpone-text inline-flex bg-indigo-300 text-white rounded-full h-6 px-3 justify-center items-center">
                    เวลาทำนัดใหม่ :
                  </span>
                  <select className="inline-flex  px-3">
                    <option disabled selected value>
                      {" "}
                      เลือกเวลาการทำนัด
                    </option>
                    <option className="option" value="Doctor">
                      {" "}
                      11.00-12.00{" "}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 ">
          <Link to="/summarypostpone">
            {/* <button
            className="
          button-done
          w-45
          bg-blue-200
          text-white
          px-3
          py-2
          rounded-md
        "
          >
              
            ถัดไป
          </button> */}
            <Button
              variant="primary"
              style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
            >
              ถัดไป
            </Button>
          </Link>{" "}
          <Link to="/working">
            <Button
              variant="secondary"
              style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
            >
              ย้อนกลับ
            </Button>
          </Link>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default PostponeScreen;
