import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./UserSummaryScreen.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";

function UserSummaryScreen() {
  const location = useLocation();
  const {
    appointmentid,
    userid,
    description,
    otherservice,
    medicine,
    date,
    time,
    doctorname,
  } = location.state;
  // console.log(appointmentid, userid, description, medicine, otherservice);

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
            <p class="text-xl mt-3 font-semibold">สรุปข้อมูลการรักษาคนไข้</p>
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
                <b>
                  {" "}
                  ข้อมูล ณ วันที่ {displayThaiDate(date)} รอบเวลา {time}{" "}
                </b>
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
                <b> แพทย์ที่พบ :{doctorname} </b>
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
                <b>สรุปผลอาการ :</b> {description}
              </p>
            </div>
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
                      <th className="hidden text-center md:table-cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {choosemedicine.map((medicine) => ( */}
                    <tr>
                      {/* <tr key={medicine.MedicineName}> */}
                      <td>
                        <p className="mb-2"></p>
                        {/* <p className="mb-2 ">{medicine.MedicineName}</p> */}
                      </td>
                      <td className="hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          {/* {medicine.Type} */}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                          {/* {medicine.Price} */}
                        </span>
                      </td>
                      <td className="text-center">
                        <span
                          // onClick={() =>
                          //   handleDeleteMedicine(medicine.MedicineID)
                          // }
                          className="text-sm lg:text-base font-medium"
                        ></span>
                      </td>
                    </tr>
                    {/* ))} */}
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
                        <span className="text-sm lg:text-base font-medium"></span>
                      </td>
                      <td className="justify-center  md:flex">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <span className="text-sm lg:text-base font-medium"></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4 ">
          <Link
            to={{
              pathname: `/userdetail`,
              state: {
                // userid: userid,
              },
            }}
          >
            <Button
              style={{
                borderColor: "#818CF8",
                backgroundColor: "#818CF8",
                color: "white",
              }}
            >
              บันทึกผล
            </Button>
          </Link>{" "}
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default UserSummaryScreen;
