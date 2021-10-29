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

  const getWorking = () => {
    try {
      axios.get(server.WORKING).then((res) => {
        const data = res.data;
        // for (let i = 0; i < data.length; i++) {
        //   const element = data[i];
        //   setWorking(element);
        // }
        // console.log(working);
        setWorking(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getWorking();
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
                type="date"
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
        <div className="table-content-working">
          <div className="table-grid-working header">
            {/* header table */}
            <p>วันที่</p>
            <p>เวลา</p>
            <p>ชื่อคนไข้</p>
            <p>ดูข้อมูล/เลื่อนนัด/ลบ</p>
            {/* end header */}
          </div>
          <div className="body-table-working">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}

            {working.map((working) => (
              <div className="table-grid-working">
                <p>{working.Date}</p>
                <p>{working.Time}</p>
                <p>{working.UserName}</p>

                <div className="menu-row">
                  <Link
                    to={{
                      pathname: `/workingdetail`,
                      state: {
                        // appointmentID: working.AppointmentID,
                        userID: working.UserID,
                        username: working.UserName,
                        date: working.Date,
                        time: working.Time,
                        symtoms: working.Initial_Symptoms,
                        doctorname: working.DoctorName,
                        doctorid: working.DoctorID,
                        status: working.Status,
                      },
                    }}
                  >
                    <Add
                      {...iconOption}
                      // onClick={() => console.log("Click function add " + item.id)}
                    />
                  </Link>
                  <Link
                    to={{
                      pathname: `/postpone`,
                      state: {
                        appointmentID: working.AppointmentID,
                        userID: working.UserID,
                        username: working.UserName,
                        date: working.Date,
                        time: working.Time,
                        symtoms: working.Initial_Symptoms,
                        doctorname: working.DoctorName,
                        doctorid: working.DoctorID,
                        oldtimetableid: working.TimeTableID,
                      },
                    }}
                  >
                    <Edit
                      {...iconOption}
                      // onClick={() => console.log("Click function edit ")}
                    />
                  </Link>
                  <Link
                    to={{
                      pathname: `/confirmcancel`,
                      state: {
                        appointmentID: working.AppointmentID,
                        userID: working.UserID,
                        username: working.UserName,
                        date: working.Date,
                        time: working.Time,
                        symtoms: working.Initial_Symptoms,
                        doctorname: working.DoctorName,
                        doctorid: working.DoctorID,
                      },
                    }}
                  >
                    <Delete
                      {...iconOption}
                      // onClick={() => handleData(working.AppointmentID)}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
