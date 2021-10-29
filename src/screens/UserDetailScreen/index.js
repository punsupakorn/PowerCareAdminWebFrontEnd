import { useState, useEffect } from "react";
import SearchIcon from "../../icons/search-icon";
import Add from "../../icons/add-paper";
import Edit from "../../icons/edit";
import CloseIcon from "../../icons/close-icon";
import Delete from "../../icons/delete";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { server } from "../../constants/constant";
import "./UserDetailScreen.css";
import { TableController } from "../../components";
export default function UserDetailScreen() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [sex, setsex] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [address, setaddress] = useState("");

  const [show, setShow] = useState(false);
  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };
  const location = useLocation();
  const { userid } = location.state;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUserProfile = () => {
    try {
      axios.get(`${server.USER_DETAIL}/${userid}`).then((res) => {
        const data = res.data;
        setfirstname(data.FirstName);
        setlastname(data.LastName);
        setsex(data.Sex);
        setdateOfBirth(data.DateOfBirth);
        setaddress(data.Address);
        setphone(data.Phone);
        setemail(data.Email);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getUserProfile();
  });

  return (
    <div className="content-body">
      <p class="text-xl mt-3 font-semibold">ระเบียนคนไข้</p>
      <div className="working-content">
        <div className="mt-2">
          <div className="  mx-auto bg-white rounded-md">
            {/* first */}
            <div className="flex flex-col justify-center items-center">
              <div
                className="
        flex
        justify-between
        items-center
        w-full
        py-3
        border-b-2 border-gray-200
      "
              >
                <p className="text-gray-500 ml-4">
                  <b>ชื่อ-สกุล :</b> {firstname} {lastname} <b>เพศ : </b>
                  {sex} <b>วัน/เดือน/ปีเกิด : </b>
                  {dateOfBirth}
                </p>
              </div>
              <div
                className="
        flex
        justify-between
        items-center
        w-full
        py-3
        border-b-2 border-gray-200
      "
              >
                <p className="text-gray-500 ml-4">
                  <b>ที่อยู่ :</b> {address}
                </p>
              </div>
              <div
                className="
        flex
        justify-between
        items-center
        w-full
        py-3
        border-b-2 border-gray-200
      "
              >
                <p className="text-gray-500 ml-4">
                  <b> เบอร์โทรศัพท์ :</b> {phone} <b>E-mail :</b> {email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="working-content">
          <div className="table-content">
            <div className="table-grid-userdetail header">
              {/* header table */}

              <p>วันที่</p>
              <p>เวลา</p>
              <p>แพทย์ที่พบ</p>
              <p>เบอร์โทรศัพท์</p>
              <p>สถานะ</p>
              <p>ดูข้อมูล/ลบข้อมูล</p>

              {/* end header */}
            </div>
            <div className="body-table">
              {/* body table */}
              {/* {officer.map((officerlist) => ( */}
              <div className="table-grid-userdetail">
                <p>17-08-64</p>
                <p>10.00-11.00</p>
                <p>ดาริส ปิณฑรัตนวิบูลย์</p>
                <p>093849586</p>
                <p>เสร็จสิ้น</p>

                <div className="menu-row">
                  <Link
                    to={{
                      pathname: `/usersummary`,
                      state: {
                        firstname: firstname,
                        lastname: lastname,
                        sex: sex,
                        address: address,
                        phone: phone,
                        dateOfBirth: dateOfBirth,
                        email: email,
                      },
                    }}
                  >
                    <Edit
                      {...iconOption}
                      // onClick={() => console.log("Click function edit ")}
                    />
                  </Link>
                  <Delete
                    {...iconOption}
                    onClick={handleShow}
                    // onClick={() =>
                    //   handleDelete(officerlist.DocumentID, officerlist.Position)
                    // }
                  />

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>คำเตือน</Modal.Title>
                    </Modal.Header>

                    <center>
                      <Modal.Body>คุณต้องการลบข้อมูลคนไข้ท่านนี้หรือไม่ ?</Modal.Body>
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
                        onClick={handleClose}
                        style={{
                          borderColor: "danger",
                          backgroundColor: "danger",
                        }}
                      >
                        ยืนยันลบคนไข้
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
