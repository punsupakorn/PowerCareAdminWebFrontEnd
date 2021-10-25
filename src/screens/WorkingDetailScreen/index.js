import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./WorkingDetailScreen.css";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";
import axios from "axios";
import { server } from "../../constants/constant";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

function WorkingDetailScreen() {
  const location = useLocation();
  const { userID, username, date, time, symtoms, doctorname } = location.state;
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
                <b>อาการเบื่องต้น :</b> {symtoms}
              </p>
            </div>
            {/* <input
                  type="text"
                  id="code"
                  className="w-full py-2 border mt-3 border-gray-300 rounded-md"
                /> */}
            {/* <br /> <h5>สรุปผลอาการ : </h5> <br />
            <textarea
              className="form-control Detail"
              placeholder="กรุณากรอกอาการคนไข้..."
              rows="5"
              cols="50"
            ></textarea> */}
          </div>
          <br />
          {/* <div className="px-2 py-2 ">
            <Link to="/givemedicine">
              <Button
                variant="primary"
                style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
              >
                เพิ่มยา
              </Button>{" "}
            </Link>
          </div> */}
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
          <Link to="/working">
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

export default WorkingDetailScreen;
