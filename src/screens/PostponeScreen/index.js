import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./PostponeScreen.css";
import { useState } from "react";
import { Button } from 'react-bootstrap';

function PostponeScreen() {
  const [date, setDate] = useState();
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-medium my-4">เลื่อนนัด</h3>
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
              <p className="text-gray-500 ml-4"> รหัสผู้ป่วย : A001</p>
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
                ชื่อ-สกุล : สมชาย ใจดี เพศ : ชาย วัน/เดือน/ปีเกิด : 9 กันยายน
                2542
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
                ที่อยู่ : 1047 ถนนตากสิน ซอยตากสิน 22 แขวงบุคคโล เขตธนบุรี
                กรุงเทพ 10600
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
                เบอร์โทร : 083-046-3915 E-mail : -
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
                <b> วันที่ทำนัดเดิม : 1/1/64</b>
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
                <b> เวลาที่ทำนัดเดิม : 10.30-11.00</b>
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
                 กรุณากรอกวัน และเวลาที่ต้องการทำนัดใหม่
              </p>
            </div>
            <div className=" -m-2 text-center">
              <div className=" p-2">
                <div className="  inline-flex items-center bg-white  text-black rounded-full p-2 ">
                  <span className="postpone-text inline-flex bg-indigo-300 text-white rounded-full h-6 px-3 justify-center items-center">
                    วันที่ทำนัดใหม่ :
                  </span>
                  <input
                    class="inline-flex  px-3"
                    placeholder="เลือกวันที่ทำนัด"
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className=" m-2 text-center">
              <div className="p-2">
                <div className=" inline-flex items-center bg-white  text-black rounded-full p-2 ">
                  <span className="postpone-text inline-flex bg-indigo-300 text-white rounded-full h-6 px-3 justify-center items-center">
                    เวลาทำนัดใหม่ :
                  </span>
                  <select
                    className="inline-flex  px-3"
                  >
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
          <Button variant="primary" 
          style={
            { borderColor: "#818CF8",
              backgroundColor: "#818CF8" }
         }>
           ถัดไป
          </Button>
          </Link>{" "}
          <Link to="/working">
             <Button variant="secondary" 
              style={
                { borderColor: "#bdbdbd",
                  backgroundColor: "#bdbdbd" }
             }>
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
