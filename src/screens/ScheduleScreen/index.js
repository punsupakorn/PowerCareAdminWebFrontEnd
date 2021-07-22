import "./ScheduleScreen.css";
import SearchIcon from "../../icons/search-icon";
import CloseIcon from "../../icons/close-icon";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ScheduleScreen = () => {
  const [schedule, setSchedule] = useState([]);

  // for search
  const [searchInput, setSearchInput] = useState(null);
  const [searched, setSearched] = useState(false);

  // function search
  // function search(text) {
  //   let nData = [];
  //   data.forEach((item, key) => {
  //     if (item.name.search(text) != -1) nData.push(item);
  //   });
  //   setData(nData);
  // }

  // refresh page
  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    axios.get("/Schedule").then((res) => {
      // console.log(res);
      setSchedule(res.data);
    });
  }, []);

  // console.log(schedule);

  // const displayTime = (time) => {
  //   const timearray = [];
  //   for (let i = 0; i < time.length; i++) {
  //     const element = time[i];
  //     timearray.push(element);
  //   }
  //   // console.log(timearray);
  //   return timearray;
  // };

  return (
    <div className="content-body ">
      <h1>ตารางเวลาการทำนัด</h1>

      <div className="search-bar-conten">
        {/* <input
          type="text"
          className="search-bar"
          placeholder="ค้นหา..."
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        /> */}
        <div className="p-12 h-12 item-left">
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
      <Link to="/calendar">
      <button className="btn btn-addappointment"> ปฏิทินเวลา</button>
      </Link>
      <div className="appointment-content">
        {schedule.map((data) => (
          <div className="card-appointment">
            <br></br>
            <h3>ชื่อแพทย์ : {data.DoctorName}</h3>
            <br></br>
            <p>{data.Date}</p>
            <div className="time-item-content">
              <span className="time-item">
              {data.Time}
                <CloseIcon width="0.5rem" hieght="0.5rem" className="close" />
              </span>
              {/* {data.Time} */}
              {/* {displayTime(data.Time).map((t) => (
                <span className="time-item">
                  {t}
                  <CloseIcon
                    width="0.5rem"
                    hieght="0.5rem"
                    className="close"
                    // value={i}
                  />
                </span>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </div>

    
  );
};
export default ScheduleScreen;
