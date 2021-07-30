import { useState, useEffect } from "react";
import Edit from "../../icons/edit";
import { Link } from "react-router-dom";
import Delete from "../../icons/delete";
import "./OfficerListScreen.css";
import { TableController } from "../../components";
import axios from "axios";
import SearchIcon from "../../icons/search-icon";
import CloseIcon from "../../icons/close-icon";
import firebaseConfig from "../../config";

const OfficerListScreen = () => {
  const [officer, setOfficer] = useState([]);
  const [searched, setSearched] = useState(false);
  // const [doctor, setDoctor] = useState([]);

  const getOfficerList = () => {
    axios.get("/OfficerList").then((res) => {
      setOfficer(res.data);
    });
  };

  const getDoctor = () => {
    axios.get("/OfficerList").then((res) => {
      const data = res.data;
      const doctor = data.filter((data) => data.Position == "Doctor");
      setOfficer(doctor);
    });
  };

  const getAdmin = () => {
    axios.get("/OfficerList").then((res) => {
      const data = res.data;
      const admin = data.filter((data) => data.Position == "Admin");
      setOfficer(admin);
    });
  };

  useEffect(() => {
    getOfficerList();
  }, []);

  const handleDelete = (DocumentID, Position) => {
    // console.log("DocumentID : " + DocumentID + ", Position : " + Position);
    try {
      const res = axios.delete("/OfficerList", {
        data: { DocumentID: DocumentID, Position: Position },
      });
      console.log(JSON.stringify({ res: res }));
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  return (
    <div className="content-body">
      <div className="head-officerlist">
        <h2>รายชื่อบุคลากร</h2>
        <div className="search-bar-conten">
          <div className="p-12 h-12">
            <div className="bg-white flex items-center rounded-full shadow h-12">
              <input
                className="rounded-l-full w-full  h-12 py-4 px-4 text-gray-600 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              <div className="p-4">
                <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-200 focus:outline-none w-9 h-9 flex items-center justify-center">
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
        <div className="button-officelist">
          <button className="btn btn-officerlist" onClick={getOfficerList}> รายชื่อทั้งหมด</button>
          <button className="btn btn-officerlist" onClick={getDoctor}>
            {" "}
            รายชื่อหมอ
          </button>
          <button className="btn btn-officerlist" onClick={getAdmin}> รายชื่อเจ้าหน้าที่</button>
          <Link to="/addofficer">
            <button className="btn btn-officerlist "> เพิ่มบุคคลากร</button>
          </Link>
        </div>
      </div>

      <div className="working-content">
        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            <p>ชื่อ</p>
            <p>นามสกุล</p>
            <p>ตำแหน่ง</p>
            <p>อีเมลล์ </p>
            <p>เบอร์โทรศัพท์</p>
            <p>แก้ไข/ลบข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {officer.map((officerlist) => (
              <div className="table-grid">
                <p>{officerlist.FirstName}</p>
                <p>{officerlist.LastName}</p>
                <p>{officerlist.Position}</p>
                <p>{officerlist.Email}</p>
                <p>{officerlist.Phone}</p>

                <div className="menu-row">
                  <Edit
                    {...iconOption}
                    onClick={() => console.log("Click function edit ")}
                  />
                  <Delete
                    {...iconOption}
                    onClick={() =>
                      handleDelete(officerlist.DocumentID, officerlist.Position)
                    }
                  />
                </div>
              </div>
            ))}
            {/* {officer
              .filter((data) => !data.Position)
              .map((officerlist) => officerlist.Doctor)} */}
            {/* end body table */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerListScreen;
