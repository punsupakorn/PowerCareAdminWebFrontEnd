import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import Add from "../../icons/add-paper";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./WorkingScreen.css";
import { TableController } from "../../components";
import { server } from "../../constants/constant";
export default function WorkingScreen() {
  const [searched, setSearched] = useState(false);
  const [working, setWorking] = useState([]);
  const [patient, setpatient] = useState("");

  useEffect(() => {
    axios.get(server.WORKING).then((res) => {
      // console.log(res.data);
      const data = res.data.arr;
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        setWorking(element);
      }
      
      // setWorking(res.data);
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  // get

  // const handleData = (AppointmentID) => {
  //   try {
  //     axios
  //       .post(server.WORKING, {
  //         AppointmentID: AppointmentID,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   } catch (error) {}
  // };

  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  return (
    <div className="content-body">
      <div className="head-officerlist">
        <p class="text-xl mt-3 font-semibold">ตารางปฏิบัติการ</p>
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
                <button className=" bg-indigo-200 text-white rounded-full p-2 hover:bg-indigo-300 focus:outline-none w-9 h-9 flex items-center justify-center">
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
          <div className="table-grid-working header">
            {/* header table */}
            <p></p>
            <p></p>
            <p>วันที่</p>
            <p>เวลา</p>
            <p>ชื่อคนไข้</p>
            <p></p>
            <p>ดูข้อมูล/ลบข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}

            {/* {working.map((working) => ( */}
            <div className="table-grid-working">
              <p></p>
              <p></p>
              <p>{working.Date}</p>
              <p>{working.Time}</p>
              <p>{working.UserID}</p>
              <p></p>

              <div className="menu-row">
                <Link to={`/workingdetail/&id=${working.AppointmentID}`}>
                  <Add
                    {...iconOption}
                    // onClick={() => console.log("Click function add " + item.id)}
                  />
                </Link>
                <Link to="/postpone">
                  <Edit
                    {...iconOption}
                    // onClick={() => console.log("Click function edit ")}
                  />
                </Link>
                <Link to="/confirmcancel">
                  <Delete
                    {...iconOption}
                    // onClick={() => handleData(working.AppointmentID)}
                  />
                </Link>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
