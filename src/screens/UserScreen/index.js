import { useState } from "react";
import SearchIcon from "../../icons/search-icon";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import Add from "../../icons/add-paper";
import { Link } from "react-router-dom";

export default function UserScreen() {
  const [searched, setSearched] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  return (
    <div className="content-body">
      <div className="head-officerlist">
        <h4>ระเบียนคนไข้</h4>
        <div className="search-bar-conten">
          <div className="p-12 h-12 ">
            <div className="bg-white flex items-center rounded-full shadow h-12">
              <input
                className="rounded-l-full w-full  h-12 py-4 px-4 text-gray-400 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              <div className="  p-4">
                <button className=" bg-blue-500 text-white rounded-full p-2 hover:bg-blue-200 focus:outline-none w-9 h-9 flex items-center justify-center">
                  {searched ? (
                    <span onClick={refreshPage}>
                      <CloseIcon
                        width="1rem"
                        hieght="1rem"
                        className="close"
                        // value={i}
                      />
                    </span>
                  ) : (
                    <SearchIcon
                      width="1.5rem"
                      hieght="1.5rem"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        // search(searchInput);
                        setSearched(true);
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="working-content">
        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            <p>รหัสผู้ป่วย</p>
            <p>ชื่อ</p>
            <p>นามสกุล</p>
            <p>อีเมลล์ </p>
            <p>เบอร์โทรศัพท์</p>
            <p>ดูข้อมูล/ลบข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}
            <div className="table-grid">
              <p>1001</p>
              <p>ดาริส</p>
              <p>ปิณฑรัตนวิบูลย์</p>
              <p>see_nong@hotmail.com</p>
              <p>093849586</p>

              <div className="menu-row">
                <Link to="/userdetail">
                  <Add
                    {...iconOption}
                    // onClick={() => console.log("Click function add " + item.id)}
                  />
                </Link>
                <Link to="/edituser">
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
  );
}
