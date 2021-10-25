import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import { TableController } from "../../components";
import CloseIcon from "../../icons/close-icon";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Edit from "../../icons/edit";
import Delete from "../../icons/delete";
import { server } from "../../constants/constant";
import { Link } from "react-router-dom";
import { Modal, Pagination } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./ManageMedicineScreen.css";
import ReactPaginate from "react-paginate";

export default function ManageMedicineScreen() {
  // const [modalOpen, setModalOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  const [medicine, setMedicine] = useState([]);
  const [state, setstate] = useState();
  const [MedicineID, setMedicineID] = useState("");
  const [ReMedicine, setReMedicine] = useState("");
  const [Redescription, setRedescription] = useState("");
  const [RePrice, setRePrice] = useState("");
  const [Retype, setRetype] = useState("");

  const [PostMedicine, setPostMedicine] = useState("");
  const [PostDescription, setPostDescription] = useState("");
  const [PostPrice, setPostPrice] = useState("");
  const [PostType, setPostType] = useState("");

  const [offset, setOffset] = useState(0);
  // const [data, setMedicine] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  // const [currentPage , setCurrentPage] = useState();

  // ------------  medicine ยังไม่มี paginate ------------ 
  // const getMedicine = () => {
  //   axios.get(server.MEDICINE).then((res) => {
  //     setMedicine(res.data);
  //   });
  // };
  // ------------  medicine ยังไม่มี paginate ------------ 

  // Pagination
  // const getMedicine = async () => {
  //   const res = await axios.get(server.MEDICINE);
  //   const data = res.data;

    // ------------  ก้อนนี้ต้อง map ข้อมูลกับของเรา ------------ 
    // const slice = data.slice(offset, offset + perPage);
    // const postData = slice.map((med) => (
    //   <div key ={med.medicine}/>
    //   // <div key={med.id}>
    //   //   <p>{med.title}</p>
    //   //   <img src={med.thumbnailUrl} alt="" />
    //   // </div>
    // ));
    // setMedicine(postData);


     // ------------  ก้อนนี้ต้อง map ข้อมูลกับของเรา ------------ 
    
  //   setPageCount(Math.ceil(data.length / perPage));
  //   setMedicine(res.data);
  // };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };


  useEffect(() => {
    getMedicine()
  }, [offset]);

  // -------------------

  // useEffect(() => {
  //   getMedicine();
  // }, []);

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
          MedicineName: Name,
          MedicineDescription: Description,
          Price: Price,
          Type: Type,
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
  // const [searchInput, setSearchInput] = useState(null);
  // const [searched, setSearched] = useState(false);
  // data
  // const [data, setMedicine] = useState([medicine]);
  // // table
  // const [indexTable, setIndexTable] = useState(0);
  // const [numOfRow, setNumOfRow] = useState(10);
  // const numOfTable = Math.ceil(data.length / numOfRow);
  // const numberStartData = indexTable * numOfRow;
  // const dataLength = +numOfRow;
  // const numberEndData =
  //   numberStartData + dataLength > data.length
  //     ? data.length
  //     : numberStartData + dataLength;
  // if (indexTable >= numOfTable) setIndexTable(numOfTable - 1);

  // refresh page
  function refreshPage() {
    window.location.reload();
  }
  // function search
  // function search(text) {
  //   let nData = [];
  //   data.forEach((item, key) => {
  //     if (item.name.search(text) != -1) nData.push(item);
  //   });
  //   setMedicine(nData);
  // }

  const EditMedicine = (MedicineID) => {
    try {
      setSmShow(true);
      axios.get(`${server.MANAGE_MEDICINE}/${MedicineID}`).then((res) => {
        // console.log(res.data);
        const data = res.data;
        setReMedicine(data.MedicineName);
        setRedescription(data.MedicineDescription);
        setRePrice(data.Price);
        setRetype(data.Type);
        setMedicineID(MedicineID);
      });
    } catch (error) {
      return error;
    }
  };

  const handleNewName = (name) => {
    const data = name.target.value;
    setPostMedicine(data);
  };

  const handleNewDescription = (description) => {
    const data = description.target.value;
    setPostDescription(data);
  };

  const handleNewPrice = (price) => {
    const data = price.target.value;
    setPostPrice(data);
  };

  const handleNewType = (type) => {
    const data = type.target.value;
    setPostType(data);
  };
  const handleEdit = () => {
    try {
      // console.log(MedicineID);
      // console.log(Name);
      // console.log(Description);
      // console.log(Price);
      // console.log(Type);
      axios.put(server.MANAGE_MEDICINE, {
        MedicineID: MedicineID,
        Name: PostMedicine,
        Description: PostDescription,
        Price: PostPrice,
        Type: PostType,
      });
      // .then((res) => {
      //   const data = res.data;
      //   if (data == true) {
      //     window.alert("แก้ไขข้อมูลสำเร็จ");
      //     // history.push("/profile");
      //   }
      // });
    } catch (error) {}
  };

  const getSkincare = () => {
    axios.get(server.MEDICINE).then((res) => {
      const data = res.data;
      const skincare = data.filter((data) => data.Type == "ผลิตภัณฑ์บำรุงผิว");
      const slice = skincare.slice(offset, offset + perPage)
              const postData = slice.map(med => <div className="table-grid">
              <p> </p>
              <p>{med.MedicineName}</p>
              <p>{med.Price}</p>
              <p>{med.MedicineDescription}</p>
              <p>{med.Type}</p>
              <div className="menu-row">
                <Edit
                  {...iconOption}
                  onClick={() => EditMedicine(med.MedicineID)}
                />
        
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {" "}
                      แก้ไขยาและผลิตภัณฑ์
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
                              placeholder={ReMedicine}
                              onChange={handleNewName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              คำอธิบายเกี่ยวกับยา
                            </label>
                            <textarea
                              type="text"
                              className="px-4 pl-10 py-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder={Redescription}
                              onChange={handleNewDescription}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                              <label className="leading-loose">ราคา</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <input
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  placeholder={RePrice}
                                  onChange={handleNewPrice}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <label className="leading-loose">
                                ประเภท
                              </label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <select
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  onChange={handleNewType}
                                >
                                  <option disabled selected value>
                                    {Retype}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์บำรุงผิว"
                                  >
                                    {" "}
                                    ผลิตภัณฑ์บำรุงผิว{" "}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                                  >
                                    ผลิตภัณฑ์ทำความสะอาดหน้า
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                                  >
                                    ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์เสริมอาหาร"
                                  >
                                    ผลิตภัณฑ์เสริมอาหาร
                                  </option>
                                  <option
                                    className="option"
                                    value="ยารักษาโรค"
                                  >
                                    ยารักษาโรค
                                  </option>
                                </select>
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
                        onClick={handleEdit}
                      >
                        ยืนยันการแก้ไข
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
            </div>)
              setMedicine(postData)
              setPageCount(Math.ceil(data.length / perPage))
    });
  };

  const getCleanFace = () => {
    axios.get(server.MEDICINE).then((res) => {
      const data = res.data;
      const cleanface = data.filter((data) => data.Type == "ผลิตภัณฑ์ทำความสะอาดหน้า"
      );
      const slice = cleanface.slice(offset, offset + perPage)
              const postData = slice.map(med => <div className="table-grid">
              <p> </p>
              <p>{med.MedicineName}</p>
              <p>{med.Price}</p>
              <p>{med.MedicineDescription}</p>
              <p>{med.Type}</p>
              <div className="menu-row">
                <Edit
                  {...iconOption}
                  onClick={() => EditMedicine(med.MedicineID)}
                />
        
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {" "}
                      แก้ไขยาและผลิตภัณฑ์
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
                              placeholder={ReMedicine}
                              onChange={handleNewName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              คำอธิบายเกี่ยวกับยา
                            </label>
                            <textarea
                              type="text"
                              className="px-4 pl-10 py-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder={Redescription}
                              onChange={handleNewDescription}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                              <label className="leading-loose">ราคา</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <input
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  placeholder={RePrice}
                                  onChange={handleNewPrice}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <label className="leading-loose">
                                ประเภท
                              </label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <select
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  onChange={handleNewType}
                                >
                                  <option disabled selected value>
                                    {Retype}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์บำรุงผิว"
                                  >
                                    {" "}
                                    ผลิตภัณฑ์บำรุงผิว{" "}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                                  >
                                    ผลิตภัณฑ์ทำความสะอาดหน้า
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                                  >
                                    ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์เสริมอาหาร"
                                  >
                                    ผลิตภัณฑ์เสริมอาหาร
                                  </option>
                                  <option
                                    className="option"
                                    value="ยารักษาโรค"
                                  >
                                    ยารักษาโรค
                                  </option>
                                </select>
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
                        onClick={handleEdit}
                      >
                        ยืนยันการแก้ไข
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
            </div>)
              setMedicine(postData)
              setPageCount(Math.ceil(data.length / perPage))
    });
  };

  const getHeal = () => {
    axios.get(server.MEDICINE).then((res) => {
      const data = res.data;
      const heal = data.filter(
        (data) => data.Type == "ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
      );
      const slice = heal.slice(offset, offset + perPage)
              const postData = slice.map(med => <div className="table-grid">
              <p> </p>
              <p>{med.MedicineName}</p>
              <p>{med.Price}</p>
              <p>{med.MedicineDescription}</p>
              <p>{med.Type}</p>
              <div className="menu-row">
                <Edit
                  {...iconOption}
                  onClick={() => EditMedicine(med.MedicineID)}
                />
        
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {" "}
                      แก้ไขยาและผลิตภัณฑ์
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
                              placeholder={ReMedicine}
                              onChange={handleNewName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              คำอธิบายเกี่ยวกับยา
                            </label>
                            <textarea
                              type="text"
                              className="px-4 pl-10 py-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder={Redescription}
                              onChange={handleNewDescription}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                              <label className="leading-loose">ราคา</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <input
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  placeholder={RePrice}
                                  onChange={handleNewPrice}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <label className="leading-loose">
                                ประเภท
                              </label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <select
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  onChange={handleNewType}
                                >
                                  <option disabled selected value>
                                    {Retype}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์บำรุงผิว"
                                  >
                                    {" "}
                                    ผลิตภัณฑ์บำรุงผิว{" "}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                                  >
                                    ผลิตภัณฑ์ทำความสะอาดหน้า
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                                  >
                                    ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์เสริมอาหาร"
                                  >
                                    ผลิตภัณฑ์เสริมอาหาร
                                  </option>
                                  <option
                                    className="option"
                                    value="ยารักษาโรค"
                                  >
                                    ยารักษาโรค
                                  </option>
                                </select>
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
                        onClick={handleEdit}
                      >
                        ยืนยันการแก้ไข
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
            </div>)
              setMedicine(postData)
              setPageCount(Math.ceil(data.length / perPage))
    });
  };

  const getSupply = () => {
    axios.get(server.MEDICINE).then((res) => {
      const data = res.data;
      const supply = data.filter((data) => data.Type == "ผลิตภัณฑ์เสริมอาหาร");
      const slice = supply.slice(offset, offset + perPage)
              const postData = slice.map(med => <div className="table-grid">
              <p> </p>
              <p>{med.MedicineName}</p>
              <p>{med.Price}</p>
              <p>{med.MedicineDescription}</p>
              <p>{med.Type}</p>
              <div className="menu-row">
                <Edit
                  {...iconOption}
                  onClick={() => EditMedicine(med.MedicineID)}
                />
        
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {" "}
                      แก้ไขยาและผลิตภัณฑ์
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
                              placeholder={ReMedicine}
                              onChange={handleNewName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              คำอธิบายเกี่ยวกับยา
                            </label>
                            <textarea
                              type="text"
                              className="px-4 pl-10 py-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder={Redescription}
                              onChange={handleNewDescription}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                              <label className="leading-loose">ราคา</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <input
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  placeholder={RePrice}
                                  onChange={handleNewPrice}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <label className="leading-loose">
                                ประเภท
                              </label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <select
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  onChange={handleNewType}
                                >
                                  <option disabled selected value>
                                    {Retype}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์บำรุงผิว"
                                  >
                                    {" "}
                                    ผลิตภัณฑ์บำรุงผิว{" "}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                                  >
                                    ผลิตภัณฑ์ทำความสะอาดหน้า
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                                  >
                                    ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์เสริมอาหาร"
                                  >
                                    ผลิตภัณฑ์เสริมอาหาร
                                  </option>
                                  <option
                                    className="option"
                                    value="ยารักษาโรค"
                                  >
                                    ยารักษาโรค
                                  </option>
                                </select>
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
                        onClick={handleEdit}
                      >
                        ยืนยันการแก้ไข
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
            </div>)
              setMedicine(postData)
              setPageCount(Math.ceil(data.length / perPage))
    });
  };

  const getMedi = () => {
    axios.get(server.MEDICINE).then((res) => {
      const data = res.data;
      const medi = data.filter((data) => data.Type == "ยารักษาโรค");
      const slice = medi.slice(offset, offset + perPage)
              const postData = slice.map(med => <div className="table-grid">
              <p> </p>
              <p>{med.MedicineName}</p>
              <p>{med.Price}</p>
              <p>{med.MedicineDescription}</p>
              <p>{med.Type}</p>
              <div className="menu-row">
                <Edit
                  {...iconOption}
                  onClick={() => EditMedicine(med.MedicineID)}
                />
        
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {" "}
                      แก้ไขยาและผลิตภัณฑ์
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
                              placeholder={ReMedicine}
                              onChange={handleNewName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              คำอธิบายเกี่ยวกับยา
                            </label>
                            <textarea
                              type="text"
                              className="px-4 pl-10 py-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder={Redescription}
                              onChange={handleNewDescription}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                              <label className="leading-loose">ราคา</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <input
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  placeholder={RePrice}
                                  onChange={handleNewPrice}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <label className="leading-loose">
                                ประเภท
                              </label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <select
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  onChange={handleNewType}
                                >
                                  <option disabled selected value>
                                    {Retype}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์บำรุงผิว"
                                  >
                                    {" "}
                                    ผลิตภัณฑ์บำรุงผิว{" "}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                                  >
                                    ผลิตภัณฑ์ทำความสะอาดหน้า
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                                  >
                                    ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์เสริมอาหาร"
                                  >
                                    ผลิตภัณฑ์เสริมอาหาร
                                  </option>
                                  <option
                                    className="option"
                                    value="ยารักษาโรค"
                                  >
                                    ยารักษาโรค
                                  </option>
                                </select>
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
                        onClick={handleEdit}
                      >
                        ยืนยันการแก้ไข
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
            </div>)
              setMedicine(postData)
              setPageCount(Math.ceil(data.length / perPage))
    });
  };

  // const getMedi = () => {
  //   axios.get(server.MANAGE_MEDICINE).then((res) => {
  //     const data = res.data;
  //     const type = data.filter((data) => data.Type == "ยารักษาโรค");
  //     setType(type);
  //   });
  // };

  const getMedicine = async() => {
    const res = await axios.get(server.MEDICINE);
    const data = res.data;
              const slice = data.slice(offset, offset + perPage)
              const postData = slice.map(med => <div className="table-grid">
              <p> </p>
              <p>{med.MedicineName}</p>
              <p>{med.Price}</p>
              <p>{med.MedicineDescription}</p>
              <p>{med.Type}</p>
              <div className="menu-row">
                <Edit
                  {...iconOption}
                  onClick={() => EditMedicine(med.MedicineID)}
                />
        
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      {" "}
                      แก้ไขยาและผลิตภัณฑ์
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
                              placeholder={ReMedicine}
                              onChange={handleNewName}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              คำอธิบายเกี่ยวกับยา
                            </label>
                            <textarea
                              type="text"
                              className="px-4 pl-10 py-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder={Redescription}
                              onChange={handleNewDescription}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col">
                              <label className="leading-loose">ราคา</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <input
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  placeholder={RePrice}
                                  onChange={handleNewPrice}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <label className="leading-loose">
                                ประเภท
                              </label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                                <select
                                  type="text"
                                  className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                  onChange={handleNewType}
                                >
                                  <option disabled selected value>
                                    {Retype}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์บำรุงผิว"
                                  >
                                    {" "}
                                    ผลิตภัณฑ์บำรุงผิว{" "}
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                                  >
                                    ผลิตภัณฑ์ทำความสะอาดหน้า
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                                  >
                                    ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                                  </option>
                                  <option
                                    className="option"
                                    value="ผลิตภัณฑ์เสริมอาหาร"
                                  >
                                    ผลิตภัณฑ์เสริมอาหาร
                                  </option>
                                  <option
                                    className="option"
                                    value="ยารักษาโรค"
                                  >
                                    ยารักษาโรค
                                  </option>
                                </select>
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
                        onClick={handleEdit}
                      >
                        ยืนยันการแก้ไข
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
            </div>)
              setMedicine(postData)
              setPageCount(Math.ceil(data.length / perPage))
}

  return (
    <div className="content-body">
      <div className="medicine-content">
        <p className="text-xl mt-3 font-semibold">ผลิตภัณฑ์ทั้งหมด</p>

        <div class=" bg-indigo-300  w-full mt-4 main flex border rounded-full overflow-hidden  select-none">
          {/* <div class="title py-3 my-auto px-5 bg-indigo-300 text-white text-sm font-semibold mr-3">Gender</div> */}
          <label
            class=" ml-10 flex radio p-2 cursor-pointer"
            onClick={getMedicine}
          >
            <input
              class="my-auto transform scale-125"
              type="radio"
              name="sfg"
            />
            <div class="title py-2  px-2 color-white">ยาและผลิตภัณฑ์</div>
          </label>

          <label
            class=" ml-10 flex radio p-2 cursor-pointer"
            onClick={getSkincare}
          >
            <input
              class="my-auto transform scale-125"
              type="radio"
              name="sfg"
            />
            <div class="title py-2  px-2 color-white">ผลิตภัณฑ์บำรุงผิว</div>
          </label>

          <label class="flex radio p-2 cursor-pointer" onClick={getCleanFace}>
            <input
              class="my-auto transform scale-125"
              type="radio"
              name="sfg"
            />
            <div class="title py-2 px-2 color-white ">
              ผลิตภัณฑ์ทำความสะอาดผิวหน้า
            </div>
          </label>

          <label class="flex radio p-2 cursor-pointer" onClick={getHeal}>
            <input
              class="my-auto transform scale-125"
              type="radio"
              name="sfg"
            />
            <div class="title py-2 px-2 color-white">
              ผลิตภัณฑ์แก้แพ้ ผื่นคัน
            </div>
          </label>

          <label class="flex radio p-2 cursor-pointer" onClick={getSupply}>
            <input
              class="my-auto transform scale-125"
              type="radio"
              name="sfg"
            />
            <div class="title py-2 px-2 color-white">ผลิตภัณ์เสริมอาหาร</div>
          </label>

          <label class="flex radio p-2 cursor-pointer" onClick={getMedi}>
            <input
              class="my-auto transform scale-125 "
              type="radio"
              name="sfg"
            />
            <div class="title py-2 px-2 color-white">ยารักษาโรค</div>
          </label>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

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
              {medicine}
            </div>
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

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />

        <div className="px-2 ">
          <Link to="/">
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
                      <textarea
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
                          <select
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            onChange={handleType}
                          >
                            <option disabled selected value>
                              กรุณาเลือกประเภท
                            </option>
                            <option
                              className="option"
                              value="ผลิตภัณฑ์บำรุงผิว"
                            >
                              {" "}
                              ผลิตภัณฑ์บำรุงผิว{" "}
                            </option>
                            <option
                              className="option"
                              value="ผลิตภัณฑ์ทำความสะอาดหน้า"
                            >
                              ผลิตภัณฑ์ทำความสะอาดหน้า
                            </option>
                            <option
                              className="option"
                              value="ผลิตภัณฑ์แก้แพ้ ผื่นคัน"
                            >
                              ผลิตภัณฑ์แก้แพ้ ผื่นคัน
                            </option>
                            <option
                              className="option"
                              value="ผลิตภัณฑ์เสริมอาหาร"
                            >
                              ผลิตภัณฑ์เสริมอาหาร
                            </option>
                            <option className="option" value="ยารักษาโรค">
                              ยารักษาโรค
                            </option>
                          </select>
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
