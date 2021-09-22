import "./App.css";
import { TopBar, SideBar } from "./components";
import {
  HomeScreen,
  HomeScreenDoctor,
  AppointmentScreen,
  ScheduleScreen,
  AddOfficerScreen,
  EditOfficerScreen,
  WorkingScreen,
  WorkingDetailScreen,
  MedicineScreen,
  MedicineDetailScreen,
  OfficerListScreen,
  CalendarScreen,
  PostponeScreen,
  SummaryPostponeScreen,
  ConfirmCancelScreen,
  UserScreen,
  UserDetailScreen,
  UserSummaryScreen,
  EditUserScreen,
  ConfirmAddOfficer,
  GiveMedicineScreen,
  HomeScreenAddmin,

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
              <Route path="/workingdetail">
                <WorkingDetailScreen />
              </Route>
              <Route path="/medicine">
                <MedicineScreen />
              </Route>
              <Route path="/medicinedetail">
                <MedicineDetailScreen />
              </Route>
              <Route path="/officerlistscreen">
                <OfficerListScreen />
              </Route>
              <Route path="/addofficer">
                <AddOfficerScreen />
              </Route>             
              <Route path="/editofficer">
                <EditOfficerScreen />
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
              <Route path="/homescreendoctor">
                <HomeScreenDoctor />
              </Route>
              <Route path="/calendar">
                <CalendarScreen />
              </Route>
              <Route path="/postpone">
                <PostponeScreen/>
              </Route>
              <Route path="/summarypostpone">
                <SummaryPostponeScreen/>
              </Route>
              <Route path="/confirmcancel">
                <ConfirmCancelScreen/>
              </Route>
              <Route path="/user">
                <UserScreen/>
              </Route>
              <Route path="/userdetail">
                <UserDetailScreen/>
              </Route>
              <Route path="/usersummary">
                <UserSummaryScreen />
              </Route>
              <Route path="/edituser">
                <EditUserScreen />
              </Route>
              <Route path="/confirmaddofficer">
                <ConfirmAddOfficer/>
              </Route>
              <Route path="/givemedicine">
                <GiveMedicineScreen/>
              </Route>
              <Route path="/homescreenaddmin">
                <HomeScreenAddmin/>
              </Route>
              
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
