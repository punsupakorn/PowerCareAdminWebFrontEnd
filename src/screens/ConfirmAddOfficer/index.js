import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Check from "../../icons/check";

function ConfirmAddOfficer() {
  return (
    <div className="content-body">
      <div className="flex items-center justify-center mt-10">
        {/* <!-- 1 card --> */}
        <div className="relative bg-indigo-50 py-6 px-6 rounded-3xl w-4/6 my-4 shadow-xl ">
          {/* <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-indigo-200 left-4 -top-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div> */}
          <div className="mt-8">
            <p className="text-xl  font-semibold my-2">เพิ่มบุคคลากรสำเร็จ</p>
            <p className="text-l  font-semibold my-2">
              กรุณาตรวจสอบความถูกต้อง
            </p>
            <div
                    className="
          flex
          justify-between
          items-center
          w-full
          py-3
          border-b-2 border-white
        "
                  >
                      </div>

            {/* <div className="flex justify-between">
            </div> */}
            <div className="mt-2">
                <div className="flex flex-col justify-center items-center">

                    <p className="text-gray-500 ml-4 mt-4" >
                      ชื่อ - สกุล : สมชาย ใจดี
                    </p>
                    <p className="text-gray-500 ml-4 mt-2">
                      หมายเลขโทรศัพท์ : 081-581-7128
                    </p>
                    <p className="text-gray-500 ml-4 mt-2  ">ตำแหน่งงาน : หมอ
                    </p>
                
   
                    <p className="text-gray-500 ml-4 mt-2 ">
                      อีเมลล์ : see_nong@hotmail.com
                    </p>
                  
                </div>
              </div>
              <div className="px-2 mt-4">
                <Link to="/addofficer">
                  <Button
                    variant="primary"
                    style={{
                      borderColor: "#818CF8",
                      backgroundColor: "#818CF8",
                    }}
                  >
                  เพิ่มบุคคลากรเพิ่มเติม
                  </Button>
                </Link>{" "}
                <Link to="/homescreenadmin">
                  <Button
                    variant="primary"
                    style={{
                      borderColor: "#bdbdbd",
                      backgroundColor: "#bdbdbd",
                    }}
                  >
                    กลับสู่หน้าหลัก
                  </Button>
                </Link>
              </div>
            </div>
          </div>
      </div>
      {/* end */}
    </div>
  );
}

export default ConfirmAddOfficer;
