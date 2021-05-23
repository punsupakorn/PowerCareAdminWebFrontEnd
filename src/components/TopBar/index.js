import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import Logo from "../../icons/logo";
import LogOutIcon from "../../icons/exit";
import NotificationIcon from "../../icons/bell";
import firebaseConfig from "../../config"
import { AuthContext } from "../../Auth"
import { useState } from "react";

import NotificationComponent, {
  NotificationItem,
} from "../NotificationComponent";

import "./TopBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebaseconfig from '../../config';
// import { useState } from "react";


const App = () => {
  const [isShowNoti, setShowNoti] = useState(false);

  const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/" />;
    }
    return (
      <div className="top-bar">
        {/* Logo */}
        <Link className="logo-content" to="/">
          <Logo width={"3rem"} height={"3rem"} className="logo-image" />
          <h2 className="text-logo">
            Powercare&nbsp;<p className="color-white">Clinic</p>
          </h2>
        </Link>
  
        {/* Menu */}
        <div className="menu-top-bar">
          <div className="dropdown">
            <MenuTopBar
              title="การแจ้งเตือน"
              onClick={() => setShowNoti(!isShowNoti)}
            >
              <NotificationIcon width="1.5rem" height="1.5rem" />
            </MenuTopBar>
            <NotificationComponent isShow={isShowNoti}>
              {notificationMockupData.map((item, key) => (
                <NotificationItem
                  key={key}
                  title={item.title}
                  detail={item.detail}
                  readed={item.readed}
                />
              ))}
            </NotificationComponent>
          </div>
          <MenuTopBar title="ลงชื่อออก" onClick={()=>firebaseconfig.auth().signOut()} styleText={{ color: "black" }} >
            <LogOutIcon width="1.2rem" height="1.2rem" />
          </MenuTopBar>
        </div>
      </div>
    );
  }
  
  const MenuTopBar = ({
    children,
    title,
    styleText,
    styleContent,
    onClick = () => {},
  }) => {
    return (
      <div
        className="menu-top-bar-item"
        style={{ ...styleContent }}
        onClick={onClick}
      >
        {children}
        <p className="color-white" style={{ marginLeft: "0.5rem", ...styleText }}>
          {title}{" "}
        </p>
      </div>
    );
  };
  
  export default App;
  
  const notificationMockupData = [
    {
      title: "การแจ้งเตือน",
      detail: "ตัวอย่างการแจ้งเตือน",
      readed: true,
    },
    {
      title: "การแจ้งเตือน",
      detail:
        "ตัวอย่างการแจ้งเตือนที่ยังไม่ได้อ่าน",
      readed: false,
    }
  ];
