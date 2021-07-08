import "./AppointmentScreen.css";
import SearchIcon from "../../icons/search-icon";
import CloseIcon from "../../icons/close-icon";
import { useState, useEffect } from "react";
import axios from "axios";

const AppointmentScreen =()=> {

  const [slot, setSlot] = useState([]);

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
  const refreshPage =()=> {
    window.location.reload();
  }


  useEffect(() => {
    axios.get("/Schedule").then((res) => {
      // console.log(res);
      setSlot(res.data);
    });
  }, []);

  // console.log(slot);

  const displayTime = (time) =>{
    const timearray = []
    for (let i = 0; i < time.length ; i++) {
      const element = time[i];
     timearray.push(element)
    }
    console.log(timearray);
    return timearray;
  }

  return (
    <div className="content-body">
      <h1>ตารางเวลาการทำนัด</h1>
      <div className="search-bar-conten">
        <input
          type="text"
          className="search-bar"
          placeholder="ค้นหา..."
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        {searched ? (
          <span onClick={refreshPage} className="button-clear-date">
            ล้าง
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
      </div>
      <div className="appointment-content">
      {slot.map((data) => (
          <div className="card-appointment">
            <br></br>
            <h3>ชื่อแพทย์ : {data.DoctorName}</h3>
            <br></br>
            <p>{data.Date}</p>
            <div className="time-item-content">         
                {(displayTime(data.Time)).map((t)=>(
               <span className="time-item">{t}
               <CloseIcon
                  width="0.5rem"
                  hieght="0.5rem"
                  className="close"
                  // value={i}
                /></span>
                ))}             
            </div>
          </div>
      ))}
        </div>
    </div>
  );
}
export default AppointmentScreen ;