import "./App.css";
import { TopBar, SideBar } from "./components";
import {
  HomeScreenStaff,
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
  HomeScreenAdmin,
  ManageMedicineScreen,
  WorkingDetailStaffScreen,
  ConfirmEditOfficerScreen,
} from "./screens";
import { Switch, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth";
import LogIn from "./screens/LoginScreen/index";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={LogIn} />
          <TopBar />
          <div className="content">
            <SideBar />
            {/* Screen Routing */}
            <Switch>
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
              <Route path="/homescreenstaff">
                <HomeScreenStaff />
              </Route>
              <Route path="/homescreendoctor">
                <HomeScreenDoctor />
              </Route>
              <Route path="/calendar">
                <CalendarScreen />
              </Route>
              <Route path="/postpone">
                <PostponeScreen />
              </Route>
              <Route path="/summarypostpone">
                <SummaryPostponeScreen />
              </Route>
              <Route path="/confirmcancel">
                <ConfirmCancelScreen />
              </Route>
              <Route path="/user">
                <UserScreen />
              </Route>
              <Route path="/userdetail">
                <UserDetailScreen />
              </Route>
              <Route path="/usersummary">
                <UserSummaryScreen />
              </Route>
              <Route path="/edituser">
                <EditUserScreen />
              </Route>
              <Route path="/confirmaddofficer">
                <ConfirmAddOfficer />
              </Route>
              <Route path="/givemedicine">
                <GiveMedicineScreen />
              </Route>
              <Route path="/homescreenadmin">
                <HomeScreenAdmin />
              </Route>
              <Route path="/managemedicine">
                <ManageMedicineScreen />
              </Route>
              <Route path="/workingdetailstaff">
                <WorkingDetailStaffScreen />
              </Route>
              <Route path="/confirmeditofficer">
                <ConfirmEditOfficerScreen />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
