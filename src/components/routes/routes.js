import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "../login/login";
import Register from "../register/register";
import Dashboard from "../dashboard/dashboard";
import Admin from "../admin/admin";
import Classes from "../classes/classes";
import Trainers from "../trainers/trainers";
import Students from "../students/students";
import Settings from "../settings/settings";
import Home from "../home/home";
import Profile from "../profile/profile";
import ClassDetails from "../classDetails/classDetails";
import TrainerDetails from "../trainerDetails/trainerDetails";
import StudentDetails from "../studentDetails/studentDetails";
import ClassSession from "../classSession/classSession";
import Logout from "../logout/logout";
import Bigdata from "../bigdata/bigdata";
import Java from "../bigdata/java";
import Studdash from "../studdash/studdash";
import New from "../new/new";
import Accsettings from "../accsettings/accsettings";
import StudentV from "../studentV/studentV";
import TrainerDashboard from "../trainerlogin/trainerdashboard";
import TrainerBigdata from "../trainerlogin/Bigdata";
import Studentlist from "../trainerlogin/studentlist";
import Assignment from "../trainerlogin//Assignment";
import Adding from "../trainerlogin/Adding";
import Overview from "../trainerlogin/Overview";
import AddStudent  from "../addstudent/addstudent";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/dashboard" render={ (props) => <Dashboard {...props} />} />
          <Route exact path="/admin" render={props => <Admin />} />
          <Route exact path="/classes" render={props => <Classes />} />
          <Route exact path="/trainers" render={props => <Trainers />} />
          <Route exact path="/students" render={props => <Students />} />
          <Route exact path="/settings" render={props => <Settings />} />
          <Route exact path="/profile" render={props => <Profile />} />
          <Route exact path="/classdetails" render={props => <ClassDetails />} />
          <Route exact path="/studentdetails" render={props => <StudentDetails />} />
          <Route exact path="/trainerdetails" render={props => <TrainerDetails />} />
          <Route exact path="/sessiondetails" render={props => <ClassSession />} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/bigdata" render={props => <Bigdata/>}/>
          <Route exact path="/java" render={props => <Java/>}/>
          <Route exact path="/studdash" render={props => <Studdash/>}/>
          <Route exact path="/new" render={props => <New/>}/>
          <Route exact path="/accsettings" render={props => <Accsettings/>}/>
          <Route exact path="/studentV" render={props => <StudentV/>}/>
          <Route exact path="/trainerdashboard" render={props => <TrainerDashboard{...props} />} />
          <Route exact path="/TrainerBigdata" render={props => <TrainerBigdata{...props} />} />
          <Route exact path="/studentlist" render={props => <Studentlist{...props} />} />
          <Route exact path="/Assignment" render={props => <Assignment{...props} />} />
          <Route exact path="/Adding" render={props => <Adding{...props} />} />
          <Route exact path="/Overview" render={props => <Overview{...props} />} />
          <Route exact path="/addstudent" render={props => <AddStudent{...props} />} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  );
};
