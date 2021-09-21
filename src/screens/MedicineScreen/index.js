import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import { InputNumber, TableController } from "../../components";
import "./MedicineScreen.css";
import CloseIcon from "../../icons/close-icon";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function MedicineScreen() {
  // const [modalOpen, setModalOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  const [Stock, setStock] = useState("");
  const [medicine, setMedicine] = useState([]);

  const getMedicine = () => {
    axios.get("/Medicine").then((res) => {
      setMedicine(res.data);
    });
  };

  useEffect(() => {
    getMedicine();
  }, []);

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handlePrice = (e) => {
    const price = e.target.value;
    setPrice(price);
  };

  const handleType = (e) => {
    const type = e.target.value;
    setType(type);
  };

  const handleStock = (e) => {
    const stock = e.target.value;
    setStock(stock);
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post("/Medicine", {
          Name: Name,
          Description: Description,
          Price: Price,
          Type: Type,
          Stock: Stock,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {}
  };

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
  const RowMedicine = () => {
    // const [disable, setDisable] = useState(amount ? false : true);
    return (
      <div>
        {medicine.map((med) => (
          <div className="table-grid">
            <p> </p>
            <p>{med.MedicineName}</p>
            <p>{med.Price}</p>
            <p>{med.MedicineDescription}</p>
            <p>{med.Type}</p>
            <p>{med.Stock}</p>
          </div>
        ))}
      </div>

      // <div className="menu-row">
      // <p>{" "}</p>
      // <p>{Medicine.Type}</p>
      // {/* <p>{Description}</p>
      // <p>{name}</p>
      // <p>{price}</p>
      // <p>{"111"}</p> */}
      // </div>

      // ))}
      // </div>
      // );
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

  // // function submit
  // const submit = () => {
  //   const report = data.filter((item) => item.amount != undefined);
  //   console.log({ report });
  // };

  return (
    <div className="content-body">
      <div className="medicine-content">
        <div className="search-bar-container">
          {/* <h3 style={{ alignSelf: "flex-start" }}> ยา </h3> */}
          <p class="text-xl mt-3 font-semibold">ยาและผลิตภัณฑ์</p>
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
                  <button className="bg-indigo-200 text-white rounded-full p-2 hover:bg-indigo-300 focus:outline-none w-9 h-9 flex items-center justify-center">
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

        <div className="table-content">
          {/* header table */}
          <div className="table-grid header">
            <p></p>
            <p>ชื่อยา</p>
            <p>ราคา</p>
            <p>คำอธิบาย</p>
            <p>ประเภท</p>
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
          <Link to="/workingdetail">
            <Button
              variant="secondary"
              style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
            >
              ย้อนกลับ
            </Button>
          </Link>{" "}
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
          >
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
                        onChange={handleName}
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
                        onChange={handleDescription}
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
                            onChange={handlePrice}
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
                            onChange={handleType}
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
                            onChange={handleStock}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </center>
            <Modal.Footer>
              <Link to="medicine">
                <Button
                  variant="primary"
                  style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
                  onClick={handleSubmit}
                >
                  เพิ่มยา
                </Button>
              </Link>
              <Button
                variant="secondary"
                style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }} 
              >
                ย้อนกลับ
              </Button>
            </Modal.Footer>
          </Modal>
          {/* </Link> */}
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
