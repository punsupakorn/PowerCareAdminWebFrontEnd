import { useState } from "react";
import SearchIcon from "../../icons/search-icon";
import { InputNumber, TableController } from "../../components";
import "./MedicineScreen.css";
import CloseIcon from "../../icons/close-icon";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddMedicineScreen } from "../../components";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function MedicineScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for search
  const [searchInput, setSearchInput] = useState(null);
  const [searched, setSearched] = useState(false);
  // data
  const [data, setData] = useState(mockup);
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

  // function row data creating
  const RowMedicine = ({ id, name, price, numberinstock, index, amount }) => {
    const [disable, setDisable] = useState(amount ? false : true);
    return (
      <div className="table-grid">
        <div className="menu-row">
          <input
            type="checkbox"
            checked={!disable}
            onChange={(e) => {
              let nData = data;
              nData[index] = { ...data[index], amount: undefined };
              setDisable(!e.target.checked);
              setData(nData);
            }}
          />
        </div>
        <p>{id}</p>
        <p>{name}</p>
        <div className="menu-row">
          <InputNumber
            disable={disable}
            value={amount}
            min={0}
            onChange={(number) => {
              let nData = data;
              nData[index] = { ...data[index], amount: number };
              setData(nData);
            }}
          />
        </div>
        <p>{price}</p>
        <p>{numberinstock}</p>
      </div>
    );
  };

  // data slice with table
  const rowData = data
    .slice(numberStartData, numberEndData)
    .map((item, key) => (
      <RowMedicine
        id={item.id}
        name={item.name}
        price={item.price}
        key={key}
        index={numberStartData + key}
        amount={item.amount}
        numberinstock={item.numberinstock}
      />
    ));

  // refresh page
  function refreshPage() {
    window.location.reload();
  }
  // function search
  function search(text) {
    let nData = [];
    data.forEach((item, key) => {
      if (item.name.search(text) != -1) nData.push(item);
    });
    setData(nData);
  }

  // function submit
  const submit = () => {
    const report = data.filter((item) => item.amount != undefined);
    console.log({ report });
  };

  return (
    <div className="content-body">
      <div className="medicine-content">
        <div className="search-bar-container">
          <h3 style={{ alignSelf: "flex-start" }}> ยา </h3>

          <div className="search-bar-conten">
            <div className="p-12 h-12">
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
        </div>
        <div className="button-officelist">
          {/* <Link to="/addmedicine"> */}
          {/* <button
              className="btn btn-officerlist"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              เพิ่มยา
            </button> */}
          <Button variant="primary" onClick={handleShow}
            style={
              { borderColor: "#818CF8",
                backgroundColor: "#818CF8" }
           }>
            เพิ่มยา
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>เพิ่มยา</Modal.Title>
            </Modal.Header>

            <center>
              <Modal.Body>
                <div className="divide-y divide-gray-200">
                  <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">ชื่อยา</label>
                      <input
                        type="text"
                        className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="กรุณากรอกชื่อยา"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">
                        คำอธิบายเกี่ยวกับยา
                      </label>
                      <input
                        type="text"
                        className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="กรุณากรอกคำอธิบาย"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">ราคา</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="กรอกราคา"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">ประเภท</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="กรอกประเภท"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">สต๊อกสินค้า</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="กรอกจำนวน"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </center>
            <Modal.Footer>
              <Button variant="primary" 
                style={
            { borderColor: "#818CF8",
              backgroundColor: "#818CF8" }
         }>
                เพิ่มยา
              </Button>
              <Button variant="secondary" 
              style={
                { borderColor: "#bdbdbd",
                  backgroundColor: "#bdbdbd" }
             }>
                ย้อนกลับ
              </Button>
            </Modal.Footer>
          </Modal>
          {/* </Link> */}
        </div>
        <div className="table-content">
          {/* header table */}
          <div className="table-grid header">
            <p></p>
            <p>รหัส</p>
            <p>ชื่อยา</p>
            <p>จำนวน</p>
            <p>ราคา</p>
            <p>สต๊อกสินค้า</p>
          </div>
          {/* end header */}

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
        <div className="px-2 ">
          {/* <button
            className="
            button-done
            w-45
            bg-blue-200
            text-white
            px-3
            py-2
            rounded-md
          "
          >
            ยืนยัน
          </button>
          <Link to="/workingdetail">
            <button
              className="
            button-back
            w-30
            bg-gray-400
            text-white
            px-2
            py-2
            margin-left-2vh
            rounded-md
          "
            >
              ย้อนกลับ
            </button>
          </Link> */}
          <Link to="/medicinedetail">
          <Button variant="primary" 
          style={
            { borderColor: "#818CF8",
              backgroundColor: "#818CF8" }
         }>
            บันทึกผล
          </Button>
          </Link>{" "}
          <Link to="/workingdetail">
          <Button variant="secondary" 
           style={
            { borderColor: "#bdbdbd",
              backgroundColor: "#bdbdbd" }
         }>
            ย้อนกลับ
          </Button>
          </Link>

        </div>
      </div>
      {/* {modalOpen && <AddMedicineScreen setOpenModal={setModalOpen} />} */}
    </div>
  );
}

