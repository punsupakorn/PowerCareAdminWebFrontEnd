import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ConfirmCancelScreen.css";
import React from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { server } from "../../constants/constant";
import { useState, useEffect } from "react";
// import { Modal } from "../../components";
import { useHistory } from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function ConfirmCancelScreen() {
  const history = useHistory();
  const location = useLocation();
  const {
    appointmentID,
    userID,
    username,
    date,
    time,
    symtoms,
    doctorname,
    timetableID,
    doctorid,
  } = location.state;
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [sex, setsex] = useState("");
  const [email, setemail] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getWorkingDetail = () => {
    try {
      axios.get(`${server.WORKING_DETAIL}/${userID}`).then((res) => {
        setaddress(res.data.Address);
        setphone(res.data.Phone);
        setsex(res.data.Sex);
        setemail(res.data.Email);
        setdateofbirth(res.data.DateOfBirth);
      });
    } catch (error) {
      return error;
    }
  };

  const handleDelete = () => {
    try {
      axios
        .delete(server.CONFIRM_CANCEL, {
          data: {
            AppointmentID: appointmentID,
            TimeTableID: timetableID,
            Time: time,
          },
        })
        .then((res) => {
          if (res.data == true) {
            history.push({
              pathname: `/working`,
              state: {
                doctorId: doctorid,
              },
            });
          }
        });
      handleClose();
    } catch (error) {}
  };

  useEffect(() => {
    getWorkingDetail();
  }, []);

  const displayThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return result;
  };

  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
          <p class="text-xl mt-3 font-semibold">??????????????????????????????????????????</p>
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
                <b>????????????-???????????? :</b> {username} <b>????????? :</b> {sex}{" "}
                <b>?????????/???????????????/?????????????????? :</b> {displayThaiDate(dateofbirth)}
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
                <b>????????????????????? : </b>
                {address}
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
                <b>???????????????????????? :</b> {phone} <b>E-mail :</b> {email}
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
                <b>????????????????????????????????? ???</b> {displayThaiDate(date)} <b>????????????</b> {time}
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
              <p className=" text-gray-500 ml-4">
                <b>?????????????????????????????? :</b> {doctorname}
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
              <p className=" text-gray-500 ml-4">
                <b>?????????????????????????????????????????? :</b> {symtoms}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 mt-2">
        <Button variant="danger" onClick={handleShow} className=" button-back">
          ??????????????????????????????????????????
        </Button>{" "}
        <Link
          to={{
            pathname: `/working`,
            state: {
              doctorId: doctorid,
            },
          }}
        >
          <Button
            variant="secondary"
            className=" button-back"
            style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
          >
            ????????????????????????
          </Button>
        </Link>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>?????????????????????</Modal.Title>
          </Modal.Header>

          <center>
            <Modal.Body>?????????????????????????????????????????????????????????????????????????????????????????????????????? ?</Modal.Body>
          </center>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
            >
              ????????????????????????
            </Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              style={{ borderColor: "danger", backgroundColor: "danger" }}
            >
              ????????????????????????????????????????????????????????????
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
    </div>
  );
}

export default ConfirmCancelScreen;
