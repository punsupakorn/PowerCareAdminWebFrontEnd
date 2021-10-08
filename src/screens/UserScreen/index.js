import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import Add from "../../icons/add-paper";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { server } from "../../constants/constant";
import axios from "axios";

export default function UserScreen() {
  const [searched, setSearched] = useState(false);
  const [user, setuser] = useState([]);
  const [show, setShow] = useState(false);
  // const [state, setstate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllOfficer = () => {
    axios.get(server.USER).then((res) => {
      setuser(res.data);
    });
  };

  useEffect(() => {
    getAllOfficer();
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  // const handleToConfirmDelete = (UserID) => {
  //   setstate(UserID);
  //   handleShow();
  // };

  // const handleDelete = (UserID) => {
  //   try {
  //     axios.delete(server.USER, {
  //       data: { UserID: UserID },
  //     });
  //     handleClose();
  //     refreshPage();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(state);

  // console.log(state);

  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  return (
    <div className="content-body">
      <div className="head-officerlist">
        <p class="text-xl mt-3 font-semibold">ระเบียนคนไข้</p>
        <div className="search-bar-conten">
          <div className="p-12 h-12 ">
            <div className="bg-white flex items-center rounded-full shadow h-12">
              <input
                className="rounded-l-full w-full  h-12 py-4 px-4 text-gray-400 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              <div className="  p-4">
                <button className="  bg-indigo-200 text-white rounded-full p-2 hover:bg-indigo-300 focus:outline-none w-9 h-9 flex items-center justify-center">
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
      <div className="working-content">
        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            <p></p>
            <p>ชื่อ</p>
            <p>นามสกุล</p>
            <p>อีเมลล์ </p>
            <p>เบอร์โทรศัพท์</p>
            <p>ดูข้อมูลคนไข้</p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {/* {officer.map((officerlist) => ( */}
            {user.map((data) => (
              <div className="table-grid">
                <p></p>
                <p>{data.FirstName}</p>
                <p>{data.LastName}</p>
                <p>{data.Email}</p>
                <p>{data.Phone}</p>

                <div className="menu-row">
                  <Link to="/userdetail">
                    <Add
                      {...iconOption}
                      // onClick={() => console.log("Click function add " + item.id)}
                    />
                  </Link>
                  {/* <Delete
                    {...iconOption}
                    // onClick={() => handleToConfirmDelete(data.UserID)}
                  /> */}

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>คำเตือน</Modal.Title>
                    </Modal.Header>

                    <center>
                      <Modal.Body>คุณต้องการลบคนไข้ท่านนี้หรือไม่ ?</Modal.Body>
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
                        style={{
                          borderColor: "danger",
                          backgroundColor: "danger",
                        }}
                        // onClick={() => handleDelete(state)}
                      >
                        ยืนยันลบคนไข้
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
