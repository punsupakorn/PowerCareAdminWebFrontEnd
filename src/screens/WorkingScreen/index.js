import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import Add from "../../icons/add-paper";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from 'react-bootstrap';
import "./WorkingScreen.css";
import { TableController } from "../../components";
export default function WorkingScreen() {
  // // for search
  // const [data, setData] = useState(mockup);
  // const [isSearch, setIsSearch] = useState(false);
  // // data
  // const [date, setDate] = useState();
  // // table
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

  // // option icon ad edit delete
  // const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  // // data slice with table
  // const rowData = data
  //   .slice(numberStartData, numberEndData)
  //   .map((item, key) => (
  //     <div className="table-grid" key={key}>
  //       <p>{item.userid}</p>
  //       <p>{item.firstname}</p>
  //       <p>{item.lastname}</p>
  //       <p>{item.date}</p>
  //       <p>{item.time}</p>
  //       <div className="menu-row">
  //       <Link to="/workingdetail">
  //         <Add
  //           {...iconOption}
  //           onClick={() => console.log("Click function add " + item.id)}
  //         />
  //          </Link>
  //          <Link to="/postpone">
  //         <Edit
  //           {...iconOption}
  //           onClick={() => console.log("Click function edit " + item.id)}
  //         />
  //         </Link>
  //         <Link to="/confirmcancel">
  //         <Delete
  //           {...iconOption}
  //           onClick={() => console.log("Click function delete " + item.id)}
  //         />
  //         </Link>
  //       </div>
  //     </div>
  //   ));

  // // function search
  // function searchWithDate() {
  //   let nDate = [];
  //   if (!date) {
  //     return null;
  //   }
  //   data.forEach((item, index) => {
  //     console.log(new Date(item.date).getTime() === new Date(date).getTime());
  //     if (new Date(item.date).getTime() === new Date(date).getTime()) {
  //       console.log(item);
  //       nDate.push(item);
  //     }
  //   });
  //   setIsSearch(true);
  //   setData(nDate);
  // }

  const [searched, setSearched] = useState(false);
  const [working, setWorking] = useState([]);

  useEffect(() => {
    axios.get("/Working").then((res) => {
      setWorking(res.data);
    });
  }, []);

  const handleData = (AppointmentID) => {
    try {
      axios
        .post("/Working", {
          AppointmentID: AppointmentID,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {}
  };

  const refreshPage = () => {
    window.location.reload();
  };

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
      <div className="button-officelist ">
        <Link to="/appointment">
          <Button
            variant="secondary"
            style={{
              borderColor: "#818CF8",
              backgroundColor: "#818CF8",
              color: "white",
            }}
          >
            เพิ่มตารางเวลาการทำนัด
          </Button>
        </Link>{" "}
        <Link to="/schedule">
          <Button
            variant="secondary"
            style={{
              borderColor: "#818CF8",
              backgroundColor: "#818CF8",
              color: "white",
            }}
          >
            ตารางเวลาการทำนัด
          </Button>
        </Link>{" "}
        <Link to="/calendar">
          <Button
            variant="secondary"
            style={{
              borderColor: "#a5b4fe",
              backgroundColor: "#a5b4fe",
              color: "white",
            }}
          >
            ปฏิทินเวลาการทำนัด
          </Button>{" "}
        </Link>
      </div>
      <div className="working-content">
        <div className="table-content">
          <div className="table-grid-working header">
            {/* header table */}
            <p></p>
            <p>รหัสผู้ป่วย</p>
            <p>วันที่</p>
            <p>เวลา</p>
            <p>ชื่อ</p>
            <p>นามสกุล</p>
            <p>ดูข้อมูล/ลบข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}

            {working.map((working) => (
              <div className="table-grid-working">
                <p></p>
                <p>1001</p>
                <p>{working.Date}</p>
                <p>{working.Time}</p>
                <p>ดาริส</p>
                <p>ปิณฑรัตนวิบูลย์</p>

                <div className="menu-row">
                  <Link to="/workingdetail">
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
                      onClick={() => handleData(working.AppointmentID)}
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
