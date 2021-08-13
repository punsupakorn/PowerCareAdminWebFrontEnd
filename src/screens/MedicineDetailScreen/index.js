import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./MedicineDetailScreen.css";
import { Button } from "react-bootstrap";

function MedicineDetailScreen() {
  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-black font-medium my-4">สรุปค่าบริการ</h6>
            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
        
        "
            >
              <p className="text-gray-600 ml-4">ค่ายา</p>
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
            <Button variant="primary">บันทึกผล</Button>{" "}
            <Link to="/medicine">
              <Button variant="secondary">ย้อนกลับ</Button>
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
            </Link>
          </div>
        </center>
      </div>
      {/* end */}
    </div>
  );
}

export default MedicineDetailScreen;
