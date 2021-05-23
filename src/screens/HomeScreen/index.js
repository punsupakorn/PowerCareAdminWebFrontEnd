import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HomeScreen.css";
import AddUserIcon from "../../icons/add-user";
import CalendarOutlineIcon from "../../icons/calendar-outline";
import CalendarInlineIcon from "../../icons/calendar-inline";
export default function HomeScreen() {
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
      <Card title="เพิ่มบุคลากร" direction="/addofficer">
        <AddUserIcon width="30%" height="30%" />
      </Card>
      <Card title="จัดการตารางเวลา" direction="/schedule">
        <CalendarOutlineIcon width="30%" height="30%" />
      </Card>
      <Card title="ตารางเวลา" direction="appointment">
        <CalendarInlineIcon width="30%" height="30%" />
      </Card>
    </div>
  );
}
