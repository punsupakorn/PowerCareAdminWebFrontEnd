import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./WorkingDetailScreen.css";
import { Button } from 'react-bootstrap';


function WorkingDetailScreen() {
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-medium my-4">อาการคนไข้</h3>
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
              <p className="text-gray-500 ml-4">รหัสผู้ป่วย : A001</p>
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
                ข้อมูลทำนัด : วันที่ 1/1/64 เวลา 10.30-11.00 น.
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
              <p className=" text-gray-500 ml-4">แพทย์ที่พบ : สมรวย ฉลาดแฉลม</p>
            </div>
            {/* <input
                  type="text"
                  id="code"
                  className="w-full py-2 border mt-3 border-gray-300 rounded-md"
                /> */}
            <br /> <h5>สรุปผลอาการ : </h5> <br />
            <textarea
              className="form-control Detail"
              placeholder="กรุณากรอกอาการคนไข้..."
              rows="5"
              cols="50"
            ></textarea>
          </div>
          <br />
          <div className="px-2 py-2 ">
          <Link to="/medicine">
          <Button variant="primary" 
          style={
            { borderColor: "#818CF8",
              backgroundColor: "#818CF8" }
         }>
        เพิ่มยา
          </Button>{' '}{' '}
          </Link>
        </div>
        </div>
        <div className="px-2 ">
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
            ยืนยัน
          </button>
          <Link to="/working">
          <button
          
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
          </button>
          </Link> */}
 <Link to="/medicine">
 <Button variant="primary" 
          style={
            { borderColor: "#818CF8",
              backgroundColor: "#818CF8" }
         }>
            บันทึกผล
          </Button>
          </Link>{" "}
          <Link to="/working">
          <Button variant="primary" 
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

export default WorkingDetailScreen;
