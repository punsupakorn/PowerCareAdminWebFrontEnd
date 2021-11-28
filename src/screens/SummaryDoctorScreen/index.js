import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import User from "../../icons/user";
import { useLocation, useHistory } from "react-router";
import axios from "axios";
import { server } from "../../constants/constant";
import { useState, useEffect } from "react";

function SummaryDoctorScreen() {
  // const [appointmetid, setappointmetid] = useState("");
  const [description, setdescription] = useState("");
  const [medicinequantity, setmedicinequantity] = useState([]);
  const [otherservicedesc, setotherservicedesc] = useState("");
  const [otherserviceprice, setotherserviceprice] = useState("");
  const [totalprice, settotalprice] = useState("");
  const history = useHistory();
  const location = useLocation();
  const {
    appointmentid,
    treatmentid,
    username,
    symptom,
    date,
    time,
    doctorname,
    doctorId,
    userid,
  } = location.state;

  const displayThaiDate = (date) => {
    const result = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return result;
  };

  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = () => {
    try {
      axios.get(`${server.SUMMARY_DOCTOR}/${treatmentid}`).then((res) => {
        const data = res.data;
        setdescription(data.Description);
        setmedicinequantity(data.MedicineQuantity);
        setotherservicedesc(data.OtherServiceDescription);
        setotherserviceprice(data.OtherServicePrice);
        settotalprice(data.TotalPrice);
        // setappointmetid(data.AppointmentID);
      });
    } catch (error) {}
  };

  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <p class="text-xl mt-3 font-semibold">อาการคนไข้</p>
            <Link
              to={{
                pathname: `/userhistory`,
                state: {
                  // appointmentid: appointmentid,
                  userid: userid,
                  appointmentid: appointmentid,
                  treatmentid: treatmentid,
                  username: username,
                  symptom: symptom,
                  date: date,
                  time: time,
                  doctorname: doctorname,
                  doctorId: doctorId,
                  // userid: userid,
                },
              }}
            >
              <div
                className="
          flex
          justify-between
          items-right
          float
          w-full
          py-3
        "
              >
                <Button
                  variant="primary"
                  style={{ borderColor: "#a5b4fc", backgroundColor: "#a5b4fc" }}
                >
                  ประวัติการรักษา
                </Button>
              </div>
            </Link>
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
                <b>ชื่อ-สกุล :</b> {username}
                {/* <b>เพศ :</b> {sex} */}{" "}
                {/* <b>วัน/เดือน/ปีเกิด :</b> {displayThaiDate(dateofbirth)} */}
              </p>
            </div>
            {/* <div
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
                <b>ที่อยู่ : </b>
                {address}
              </p>
            </div> */}
            {/* <div
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
                <b>เบอร์โทร :</b> {phone} <b>E-mail :</b> {email}
              </p>
            </div> */}
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
                <b>ข้อมูลทำนัด ณ</b> {displayThaiDate(date)} <b>เวลา</b> {time}
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
                <b>แพทย์ที่พบ :</b> {doctorname}
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
                <b>อาการเบื้องต้น :</b> {symptom}
              </p>
            </div>
            {/* <div
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
                <b>สถานะการทำนัด :</b> {status}
              </p>
            </div> */}
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
                <b>คำแนะนำจากแพทย์ :</b>
                {description}
              </p>
            </div>
          </div>

          <div className="mt-2">
            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
          mt-2
        "
            >
              <p className=" text-black ml-4 font-bold">ค่าบริการยา: </p>
            </div>
            <div className="flex justify-center my-6">
              <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg rounded-md pin-r pin-y md:w-5/6 lg:w-5/6 ">
                <div className="flex-1">
                  <table
                    className="w-full text-sm lg:text-base"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr className="h-12 ">
                        <th className="hidden text-center md:table-cell">
                          ชื่อยา
                        </th>
                        <th className="hidden text-center md:table-cell">
                          จำนวน
                        </th>
                        <th className="lg:text-center text-left pl-5 lg:pl-0">
                          <span className="hidden lg:inline">ราคาต่อหน่วย</span>
                        </th>
                        {/* <th className="hidden text-center md:table-cell">
                          เป็นเงิน
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {medicinequantity.map((medicine) => (
                        <tr>
                          <td>
                            <p className="mb-2"></p>
                            {medicine.MedicineName}
                          </td>
                          <td className="hidden text-center md:table-cell">
                            <span className="text-sm lg:text-base font-medium">
                              {medicine.quantity}
                            </span>
                          </td>
                          <td className="text-center">
                            <span className="text-sm lg:text-base font-medium">
                              {medicine.Price} บาท
                            </span>
                          </td>
                          {/* <td className="text-center">
                            <span className="text-sm lg:text-base font-medium">
                              {medicine.Price * medicine.Quantity} บาท
                            </span>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <hr className="pb-6 mt-6" /> */}
                </div>
              </div>
            </div>

            <div
              className="
          flex
          justify-between
          items-center
          w-full
          py-3
          mt-2
        "
            >
              <p className=" text-black ml-4 font-bold">ค่าบริการเพิ่มเติม: </p>
            </div>

            <div className="flex justify-center my-6">
              <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg rounded-md pin-r pin-y md:w-5/6 lg:w-5/6 ">
                <div className="flex-1">
                  <table
                    className="w-full text-sm lg:text-base"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr className="h-12 ">
                        <th className="hidden text-center md:table-cell">
                          รายละเอียด
                        </th>
                        <th className="hidden text-center md:table-cell">
                          เป็นเงิน
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {otherservice.map((service) => ( */}
                      <tr>
                        <td>
                          <span className="text-sm lg:text-base font-medium">
                            {otherservicedesc}
                            {/* {service.Description} */}
                          </span>
                        </td>
                        <td className="justify-center  md:flex">
                          <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                              <span className="text-sm lg:text-base font-medium">
                                {otherserviceprice} บาท
                                {/* {service.Price} บาท */}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              className="
          flex
          justify-between
          items-right
          w-full
          py-3
          mt-2
        "
            >
              <p className=" text-black ml-4 font-bold ">
                รวมทั้งสิ้นเป็นเงิน : {totalprice} บาท{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 ">
        <Link
          to={{
            pathname: `/workingdoctor`,
            state: {
              id: doctorId,
            },
          }}
        >
          <Button
            variant="primary"
            style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
          >
            ย้อนกลับ
          </Button>
        </Link>
      </div>
      {/* end */}
    </div>
  );
}

export default SummaryDoctorScreen;
