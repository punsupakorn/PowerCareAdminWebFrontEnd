import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";




function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <p>คำเตือน</p>
        <div className="body">
            
          <p>คุณต้องการยกเลิกการทำนัดนี้หรือไม่ ?</p>
        </div>
        <div className="footer">
          <button
            // onClick={() => {
            //   setOpenModal(false);
            // }}
            id="cancelBtn"
          >
            ยกเลิกการทำนัด
          </button>
          <Link>
          <button>ย้อนกลับ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;