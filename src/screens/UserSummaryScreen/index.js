import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./UserSummaryScreen.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function UserSummaryScreen() {
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-medium my-4">ข้อมูลอาการคนไข้</h3>
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
              <p className="text-gray-500 ml-4">
                <b> ข้อมูล ณ วันที่ 1/1/64 เวลา 10.30-11.00 </b>
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
                <b> แพทย์ที่พบ : สมรวย ฉลาดแฉลม </b>
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
                สรุปผลอาการ : นายศุภากร สองห้องนายศุภากร สองห้องนายศุภากร
                สองห้องนายศุภากร สองห้องนายศุภากร สองห้องนายศุภากร นายศุภากร
                สองห้องนายศุภากร สองห้องนายศุภากร สองห้อง
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
                ข้อมูลการให้ยา :
                ยายายายายยายายายายายยายายายายายยายายายายายยายายายายายยายายายายายยายายายายายยายายายายายยา
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 ">
          <Link to="/userdetail">
            {/* <button
              className="
          button-back
          w-30
          bg-gray-400
          text-white
          px-2
          py-2
          margin-left-2vh
          rounded-md
        "
            >
              ย้อนกลับ
            </button> */}
            <Button variant="secondary">ย้อนกลับ</Button>
          </Link>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default UserSummaryScreen;
