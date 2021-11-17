import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./SummaryTreatmentScreen.css";
import { Button } from "react-bootstrap";

function SummaryTreatmentScreen() {
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <p class="text-xl mt-3 font-semibold">สรุปการรักษา</p>
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
                <b>ชื่อ-สกุล :</b> สมชาย ใจดี <b>เพศ :</b> ชาย <b>วัน/เดือน/ปีเกิด :</b> 9 กันยายน
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
                <b>ที่อยู่ :</b> 1047 ถนนตากสิน ซอยตากสิน 22 แขวงบุคคโล เขตธนบุรี
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
                <b>เบอร์โทร :</b> 083-046-3915 <b>E-mail :</b> -
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
                <b>ข้อมูลทำนัด :</b> วันที่ 1/1/64 เวลา 10.30-11.00 น.
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
              <p className=" text-gray-500 ml-4"><b>แพทย์ที่พบ :</b> สมรวย ฉลาดแฉลม</p>
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
              <p className=" text-gray-500 ml-4"><b>อาการเบื้องต้น:</b> </p>
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
            ></div>

            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
        
        "
            >
              <p className="text-gray-600 ml-4 font-bold">ค่ายาและบริการ</p>
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
              <p className="medicine-dt text-gray-500 ml-4 ">
                ยา A จำนวน 1 ขวด หน่วยละ 350 คิดเป็นเงิน 350 บาท
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
              <p className="medicine-dt text-gray-500 ml-4 ">
                ยา A จำนวน 1 ขวด หน่วยละ 350 คิดเป็นเงิน 350 บาท
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
              <p className="medicine-dt-right text-gray-500 ml-4 ">
                รวมเป็นเงิน <b>690</b> บาท
              </p>
            </div>
          </div>
          <br />
        </div>
        <center>
          <div className="px-2 ">
            {/* <button
            className="
            button-done
            w-45
            bg-blue-200
            text-white
            px-2
            py-2
            rounded-md
          "
          >
            บันทึกผล
          </button> */}
            <Button
              variant="primary"
              style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
            >
              บันทึกผล
            </Button>{" "}
            <Link to="/medicine">
              <Button
                variant="secondary"
                style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
              >
                ย้อนกลับ
              </Button>
            </Link>
          </div>
        </center>
      </div>
      {/* end */}
    </div>
  );
}

export default SummaryTreatmentScreen;
