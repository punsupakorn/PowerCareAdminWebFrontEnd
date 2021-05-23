import { useState,useEffect } from "react";
import Edit from "../../icons/edit";
import Delete from "../../icons/delete";
import "./OfficerListScreen.css";
import { TableController } from "../../components";
import axios from 'axios';


const OfficerListScreen=()=> {

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios.get("/officerlist").then((res) => {
      console.log(res);
      setDoctor(res.data);
    });
  }, [])

  // data
  // const [data] = useState(mockup);

  // table
  // const [indexTable, setIndexTable] = useState(0);
  // const [numOfRow, setNumOfRow] = useState(10);
  // const numOfTable = Math.ceil(doctor.length / numOfRow);
  // const numberStartData = indexTable * numOfRow;
  // const dataLength = +numOfRow;
  // const numberEndData =
  //   numberStartData + dataLength > doctor.length
  //     ? doctor.length
  //     : numberStartData + dataLength;
  // if (indexTable >= numOfTable) setIndexTable(numOfTable - 1);

  // option icon edit delete
  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  // data with table
  const rowData = doctor
    // .slice(numberStartData, numberEndData)
    .map((doctorlist) => (
      <div className="table-grid">
        <p>{doctorlist.FirstName}</p>
        <p>{doctorlist.LastName}</p>
        <p>{doctorlist.Position}</p>
        <div className="menu-row">
          <Edit
            {...iconOption}
            onClick={() => console.log("Click function edit ")}
          />
          <Delete
            {...iconOption}
            onClick={() => console.log("Click function delete ")}
          />
        </div>
      </div>
    ));


  return (
    <div className="content-body">
       <div className = "head-officerlist">
      <h2>รายชื่อบุคลากร</h2>
      <div className = "button-officelist">
   {/* <button className="btn btn-officerlist"> รายชื่อทั้งหมด</button>
   <button className="btn btn-officerlist"> รายชื่อเจ้าหน้าที่</button>
   <button className="btn btn-officerlist"> รายชื่อหมอ</button> */}
  </div>
        </div>
      <div className="working-content">
        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            {/* <p></p> */}
            <p>ชื่อ</p>
            <p>นามสกุล</p>
            <p>ตำแหน่ง</p>
            <p>แก้ไข/ลบข้อมูล</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {rowData}
            {/* end body table */}
          </div>
        </div>

        {/* <TableController
          indexTable={indexTable}
          setIndexTable={setIndexTable}
          numOfTable={numOfTable}
          setNumOfRow={setNumOfRow}
          numOfRow={numOfRow}
        /> */}
      </div>
    </div>
  );
}

// const mockup = [
//   {
//     id: "A001",
//     name: "นาย A",
//     position : "หมอ", 
//   },
// ];

export default OfficerListScreen;