//////////////////////// Mockup Data //////

const mockup = [
  {
    id: "C001",
    name: "ยา A",
    price: 100,
    numberinstock: "2",
  },
  // {
  //   id: "C002",
  //   name: "ยา B",
  //   price: 100,
  // },
  // {
  //   id: "C003",
  //   name: "ยา C",
  //   price: 100,
  // },
  // {
  //   id: "C004",
  //   name: "ยา D",
  //   price: 100,
  // },
  // {
  //   id: "C005",
  //   name: "ยา E",
  //   price: 100,
  // },
  // {
  //   id: "C006",
  //   name: "ยา F",
  //   price: 100,
  // },
  // {
  //   id: "C007",
  //   name: "ยา G",
  //   price: 100,
  // },
  // {
  //   id: "C008",
  //   name: "ยา H",
  //   price: 100,
  // },
  // {
  //   id: "C009",
  //   name: "ยา I",
  //   price: 100,
  // },
  // {
  //   id: "C010",
  //   name: "ยา J",
  //   price: 100,
  // },
  // {
  //   id: "C011",
  //   name: "ยา K",
  //   price: 100,
  // },
  // {
  //   id: "C012",
  //   name: "ยา L",
  //   price: 100,
  // },
  // {
  //   id: "C013",
  //   name: "ยา M",
  //   price: 100,
  // },
  // {
  //   id: "C014",
  //   name: "ยา N",
  //   price: 100,
  // },
  // {
  //   id: "C015",
  //   name: "ยา O",
  //   price: 100,
  // },
  // {
  //   id: "C016",
  //   name: "ยา P",
  //   price: 100,
  // },
  // {
  //   id: "C017",
  //   name: "ยา Q",
  //   price: 100,
  // },
  // {
  //   id: "C018",
  //   name: "ยา R",
  //   price: 100,
  // },
  // {
  //   id: "C019",
  //   name: "ยา S",
  //   price: 100,
  // },
  // {
  //   id: "C020",
  //   name: "ยา T",
  //   price: 100,
  // },
  // {
  //   id: "C021",
  //   name: "ยา U",
  //   price: 100,
  // },
  // {
  //   id: "C022",
  //   name: "ยา V",
  //   price: 100,
  // },
  // {
  //   id: "C023",
  //   name: "ยา W",
  //   price: 100,
  // },
  // {
  //   id: "C024",
  //   name: "ยา X",
  //   price: 100,
  // },
  // {
  //   id: "C025",
  //   name: "ยา Y",
  //   price: 100,
  // },
  // {
  //   id: "C026",
  //   name: "ยา Z",
  //   price: 100,
  // },
];
