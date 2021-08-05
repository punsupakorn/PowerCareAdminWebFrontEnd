import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HomeScreenDoctor.css";
import AddUserIcon from "../../icons/add-user";
import CalendarOutlineIcon from "../../icons/calendar-outline";
import CalendarInlineIcon from "../../icons/calendar-inline";

const HomeScreenDoctor = () => {
  function Card({ children, title, direction }) {
    return (
      <Link className="card-home-screen-doctor" to={direction}>
        {children}
        <p>{title}</p>
      </Link>
    );
  }

  return (
    <div className="home-body-doctor">
      <Card className ="doctor-screen" title="ตารางปฏิบัติการ" direction="/working">
        <CalendarInlineIcon width="30%" height="30%"  />
      </Card>
      <Card title="ข้อมูลคนไข้" direction="/schedule">
        <CalendarInlineIcon width="30%" height="30%" />
        ยังไม่ได้ทำ
      </Card>
      
    </div>
  );
};
export default HomeScreenDoctor;
