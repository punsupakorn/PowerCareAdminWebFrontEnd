import React, { useState,useContext } from "react";
import { Redirect } from 'react-router-dom'
import MoreMenuIcon from "../../icons/more-menu";
import HomeIcon from "../../icons/home-menu";
import ScheduleIcon from "../../icons/calendar-outline";
import AppointmentIcon from "../../icons/calendar-inline";
import { AuthContext } from "../../Auth"
import firebaseconfig from "../../config";

import "./SideBar.css";
import { Link } from "react-router-dom";

function App() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
      return <Redirect to="/" />;
  }
  
  const menuSideBar = [
    {
      icon: <HomeIcon width="2rem" height="2rem" />,
      title: "หน้าหลัก",
      direction: "/",
    },
    {
      icon: <ScheduleIcon width="2rem" height="2rem" />,
      title: "จัดการตารางเวลา",
      direction: "/appointment",
    },
    {
      icon: <AppointmentIcon width="2rem" height="2rem" />,
      title: "ตารางเวลาการทำนัด",
      direction: "/schedule",
    },
  ];
  const username = ("Username");

  return (

    <aside className="side-bar">
      {/* profile */}
      {/* <ProfileComponent name={username} /> */}
      {/* cut dai  */}
      <MoreMenuIcon width="2rem" height="2rem" className="moremenu-icon" />
      <div className="content-menu-side-bar">
        {menuSideBar.map((item, key) => (
          <MenuSideBar {...item} key={key} />
        ))}
      </div>
    </aside>
  );
}

// function ProfileComponent({ imageProfile, name }) {
//   return (
//     <div className="profile-content">
//       <p >สวัสดี</p>
//       <p className="color-white">คุณ {name}</p>
//     </div>
//   );
// }

function MenuSideBar({ title, icon, direction = "/" }) {
  return (
    <Link className="menu-side-bar" to={direction}>
      {icon}
      {title && <p className="color-white">{title}</p>}
    </Link>
  );
}

export default App;
