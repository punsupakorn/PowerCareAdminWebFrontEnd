import { useState, useEffect } from "react";
import "./ScheduleScreen.css";
import axios from "axios";

export default function ScheduleScreen() {
  const [doctor, setDoctor] = useState([]); //getAllDoctor จาก BackEnd
  const [name, setName] = useState(""); //handleชื่อหมอเพื่องส่งไปหลังบ้าน
  const [date, setDate] = useState(""); //handleวันที่
  const [time, setTime] = useState(""); //handleเวลา


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
  ];

  useEffect(() => {
    axios.get("/doctorslot").then((res) => {
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
  console.log(name);
  console.log(date);
  console.log(time);

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
       .post("/doctorslot", {
         doctor: name,
         date: date,
         time: time,
       })
       .then((res) => {
         console.log(res);
      });
    if (time && date && doctor) {
      // กดปุ่มยืนยัน
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
                {timeList.map((item, key) => (
                  <label className="time-item">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={handleTime}
                      value={item}
                    />
                    <span
                      className="check"
                      key={key}
                      style={time === item ? styleActive : null}
                    />
                    {item}
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

//////////////////////// Mockup Data //////
// const doctorList = ["หมอ A", "หมอ B", "หมอ C", "หมอ D", "หมอ E", "หมอ F"];

// import { useState, useEffect } from "react";
// import "./ScheduleScreen.css";

// const ScheduleScreen = () => {
//   const [doctor, setDoctor] = useState([]);
//   // const [name, setName] = useState("");
//   // const [date, setDate] = useState("");
//   // const [time, setTime] = useState("");
//   // const [slot,setSlot] = useState("");

//   const timeList = [
//     "08:30 - 09:00",
//     "09:00 - 09:30",
//     "09:30 - 10:00",
//     "10:00 - 10:30",
//     "10:30 - 11:00",
//     "11:00 - 11:30",
//     "11:30 - 12:00",
//     "13:30 - 14:00",
//     "14:00 - 14:30",
//     "14:30 - 15:00",
//     "15:00 - 15:00",
//   ];

//   useEffect(() => {
//     axios.get("/doctorslot").then((res) => {
//       console.log(res);
//       setDoctor(res.data);
//     });
//   }, []);

//   // const handleName = (e) => {
//   //   const name = e.target.value;
//   //   setName(name);
//   // };

//   // const handleDate = (e) => {
//   //   const date = e.target.value;
//   //   setDate(date);
//   // };

//   // const handleTime = (e) => {
//   //   const time = e.target.value;
//   //   setTime(time);
//   // };

//   // const handleSlot = ()=>{
//   //   slot = {name,date,time};
//   //   setSlot(slot);
//   // }

//   // console.log(doctor);
//   // console.log(name);
//   // console.log(date);
//   // console.log(time);
//   // console.log(slot);

//   // const submit = () => {
//   //   axios
//   //     .post("/doctorslot", {
//   //       doctor: name,
//   //       date: date,
//   //       time: time,
//   //     })
//   //     .then((res) => {
//   //       console.log(res);
//   //     });
//   //   if (time && date && doctor) {
//   //     // กดปุ่มยืนยัน
//   //     console.log({ time, date, doctor });
//   //   }
//   // };

//   // style when time-item active
//   const styleActive = { backgroundColor: "#7e99b8", color: "white" };

//   // Input Component
//   function InputSchedule({ title, children }) {
//     return (
//       <div className="input-schedule">
//         <p>{title}</p>
//         <div className="input-schedule-content">{children}</div>
//       </div>
//     );
//   }

//   // แปลง Date
//   // const d = new Date(date);
//   // const thaiDate = d.toLocaleDateString("th-TH", {
//   //   year: "numeric",
//   //   month: "long",
//   //   day: "numeric",
//   //   weekday: "long",
//   // });

//   return (
//     <div className="content-body">
//       <h2>จัดการตารางเวลา</h2>
//       {/* Input Doctor */}
//       <div className="schedule-content">
//         <InputSchedule title="เลือกหมอ" invalid>
//           <select
//             name="doctor-select"
//             className="doctor-select"
//             // value={name}
//             // onChange={handleName}
//             id="selectdoc"
//           >
//             <option value="" disabled selected>
//               เลือกหมอ...
//             </option>
//             {doctor.map((doctorname) => (
//               <option>
//                 {doctorname.FirstName} {doctorname.LastName}
//               </option>
//             ))}
//           </select>
//           <h3 style={{ position: "absolute", right: "3rem", top: "3.2rem" }}>
//             ▼
//           </h3>
//         </InputSchedule>

//         {/* Input Date */}
//         <InputSchedule title="เลือกวันที่">
//           <input
//             type="date"
//             className="date-picker"
//             // value={date || null}
//             // onChange={handleDate}
//           />
//         </InputSchedule>

//         {/* Input Time */}
//         {date ? (
//           <InputSchedule title="เลือกเวลา">
//             <div className="time-picker">
//               <p>คุณเลือก {thaiDate}</p>
//               <div className="time-picker-content">
//                 {timeList.map((item, key) => (
//                   <label className="time-item">
//                   <input type="checkbox" className ="checkbox"
//                   // onChange={handleTime}
//                   value={item}
//                   />
//                   <span className="check"
//                    key={key}
//                    style={time === item ? styleActive : null}
//                   onClick={() => setTime(item)}
//                    />
//                   {item}
//                 </label>
//               //    <label className="time-item">
//               //    <input type="checkbox" value={item}
//               //    onChange={handleTime}
//               //    />
//               //    <span className="check"
//               //     key={key}
//               //     style={time === item ? styleActive : null}
//               //    onClick={() => setTime(item)}
//               //     />
//               //    {item}
//               //  </label>
//                 ))}
//               </div>
//             </div>

//             <span className="button-submit"
//             //  onClick={submit}
//              >
//               ยืนยัน
//             </span>
//           </InputSchedule>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default ScheduleScreen;
