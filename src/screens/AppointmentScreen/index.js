import "./AppointmentScreen.css";
import SearchIcon from "../../icons/search-icon";
import CloseIcon from "../../icons/close-icon";
import { useState } from "react";
export default function AppointmentScreen() {
  
  // for search
  const [searchInput, setSearchInput] = useState(null);
  const [searched, setSearched] = useState(false);

  // function delete data ถ้าต่อ database โดยตรงแล้วไม่ต้องใช้
  function deleteDataTime(indexTime, indexDetail, indexDoctor) {
    let nTimeList = data[indexDoctor].detail[indexDetail].time;
    if (indexTime == 0) nTimeList.splice(indexTime, indexTime + 1);
    else nTimeList.splice(indexTime, indexTime);
    let nData = [...data];
    nData[indexDoctor].detail[indexDetail].time = nTimeList;
    console.log({ nTimeList });
    console.log({ data });
    setData(nData);
  }
  ////////////////////////////////////////////////////////

  // data
  const [data, setData] = useState(mockup);

  // function search
  function search(text) {
    let nData = [];
    data.forEach((item, key) => {
      if (item.name.search(text) != -1) nData.push(item);
    });
    setData(nData);
  }

  // refresh page
  function refreshPage() {
    window.location.reload();
  }
  // Card appointment component
  function CardAppointment(element, index) {
    return (
      <div key={index} className="card-appointment">
        <h3>{element.name}</h3>
        {element.detail.map((item, key) => {
          if (item.time.length == 0) return null;
          const d = new Date(item.date);
          const thaiDate = d.toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
          });
          return (
            <div key={key}>
              <p>{thaiDate}</p>
              <div className="time-item-content">
                {item.time.map((i, k) => (
                  <span key={k} className="time-item">
                    <CloseIcon
                      width="0.5rem"
                      hieght="0.5rem"
                      className="close"
                      onClick={() => deleteDataTime(k, key, index)}
                    />
                    {i}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
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
              search(searchInput);
              setSearched(true);
            }}
          />
        )}
      </div>
      <div className="appointment-content">{data.map(CardAppointment)}</div>
    </div>
  );
}

// ตัวอย่าง Data /////////////////////////////////////////
const mockup = [
  {
    name: "หมอ A",
    detail: [
      {
        date: "2021-05-10",
        time: ["08:00 - 08:30", "09:00 - 09:30", "11:30 - 12:00"],
      },
      {
        date: "2021-05-11",
        time: ["09:30 - 10:00", "10:00 - 10:30", "10:30 - 11:00"],
      },
    ],
  },
  {
    name: "หมอ B",
    detail: [
      {
        date: "2021-05-13",
        time: [
          "09:30 - 10:00",
          "10:00 - 10:30",
          "10:30 - 11:00",
          "11:00 - 11:30",
        ],
      },
      {
        date: "2021-05-12",
        time: ["08:00 - 08:30", "09:00 - 09:30", "11:30 - 12:00"],
      },
    ],
  },
  {
    name: "หมอ C",
    detail: [
      {
        date: "2021-05-13",
        time: [
          "09:30 - 10:00",
          "10:00 - 10:30",
          "10:30 - 11:00",
          "11:00 - 11:30",
        ],
      },
      {
        date: "2021-05-10",
        time: ["08:00 - 08:30", "09:00 - 09:30", "11:30 - 12:00"],
      },
      {
        date: "2021-05-12",
        time: ["08:00 - 08:30", "09:00 - 09:30", "11:30 - 12:00"],
      },
    ],
  },
];
