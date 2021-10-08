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
            <p class="text-xl mt-3 font-semibold">ข้อมูลอาการคนไข้</p>

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
        <div className="px-4 mt-4 ">
          <Link to="/userdetail">
          <Button
            variant="secondary"
            style={{
              borderColor: "#bdbdbd",
              backgroundColor: "#bdbdbd"
            }}
          >
            ย้อนกลับ
          </Button>{" "}  </Link>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default UserSummaryScreen;
