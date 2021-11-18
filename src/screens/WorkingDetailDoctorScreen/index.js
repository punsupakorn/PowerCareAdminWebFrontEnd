import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../constants/constant";
import { useLocation } from "react-router";

function WorkingDetailDoctorScreen() {
  const location = useLocation();
  const { userID, username, date, time, symtoms, doctorname, status } =
    location.state;
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [sex, setsex] = useState("");
  const [email, setemail] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  
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
            <p class="text-xl mt-3 font-semibold">อาการคนไข้</p>
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
              <p className="text-gray-500 ml-4">
                <b>ข้อมูลทำนัด ณ</b> {displayThaiDate(date)} <b>เวลา</b> {time}
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
              <p className=" text-gray-500 ml-4">
                <b>แพทย์ที่พบ :</b> {doctorname}
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
              <p className=" text-gray-500 ml-4">
                <b>อาการเบื้องต้น:</b> {symtoms}
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
              <p className=" text-gray-500 ml-4">
                <b>สถานะการทำนัด:</b> {status}
              </p>
            </div>
            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
          mt-2
        "
            >
              <p className=" text-black ml-4 font-bold">สรุปผลอาการ: </p>
            </div>
            <textarea
              className="form-control Detail"
              placeholder="กรุณากรอกอาการคนไข้..."
              rows="5"
              cols="50"
            ></textarea>
          </div>
          <br />

          <div
            className="
          flex
          justify-between
          items-center
          w-full
          py-3
          mt-2
        "
          >
            <p className=" text-black ml-4 font-bold">จ่ายยา: </p>
          </div>

          <div className="medicine-content">
            <div className="table-content-medicine">
              {/* header table */}
              <div className="table-grid-medicine header">
                <p>ชื่อยา</p>
                <p>ประเภท</p>
                <p>จำนวน</p>
                <p>ราคา</p>
              </div>
              {/* end header */}

              <div className="body-table-medicine">
                <div className="table-grid-medicine content-medicine">
                  <p></p>
                  <p className="text-med"> </p>
                  <p></p>
                  <p className="text-med"></p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
          flex
          justify-between
          items-center
          w-full
          py-3
          mt-2
        "
          >
            <p className=" text-black ml-4 font-bold">ค่าบริการเพิ่มเติม: </p>
          </div>
        </div>
        <div className="px-2 ">
          {/* <Link to="/medicinedetail">
            <Button
              variant="primary"
              style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
            >
              บันทึกผล
            </Button>
          </Link>{" "} */}
          <Link to="/workingdoctor">
            <Button
              variant="primary"
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

export default WorkingDetailDoctorScreen;