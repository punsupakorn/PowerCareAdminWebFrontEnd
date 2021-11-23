import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./UserSummaryScreen.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";

function UserSummaryScreen() {
  const location = useLocation();
  // const { userid, date, time, doctorname, status } = location.state;
  // console.log(date, time, doctorname);
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <p class="text-xl mt-3 font-semibold">ข้อมูลอาการคนไข้</p>

            {/* <div
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
               <b>ชื่อ-สกุล :</b>  {firstname} {lastname} <b>เพศ :</b> {sex} <b>วัน/เดือน/ปีเกิด :</b> {dateOfBirth}
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
              <b>ที่อยู่ :</b> {address}
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
              <b>เบอร์โทรศัพท์ :</b> {phone} <b>E-mail :</b> {email}
              </p>
            </div> */}
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
                <b>
                  {" "}
                  ข้อมูล ณ วันที่ 
                  {/* {date}  */}
                  เวลา 
                  {/* {time} */}
                  {" "}
                </b>
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
                <b> แพทย์ที่พบ : 
                  {/* {doctorname}  */}
                  </b>
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
                <b> สถานะการทำนัด : 
                  {/* {status}  */}
                  </b>
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
                <b>สรุปผลอาการ :</b> นายศุภากร สองห้องนายศุภากร สองห้องนายศุภากร
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
                <b>ข้อมูลการให้ยา :</b> ยายายายายยายายายายายยายายายายายยายายายายายยายายายายายยายายายายายยายายายายายยายายายายายยา
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4 ">
          <Link
            to={{
              pathname: `/userdetail`,
              state: {
                // userid: userid,
              },
            }}
          >
            <Button
              variant="secondary"
              style={{
                borderColor: "#bdbdbd",
                backgroundColor: "#bdbdbd",
              }}
            >
              ย้อนกลับ
            </Button>{" "}
          </Link>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default UserSummaryScreen;
