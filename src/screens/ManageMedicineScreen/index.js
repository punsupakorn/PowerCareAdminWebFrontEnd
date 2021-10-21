import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import { TableController } from "../../components";
import CloseIcon from "../../icons/close-icon";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";
import Edit from "../../icons/edit";
import Delete from "../../icons/delete";
import { server } from "../../constants/constant";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function ManageMedicineScreen() {
  // const [modalOpen, setModalOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  const [Stock, setStock] = useState("");
  const [medicine, setMedicine] = useState([]);
  const [state, setstate] = useState();

  const getMedicine = () => {
    axios.get(server.MEDICINE).then((res) => {
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

  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  const handleSubmit = async () => {
    try {
      await axios
        .post(server.MANAGE_MEDICINE, {
          Name: Name,
          Description: Description,
          Price: Price,
          Type: Type,
          Stock: Stock,
        })
        .then((res) => {
          console.log(res);
        });
      window.alert("เพื่มยาสำเร็จ");
      refreshPage();
    } catch (error) {}
  };
  //  Modal delete
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Modal add
  const [lgShow, setLgShow] = useState(false);
  // Modal Edit
  const [smShow, setSmShow] = useState(false);

  const handleToConfirmDelete = (MedicineID) => {
    setstate({ MedicineID });
    handleShow();
  };

  const handleDelete = (MedicineID) => {
    try {
      axios.delete(server.MANAGE_MEDICINE, {
        data: { MedicineID: MedicineID },
      });
      handleClose();
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div className="content-body">
      <div className="medicine-content">
        <div className="search-bar-container">
          {/* <h3 style={{ alignSelf: "flex-start" }}> ยา </h3> */}
          <p className="text-xl mt-3 font-semibold">ยาและผลิตภัณฑ์</p>
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
            <p>แก้ไข/ลบข้อมูล</p>
          </div>
          {/* end header */}

          <div className="body-table">
            {/* body table */}
            {/* {rowData} */}
            <div>
              {medicine.map((med) => (
                <div className="table-grid">
                  <p> </p>
                  <p>{med.MedicineName}</p>
                  <p>{med.Price}</p>
                  <p>{med.MedicineDescription}</p>
                  <p>{med.Type}</p>
                  <div className="menu-row">
                    <Edit {...iconOption} onClick={() => setSmShow(true)} />

                    <Modal
                      size="md"
                      show={smShow}
                      onHide={() => setSmShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          {" "}
                          เพิ่มยา
                        </Modal.Title>
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
                                  <label className="leading-loose">
                                    ประเภท
                                  </label>
                                  <div className="relative focus-within:text-gray-600 text-gray-400">
                                    <input
                                      type="text"
                                      className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      placeholder="กรอกประเภท"
                                      onChange={handleType}
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
                            style={{
                              borderColor: "#818CF8",
                              backgroundColor: "#818CF8",
                            }}
                            onClick={handleSubmit}
                          >
                            เพิ่มยา
                          </Button>
                        </Link>
                      </Modal.Footer>
                    </Modal>
                    <Delete
                      {...iconOption}
                      onClick={handleShow}
                      onClick={() => handleToConfirmDelete(med.MedicineID)}
                    />
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>คำเตือน</Modal.Title>
                      </Modal.Header>

                      <center>
                        <Modal.Body>
                          คุณต้องการลบผลิตภัณฑ์ยานี้หรือไม่ ?
                        </Modal.Body>
                      </center>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleClose}
                          style={{
                            borderColor: "#bdbdbd",
                            backgroundColor: "#bdbdbd",
                          }}
                        >
                          ย้อนกลับ
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(state.MedicineID)}
                        >
                          ตกลง
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              ))}
            </div>
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
            onClick={() => setLgShow(true)}
            style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
          >
            เพิ่มยา
          </Button>
          <Modal
            size="md"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {" "}
                เพิ่มยา
              </Modal.Title>
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
