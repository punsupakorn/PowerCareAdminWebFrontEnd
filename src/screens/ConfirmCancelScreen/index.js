import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ConfirmCancelScreen.css";
import React, { useState } from "react";
// import { Modal } from "../../components";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function ConfirmCancelScreen() {
  // const [modalOpen, setModalOpen] = useState(false);
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-black font-medium my-4">ข้อมูลการนัด</h6>
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
              <p className="text-gray-500 ml-4">รหัสผู้ป่วย : A001</p>
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
                ชื่อ-สกุล : สมชาย ใจดี เพศ : ชาย วัน/เดือน/ปีเกิด : 9 กันยายน
                2542
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
                ที่อยู่ : 1047 ถนนตากสิน ซอยตากสิน 22 แขวงบุคคโล เขตธนบุรี
                กรุงเทพ 10600
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
                เบอร์โทร : 083-046-3915 E-mail : -
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
              <p className="text-gray-600 ml-4">
                ข้อมูลทำนัด : วันที่ 1/1/64 เวลา 10.30-11.00 น.
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
              <p className=" text-gray-500 ml-4">แพทย์ที่พบ : สมรวย ฉลาดแฉลม</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 ">
              <Button variant="danger" onClick={handleShow} className=" button-back">
     ยกเลิกการทำนัด
      </Button>{' '}
      <Button variant="secondary" className=" button-back"
      style={
        { borderColor: "#bdbdbd",
          backgroundColor: "#bdbdbd" }
     } >
        ย้อนกลับ
      </Button>
     
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>คำเตือน</Modal.Title>
        </Modal.Header>
        
        <center><Modal.Body>คุณต้องการยกเลิกการทำนัดนี้หรือไม่ ?</Modal.Body></center>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}
          style={
            { borderColor: "#bdbdbd",
              backgroundColor: "#bdbdbd" }
         }>
            ย้อนกลับ
          </Button>
          <Button variant="danger" onClick={handleClose}
          style={
            { borderColor: "danger",
              backgroundColor: "danger" }
         }>
            ยืนยันยกเลิกการทำนัด
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
    </div>
  );
}

export default ConfirmCancelScreen;
