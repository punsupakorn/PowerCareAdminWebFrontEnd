import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HomeScreenDoctor.css";
import AddUserIcon from "../../icons/add-user";
import CalendarOutlineIcon from "../../icons/calendar-outline";
import CalendarInlineIcon from "../../icons/calendar-inline";

const HomeScreenDoctor = () => {
  // function Card({ children, title, direction }) {
  //   return (
  //     <Link className="card-home-screen-doctor" to={direction}>
  //       {children}
  //       <p>{title}</p>
  //     </Link>
  //   );
  // }

  return (
    <div className="content-body">
      {/* <Card className ="doctor-screen" title="ตารางปฏิบัติการ" direction="/working">
        <CalendarInlineIcon width="30%" height="30%"  />
      </Card>
      <Card title="ข้อมูลคนไข้" direction="/schedule">
        <CalendarInlineIcon width="30%" height="30%" />
        ยังไม่ได้ทำ
      </Card> */}
<div>
<div class="mt-10 text-center">
      <h1 class="text-4xl font-bold text-gray-800">PowerCare Clinic</h1>
      <p class="text-lg mt-3 font-semibold">สำหรับ Doctor</p>
    </div>
    <center>
  <hr className="mt-10" />
  <div className="flex space-x-10 pt-10">
    <div className="py-12">
      <div className="bg-gray pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div className="px-8 flex justify-between items-center">
   <h4 className="text-xl font-bold text-gray-800">ตารางปฏิบัติการ</h4>
   <CalendarInlineIcon width="30%" height="30%"/>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl text-center font-bold">ตารางปฏิบัติการ</h1>
       <div className="text-center bg-gray-200 ">
          <button className="inline-block my-6 font-bold text-gray-800">Get started today</button>
        </div>
      </div>
    </div>
    <div className="py-12">
      <div className="bg-white pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div className="px-8 flex justify-between items-center">
          <h4 className="text-xl font-bold text-gray-800">Business</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-4xl text-center font-bold">$45.00</h1>
        <div className="text-center bg-gray-200 ">
          <button className="inline-block my-6 font-bold text-gray-800">Get started today</button>
        </div>
      </div>
    </div>
  </div>
  </center>
</div>



    </div>
  );
};
export default HomeScreenDoctor;
