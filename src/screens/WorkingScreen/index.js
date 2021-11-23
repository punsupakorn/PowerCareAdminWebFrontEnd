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
import { useLocation } from "react-router";

export default function WorkingScreen() {
  const [searched, setSearched] = useState(false);
  // const [working, setWorking] = useState([]);
  // const [patient, setpatient] = useState("");
  const location = useLocation();
  const { doctorId } = location.state;
  const [today, settoday] = useState("");
  const [successAppointment, setsuccessAppointment] = useState([]);
  const [unsuccessAppointment, setunsuccessAppointment] = useState([]);
  const [date, setdate] = useState("");

  const handleDate = (e) => {
    const data = e.target.value;
    setdate(data);
  };

  const showToday = () => {
    const result = new Date().toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    // return result
    settoday(result);
  };

  const getWorking = () => {
    try {
      axios.get(server.WORKING).then((res) => {
        const data = res.data;
        const date = new Date().toLocaleDateString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        });
        const unsuccess = data.filter(
          (data) =>
            data.DoctorID == doctorId &&
            displayThaiDate(data.Date) == date &&
            data.Status == "ไม่สำเร็จ"
        );
        const success = data.filter(
          (data) =>
            data.DoctorID == doctorId &&
            displayThaiDate(data.Date) == date &&
            data.Status == "สำเร็จ"
        );
        setsuccessAppointment(success);
        setunsuccessAppointment(unsuccess);
        // setWorking(data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    showToday();
    getWorking();
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  // get

  const displayThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return result;
  };

  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  const searchDate = (dateSearch) => {
    try {
      axios.get(server.WORKING).then((res) => {
        const data = res.data;
        const today = data.filter(
          (data) => displayThaiDate(data.Date) == displayThaiDate(dateSearch)
        );
        console.log(today);
        // if (today[0] == undefined) {
        //   window.alert("ไม่พบตารางปฏิบัติการ");
        // } else {
        //   settoday(displayThaiDate(today));
        // const success = today.filter((data) => data.Status == "สำเร็จ");
        // const unsuccess = today.filter((data) => data.Status == "ไม่สำเร็จ");
        // setsuccessAppointment(success);
        // setunsuccessAppointment(unsuccess);
        // }
      });
      // axios.get(`${server.WORKING_DOCTOR}/${id}`).then((res) => {
      //   const data = res.data;
      //   const today = data.filter(
      //     (data) => displayThaiDate(data.Date) == displayThaiDate(dateSearch)
      //   );
      //   if (today[0] == undefined) {
      //     window.alert("ไม่พบตารางปฏิบัติการ");
      //   } else {
      //     settoday(displayThaiDate(date));
      //     const success = today.filter((data) => data.Status == "สำเร็จ");
      //     const unsuccess = today.filter((data) => data.Status == "ไม่สำเร็จ");
      //     setsuccessAppointment(success);
      //     setunsuccessAppointment(unsuccess);
      //   }
      // });
    } catch (error) {}
  };

  return (
    <div className="content-body">
      <div className="head-officerlist">
        <p class="text-xl mt-3 font-semibold">ตารางปฏิบัติการ</p>
        <div className="search-bar-conten">
          <div className="p-12 h-12 ">
            <div className="bg-white flex items-center rounded-full shadow h-12">
              <input
                onChange={handleDate}
                className="rounded-l-full w-full  h-12 py-4 px-4 text-gray-400 leading-tight focus:outline-none"
                id="search"
                type="date"
                placeholder="Search"
              />

              <div className="  p-4">
                <button
                  onClick={() => {
                    searchDate(date);
                  }}
                  className=" bg-indigo-200 text-white rounded-full p-2 hover:bg-indigo-300 focus:outline-none w-9 h-9 flex items-center justify-center"
                >
                  {searched ? (
                    <span >
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
      <div className="search-bar-container">
        {/* <h3 style={{ alignSelf: "flex-start" }}> ยา </h3> */}
        <p class="text-xl mt-3 ml-20 font-semibold text-black"> ชื่อแพทย์ : </p>
      </div>
      <div className="search-bar-container">
        {/* <h3 style={{ alignSelf: "flex-start" }}> ยา </h3> */}
        <p class="text-xl mt-3 ml-20 font-semibold text-black">
          {" "}
          ประจำวัน : {today}
        </p>
      </div>
      <div className="search-bar-container">
        {/* <h3 style={{ alignSelf: "flex-start" }}> ยา </h3> */}
        <p class="text-xl mt-3 ml-20 font-semibold text-red-500">
          {" "}
          สถานะ : ไม่สำเร็จ{" "}
        </p>
      </div>
      <div className="working-content">
        <div className="table-content-working">
          <div className="table-grid-working header">
            {/* header table */}
            <p>วันที่</p>
            <p>เวลา</p>
            <p>ชื่อคนไข้</p>
            <p>ดูข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table-working">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}

            {unsuccessAppointment.map((working) => (
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
      <div className="search-bar-container">
        {/* <h3 style={{ alignSelf: "flex-start" }}> ยา </h3> */}
        <p class="text-xl mt-3 ml-20 font-semibold text-green-500">
          {" "}
          สถานะ : สำเร็จ{" "}
        </p>
      </div>
      <div className="working-content">
        <div className="table-content-working">
          <div className="table-grid-working header">
            {/* header table */}
            <p>วันที่</p>
            <p>เวลา</p>
            <p>ชื่อคนไข้</p>
            <p>ดูข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table-working">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}

            {successAppointment.map((working) => (
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
                </div>
              </div>
            ))}
          </div>
          <div className="px-2 mt-3 ">
            <Link to="/selectworking">
              <Button
                variant="secondary"
                style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
              >
                ย้อนกลับ
              </Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
