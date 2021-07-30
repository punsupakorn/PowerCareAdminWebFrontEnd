import { useState } from "react";
import SearchIcon from "../../icons/search-icon";
import Add from "../../icons/add-paper";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import { Link } from "react-router-dom";


import "./WorkingScreen.css";
import { TableController } from "../../components";
export default function WorkingScreen() {
  // for search
  const [data, setData] = useState(mockup);
  const [isSearch, setIsSearch] = useState(false);
  // data
  const [date, setDate] = useState();
  // table
  const [indexTable, setIndexTable] = useState(0);
  const [numOfRow, setNumOfRow] = useState(10);
  const numOfTable = Math.ceil(data.length / numOfRow);
  const numberStartData = indexTable * numOfRow;
  const dataLength = +numOfRow;
  const numberEndData =
    numberStartData + dataLength > data.length
      ? data.length
      : numberStartData + dataLength;
  if (indexTable >= numOfTable) setIndexTable(numOfTable - 1);

  // option icon ad edit delete
  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  // data slice with table
  const rowData = data
    .slice(numberStartData, numberEndData)
    .map((item, key) => (
      <div className="table-grid" key={key}>
        <p>{item.userid}</p>
        <p>{item.firstname}</p>
        <p>{item.lastname}</p>
        <p>{item.date}</p>
        <p>{item.time}</p>
        <div className="menu-row">
        <Link to="/workingdetail">
          <Add
            {...iconOption}
            onClick={() => console.log("Click function add " + item.id)}
          />
           </Link>
           <Link to="/postpone">
          <Edit
            {...iconOption}
            onClick={() => console.log("Click function edit " + item.id)}
          />
          </Link>
          <Link to="/cancel">
          <Delete
            {...iconOption}
            onClick={() => console.log("Click function delete " + item.id)}
          />
          </Link>
        </div>
      </div>
    ));

  // function search
  function searchWithDate() {
    let nDate = [];
    if (!date) {
      return null;
    }
    data.forEach((item, index) => {
      console.log(new Date(item.date).getTime() === new Date(date).getTime());
      if (new Date(item.date).getTime() === new Date(date).getTime()) {
        console.log(item);
        nDate.push(item);
      }
    });
    setIsSearch(true);
    setData(nDate);
  }

  // refresh page
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="content-body">
      <h2>ตารางปฏิบัติการ</h2>
      <div className="working-content">
        <div className="date-picker-content">

          {/* <input
            type="date"
            className="date-picker"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          /> */}
          
           <div className="p-8 h-12 ">
          <div className="bg-white flex items-center rounded-full shadow h-12">
 
            <input
              className="rounded-l-full w-full  h-12 py-4 px-4 text-gray-600 leading-tight focus:outline-none"
              id="search"
              type="date"
              value={date}
              placeholder="Search"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-200 focus:outline-none w-9 h-9 flex items-center justify-center">
              
          {isSearch ? (
            <span onClick={refreshPage} >
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
              onClick={searchWithDate}
            />
          )}
          </button>
            </div>
          </div>
        </div>

        </div>

        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            <p>รหัส</p>
            <p>ชื่อ</p>
            <p>นามสกุล</p>
            <p>วันที่</p>
            <p>เวลา</p>
            <p>แก้ไข/ยกเลิกนัด</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {rowData}
            {/* end body table */}
          </div>
        </div>

        <TableController
          indexTable={indexTable}
          setIndexTable={setIndexTable}
          numOfTable={numOfTable}
          setNumOfRow={setNumOfRow}
          numOfRow={numOfRow}
        />
      </div>
    </div>
  );
}

//////////////////////// Mockup Data //////
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .slice(0, 10);
}

const mockup = [
  {
    userid: "A001",
    firstname: "นายคิมอัน",
    lastname: "อุนจิอุนจิอุนจิอุนจิอุนจิอุนจิอุนจิอุนจิอุนจิ",
    date: randomDate(new Date(2021, 1, 2), new Date()),
    time: "11.00-11.30" 
  },
  // {
  //   id: "A002",
  //   name: "นาย B",
  //   date: randomDate(new Date(2021, 1, 2), new Date()),
  // },
  // {
  //   id: "A003",
  //   name: "นาย C",
  //   date: randomDate(new Date(2021, 1, 2), new Date()),
  // },
  // {
  //   id: "A004",
  //   name: "นาย D",
  //   date: randomDate(new Date(2021, 1, 2), new Date()),
  // },
  // {
  //   id: "A005",
  //   name: "นาย E",
  //   date: randomDate(new Date(2021, 1, 2), new Date()),
  // },
];
