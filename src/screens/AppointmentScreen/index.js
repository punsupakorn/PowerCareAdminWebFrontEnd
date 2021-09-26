import { useState, useEffect } from "react";
import "./AppointmentScreen.css";
import axios from "axios";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { server } from "../../constants/constant";

const AppointmentScreen = () => {
  const [doctor, setDoctor] = useState([]);
  const [name, setName] = useState();
  const [date, setDate] = useState([]);

  const timeList = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "13:00 - 14:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
  ];

  useEffect(() => {
    axios.get(server.APPOINTMENT).then((res) => {
      setDoctor(res.data);
    });
  }, []);

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  // const onChooseDate = (e) => {};

  // const onCancelDate = (e) => {};

  console.log("date : ", date);

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
  // const d = new Date(date);
  // const thaiDate = d.toLocaleDateString("th-TH", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   weekday: "long",
  // });

  // style when time-item active
  // const styleActive = { backgroundColor: "#7e99b8", color: "white" };

  // const transferDate = (date) => {
  //   new Date(date).toLocaleDateString();
  // };

  const submit = () => {
    axios
      .post(server.APPOINTMENT, {
        doctor: name,
        date: date,
        time: timeList,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="content-body mt-6">
      <p class="text-xl mt-3 font-semibold">จัดการตารางเวลา</p>

      {/* Input Doctor */}
      <div className="schedule-content mt-4">
        <InputSchedule title="เลือกหมอ" invalid>
          <select
            value={name}
            name="doctor-select"
            className="doctor-select"
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
          <h3 style={{ position: "absolute", right: "3rem", top: "4rem" }}>
            ▼
          </h3>
        </InputSchedule>

        {/* Input Date */}
        <InputSchedule title="เลือกวันที่">
          <DatePicker
            value={date}
            onChange={setDate}
            format={"DD/MM/YYYY"}
            style={{
              width: "100%",
              height: "50px",
              boxSizing: "border-box",
            }}
            placeholder=" กรุณาเลือกวันที่"
            multiple
            plugins={[<DatePanel />]}
          />
        </InputSchedule>

        <span className="button-submit" onClick={submit}>
          ยืนยัน
        </span>
      </div>
      <div>{/* {new Date(1631969687470).toLocaleDateString()} */}</div>
    </div>
  );
};
export default AppointmentScreen;
