import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HomeScreen.css";
import AddUserIcon from "../../icons/add-user";
import CalendarOutlineIcon from "../../icons/calendar-outline";
import CalendarInlineIcon from "../../icons/calendar-inline";

const HomeScreen = () => {
  function Card({ children, title, direction }) {
    return (
      <Link className="card-home-screen" to={direction}>
        {children}
        <p>{title}</p>
      </Link>
    );
  }

  return (
    <div className="home-body">
      <Card title="บุคคลากร" direction="/officerlistscreen">
        <AddUserIcon width="30%" height="30%" />
      </Card>
      <Card title="จัดการตารางเวลา" direction="/appointment">
        <CalendarOutlineIcon width="30%" height="30%" />
      </Card>
      <Card title="ตารางปฏิบัติการ" direction="/working">
        <CalendarInlineIcon width="30%" height="30%" />
      </Card>
      <Card title="ข้อมูลคนไข้" direction="/schedule">
        <CalendarInlineIcon width="30%" height="30%" />
        ยังไม่ได้ทำ
      </Card>
      <Card title="การติดตามผล" direction="/schedule">
        <CalendarInlineIcon width="30%" height="30%" />
        ยังไม่ได้ทำ
      </Card>
    </div>
  );
};
export default HomeScreen;
