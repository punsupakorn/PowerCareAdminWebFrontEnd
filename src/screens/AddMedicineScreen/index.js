import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./AddMedicineScreen.css";

function AddMedicineScreen() {
  return (
    <div className="content-body">
{/*
  UI Design Prototype
  Link : https://dribbble.com/shots/10452538-React-UI-Components
*/}
<div className=" py-10 flex flex-col justify-center ">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center space-x-5">
          {/* <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div> */}
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed justify-center">เพิ่มยา</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">ชื่อยา</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="กรุณากรอกชื่อยา" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">คำอธิบายเกี่ยวกับยา</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="กรุณากรอกคำอธิบาย" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">ราคา</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="กรอกราคา" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">ประเภท</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="กรอกประเภท" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">สต๊อกสินค้า</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="กรอกจำนวน" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 flex items-center space-x-4">
          <div className="px-4 ">
          <button
            className="
          button-done
          w-45
          text-white
          px-3
          py-2
          rounded-md
        "
          >
            เพิ่มยา
          </button>
          <Link to="/postpone">
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
          </Link>
        </div>
 </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default AddMedicineScreen;
