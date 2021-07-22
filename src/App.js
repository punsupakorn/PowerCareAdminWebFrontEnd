import "./App.css";
import { TopBar, SideBar } from "./components";
import {
  HomeScreen,
  AppointmentScreen,
  ScheduleScreen,
  AddOfficerScreen,
  WorkingScreen,
  MedicineScreen,
  OfficerListScreen,
  CalendarScreen,
} from "./screens";
import { Switch, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "./Auth";
import LogIn from "./screens/LoginScreen/index";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <div className="App">
          <TopBar />
          <div className="content">
            <SideBar />
            {/* Screen Routing */}
            <Switch>
              <Route exact path="/" component={LogIn} />
              <Route path="/working">
                <WorkingScreen />
              </Route>
              <Route path="/medicine">
                <MedicineScreen />
              </Route>
              <Route path="/officerlistscreen">
                <OfficerListScreen />
              </Route>
              <Route path="/addofficer">
                <AddOfficerScreen />
              </Route>
              <Route path="/appointment">
                <AppointmentScreen />
              </Route>
              <Route path="/schedule">
                <ScheduleScreen />
              </Route>
              <Route path="/homescreen">
                <HomeScreen />
              </Route>
              <Route path="/calendar">
                <CalendarScreen />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
