import { useState, useEffect } from "react";
import "./AppointmentScreen.css";
import axios from "axios";

const AppointmentScreen=()=> {
  const [doctor, setDoctor] = useState([]); 
  const [name, setName] = useState(""); 
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState(""); 
  const timeList = [
    "08:30 - 09:00",
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "13:30 - 14:00",
    "14:00 - 14:30",
    "14:30 - 15:00",
    "15:00 - 15:00",
    "15:00 - 15:30",
  ];

  useEffect(() => {
    axios.get("/Appointment").then((res) => {
      console.log(res);
      setDoctor(res.data);
    });
  }, []);

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };


  const handleTime = (e) =>{
    const time = e.target.value;
    setTime(arr =>[...arr,time].sort());
  }

  // console.log(doctor);
  // console.log(name);
  // console.log(date);
  // console.log(time);

  // Input Component
  function InputSchedule({ title, children }) {
    return (
      <div className="input-schedule">
        <p>{title}</p>
        <div className="input-schedule-content">{children}</div>
      </div>
    );
  }

  // แปลง Date
  const d = new Date(date);
  const thaiDate = d.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  function submit() {
    axios
       .post("/Appointment", {
         doctor: name,
         date: date,
         time: time,
       })
       .then((res) => {
         console.log(res);
      });
    if (time && date && doctor) {
      console.log({ name, date, time });
    }
  }
  // style when time-item active
  const styleActive = { backgroundColor: "#7e99b8", color: "white" };

  return (
    <div className="content-body">
      <h2>จัดการตารางเวลา</h2>
      {/* Input Doctor */}
      <div className="schedule-content">
        <InputSchedule title="เลือกหมอ" invalid>
          <select
            value={name}
            name="doctor-select"
            className="doctor-select"
            // onChange={(e) => setDoctor(e.target.value)}
            onChange={handleName}
          >
            <option value="" disabled selected>
              เลือกหมอ...
            </option>
            {doctor.map((doctorname) => (
              <option>
                {doctorname.FirstName} {doctorname.LastName}
              </option>
            ))}
          </select>
          <h3 style={{ position: "absolute", right: "3rem", top: "3.2rem" }}>
            ▼
          </h3>
        </InputSchedule>

        {/* Input Date */}
        <InputSchedule title="เลือกวันที่">
          <input
            type="date"
            className="date-picker"
            value={date || null}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </InputSchedule>

        {/* Input Time */}
        {date ? (
          <InputSchedule title="เลือกเวลา">
            <div className="time-picker">
              <p>คุณเลือก {thaiDate}</p>
              <div className="time-picker-content">
                {timeList.map((item) => (
                  <label className="time-item">
                    {/* <input
                      type="checkbox"
                      className="checkbox"
                      onChange={handleTime}
                      value={item}
                    /> */}
                    {item} 
                    {/* <span
                      className="check"
                      key={key}
                      style={time === item ? styleActive : null}
                    /> */}

                  </label>
                ))}
              </div>
            </div>
            <span className="button-submit" onClick={submit}>
              ยืนยัน
            </span>
          </InputSchedule>
        ) : null}
      </div>
    </div>
  );
}
export default AppointmentScreen ;
