import { useState } from "react";
import SearchIcon from "../../icons/search-icon";
import Add from "../../icons/add-paper";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import { Link } from "react-router-dom";
import "./UserDetailScreen.css";

import { TableController } from "../../components";
export default function UserDetailScreen() {
  // for search
  // data
  // table
  // const [indexTable, setIndexTable] = useState(0);
  // const [numOfRow, setNumOfRow] = useState(10);
  // const numOfTable = Math.ceil(data.length / numOfRow);
  // const numberStartData = indexTable * numOfRow;
  // const dataLength = +numOfRow;
  // const numberEndData =
  //   numberStartData + dataLength > data.length
  //     ? data.length
  //     : numberStartData + dataLength;
  // if (indexTable >= numOfTable) setIndexTable(numOfTable - 1);

  // option icon ad edit delete
  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };





  return (
    <div className="content-body">
      <h2>ระเบียนคนไข้</h2>
      <div className="working-content">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
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
              </div>
              </div>
              </div>

              <div className="working-content">
        <div className="table-content">
          <div className="table-grid-userdetail header">
            {/* header table */}

            <p>วันที่</p>
            <p>เวลา</p>
            <p>แพทย์ที่พบ</p>
            <p>เบอร์โทรศัพท์</p>
            <p>สถานะ</p>
            <p>แก้ไข/ลบข้อมูล</p>

            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}
            <div className="table-grid-userdetail">

            <p>17-08-64</p>
              <p>10.00-11.00</p>
              <p>ดาริส ปิณฑรัตนวิบูลย์</p>
              <p>093849586</p>
              <p>เสร็จสิ้น</p>

              <div className="menu-row">
              <Link to="/usersummary">
                  <Edit
                    {...iconOption}
                    // onClick={() => console.log("Click function edit ")}
                  />
              </Link>
                  <Delete
                    {...iconOption}
                    // onClick={() =>
                    //   handleDelete(officerlist.DocumentID, officerlist.Position)
                    // }
                  />
                </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

