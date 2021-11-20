import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../constants/constant";
import { useLocation } from "react-router";
import Delete from "../../icons/delete";
import SearchIcon from "../../icons/search-icon";

function WorkingDetailDoctorScreen() {
  const [searched, setSearched] = useState(false);
  const location = useLocation();
  const { userID, username, date, time, symtoms, doctorname, status } =
    location.state;
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [sex, setsex] = useState("");
  const [email, setemail] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");

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


  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  return (
    <div className="content-body">
      <div className="mt-2">
        <div className="  mx-auto bg-white rounded-md">
          {/* first */}
          <div className="flex flex-col justify-center items-center">
            <p class="text-xl mt-3 font-semibold">อาการคนไข้</p>
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
                <b>ชื่อ-สกุล :</b> {username} <b>เพศ :</b> {sex}{" "}
                <b>วัน/เดือน/ปีเกิด :</b> {displayThaiDate(dateofbirth)}
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
                <b>เบอร์โทร :</b> {phone} <b>E-mail :</b> {email}
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
                <b>อาการเบื้องต้น:</b> {symtoms}
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
                <b>สถานะการทำนัด:</b> {status}
              </p>
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
              <p className=" text-black ml-4 font-bold">สรุปผลอาการ: </p>
            </div>
            <textarea
              className="form-control Detail"
              placeholder="กรุณากรอกอาการคนไข้..."
              rows="5"
              cols="50"
            ></textarea>
          </div>
          <br />
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
            <p className=" text-black ml-4 font-bold">จ่ายยา: </p>
          </div>
          <div className=" m-2 text-center">
            <div className="p-2">
              <div className=" inline-flex items-center bg-white  text-black rounded-full p-2 ">
                <span className="postpone-text inline-flex bg-indigo-300 text-white rounded-full h-6 px-3 justify-center items-center">
                  กรุณาเลือกยาที่ต้องการ : 
                </span>

                <select
                  required={require}
                  id="position"
                  name="Position"
                  className="inline-flex  px-3 "
                  // onChange={handlePosition}
                >
                  <option disabled selected value>
                    {" "}
                    โปรดเลือกยา
                  </option>
                  <option className="option" value="แพทย์">
                    {" "}
                    พาราเซตามอลลี 
                  </option>
                </select>
                <SearchIcon
                      width="1.5rem"
                      hieght="1.5rem"
                      style={{ cursor: "pointer" }}
                    />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg rounded-md pin-r pin-y md:w-5/6 lg:w-5/6 ">
              <div className="flex-1">
                <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                  <thead>
                    <tr className="h-12 ">
                      <th className="hidden text-center md:table-cell">
                        ชื่อยา
                      </th>
                      <th className="hidden text-center md:table-cell">
                        ประเภท
                      </th>
                      <th className="lg:text-center text-left pl-5 lg:pl-0">
                        <span className="lg:hidden" title="Quantity">
                          Qtd
                        </span>
                        <span className="hidden lg:inline">จำนวน</span>
                      </th>
                      <th className="hidden text-center md:table-cell">ราคา</th>
                      <th className="hidden text-center md:table-cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="mb-2 ">พาราเซตามอลลี</p>
                      </td>
                      <td className="hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          ยากิน
                        </span>
                      </td>
                      <td className="justify-center  md:flex">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              defaultValue={0}
                              className="w-full rounded-md font-semibold text-center h-8 text-gray-700 bg-gray-100 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                          200
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                          <Delete {...iconOption} />
                        </span>
                      </td>
                    </tr>
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
                <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                  <thead>
                    <tr className="h-12 ">
                      <th className="hidden text-center md:table-cell">
                        รายละเอียด
                      </th>
                      <th className="hidden text-center md:table-cell">ราคา</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <input
                              type="text"
                              placeholder="กรุณากรอกรายละเอียด"
                              className="w-full rounded-md font-semibold text-center h-10 text-gray-700 bg-gray-100 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                      </td>
                      <td className="justify-center  md:flex">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="text"
                              defaultValue={0}
                              className="w-full rounded-md font-semibold h-10 text-center text-gray-700 bg-gray-100 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                          <Delete {...iconOption} />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <hr className="pb-6 mt-6" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 ">
          {/* <Link to="/medicinedetail">
            <Button
              variant="primary"
              style={{ borderColor: "#818CF8", backgroundColor: "#818CF8" }}
            >
              บันทึกผล
            </Button>
          </Link>{" "} */}
          <Link to="/usersummary">
            <Button
              variant="primary"
              style={{ borderColor: "#bdbdbd", backgroundColor: "#bdbdbd" }}
            >
              ถัดไป
            </Button>
          </Link>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default WorkingDetailDoctorScreen;
