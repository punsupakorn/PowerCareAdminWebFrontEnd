import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProfileScreen.css";
import { useLocation } from "react-router";
import axios from "axios";
import { server } from "../../constants/constant";
function ProfileScreen() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [position, setposition] = useState("");
  const [email, setemail] = useState("");
  const [documentid, setdocumentid] = useState("");
  const location = useLocation();
  const { uid } = location.state;

  const getProfile = () => {
    try {
      axios.get(`${server.PROFILE}/${uid}`).then((res) => {
        const data = res.data;
        setfirstname(data.FirstName);
        setlastname(data.LastName);
        setposition(data.Position);
        setemail(data.Email);
        setphone(data.Phone);
        setdocumentid(data.DocumentID);
        // console.log(res.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getProfile();
  });
  return (
    // <div className="content-body">
    //   <section className=" py-1 bg-blueGray-20">
    //     <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
    //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-20 border-0">
    //         <div className="rounded-t bg-white mb-0 px-6 py-6">
    //           <div className="text-center flex justify-between">
    //             <h6 className="text-blueGray-700 text-xl font-bold">
    //               ข้อมูลส่วนตัว
    //             </h6>
    //             <button
    //               className="bg-indigo-300 text-white active:bg-indigo-300 uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
    //               type="button"
    //             >

    //               แก้ไขข้อมูลส่วนตัว
    //             </button>
    //           </div>
    //         </div>

    //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0  active:bg-pink-600 ">
    //           <hr className=" border-b-1 border-blueGray-300" />
    //           <form>
    //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
    //             <div className="flex flex-wrap">
    //               <div className="w-full lg:w-6/12 px-4">
    //                 <div className="relative w-full mb-3">
    //                   <label className="block text-blueGray-600 font-8 font-bold mb-2">
    //                     ชื่อจริง (ภาษาไทย)
    //                   </label>
    //                   {/* <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="lucky.jesse" /> */}
    //                   <div className="mt-4" >
    //                     <input
    //                       type="text"
    //                       name="FirstName"
    //                       className="show-profile p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
    //                       placeholder="ซีซี่"
    //                       //  value={firstname}
    //                       //    onChange={handleFirstName}
    //                       readOnly
    //                     >

    //                     </input>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="w-full lg:w-6/12 px-4">
    //                 <div className="relative w-full mb-3">
    //                   <label className="block text-blueGray-600 font-8 font-bold mb-2">
    //                     นามสกุล (ภาษาไทย)
    //                   </label>
    //                   {/* <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="lucky.jesse" /> */}
    //                   <div className="mt-4">
    //                     <input
    //                       type="text"
    //                       name="FirstName"
    //                       className="show-profile  p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
    //                       placeholder="คัดกิ่งรัก"
    //                       //  value={firstname}
    //                       //    onChange={handleFirstName}
    //                       readOnly
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="w-full lg:w-6/12 px-4">
    //                 <div className="relative w-full mb-3">
    //                   <label className="block text-blueGray-600 font-8 font-bold mb-2">
    //                     หมายเลขโทรศัพท์
    //                   </label>
    //                   {/* <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="lucky.jesse" /> */}
    //                   <div className="mt-4">
    //                     <input
    //                       type="text"
    //                       name="FirstName"
    //                       className="show-profile p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
    //                       placeholder="0938475847"
    //                       //  value={firstname}
    //                       //    onChange={handleFirstName}
    //                       readOnly
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="w-full lg:w-6/12 px-4">
    //                 <div className="relative w-full mb-3">
    //                   <label className="block text-blueGray-600 font-8 font-bold mb-2">
    //                     ตำแหน่งงาน
    //                   </label>
    //                   {/* <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="lucky.jesse" /> */}
    //                   <div className="mt-4">
    //                     <input
    //                       type="text"
    //                       name="FirstName"
    //                       className="show-profile p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
    //                       placeholder="หมอ"
    //                       //  value={firstname}
    //                       //    onChange={handleFirstName}
    //                       readOnly
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <hr className="mt-6 border-b-1 border-blueGray-300" />
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="content-body">
      <div className="grid min-h-screen place-items-center ">
        <div className="w-11/12 p-12 bg-indigo-100 sm:w-8/12 md:w-1/2 lg:w-5/12">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              ข้อมูลส่วนตัว
            </h6>
            <Link
              to={{
                pathname: `/editofficer`,
                state: {
                  state_DocumentID : documentid,
                  state_FirstName: firstname,
                  state_LastName: lastname,
                  state_Phone: phone,
                  state_Position: position,
                  state_Email: email,
                },
              }}
            >
              <button className="bg-indigo-300 text-white active:bg-indigo-300 uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                แก้ไขข้อมูลส่วนตัว
              </button>
            </Link>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          {/* <form className="mt-6"> */}
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label className="block text-xs font-semibold text-gray-600 uppercase">
                ชื่อจริง
              </label>
              <input
                type="text"
                name="FirstName"
                value={firstname}
                // onChange={checkFirstName}
                className="block b-2 w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
                readOnly
              />
            </span>
            <span className="w-1/2">
              <label className="block text-xs font-semibold text-gray-600 uppercase">
                นามสกุล
              </label>
              <input
                type="text"
                name="LastName"
                value={lastname}
                // onChange={checkLastName}
                className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
                readOnly
              />
            </span>
          </div>
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            หมายเลขโทรศัพท์{" "}
          </label>
          <input
            type="tel"
            name="Phone"
            value={phone}
            // onChange={checkPhone}
            readOnly
            className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
          />
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            ตำแหน่งงาน
          </label>
          <input
            value={position}
            id="position"
            name="Position"
            className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
            // onClick={handlePosition}
            readOnly
          />
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            อีเมลล์{" "}
          </label>
          <input
            type="email"
            name="Email"
            value={email}
            // onChange={checkEmail}
            className="block w-full p-3 mt-2 text-gray-700 bg-white-200 appearance-none focus:outline-none focus:bg-white-300 focus:shadow-inner"
            readOnly
          />

          {/* <div className="mt-2"> */}
          {/* <Link to="/confirmaddofficer"> */}
          {/* <button
                variant="secondary"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                // onClick={handleSubmit}
              >
                เพิ่มบุคคลากร
              </button> */}
          {/* </Link> */}
          {/* </div> */}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
export default ProfileScreen;
