import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import LoginForm from './Components/LoginForm';
import ResetPassword from './Components/ResetPassword';
import  SideBar from './Components/sidebar'
import LoginOptions from './Components/Loginoptions';
import TeacherLogin from './Components/TeacherLogin';
import StudentDashboard from './Components/StudentDashboard';
import Timetable from './Components/Timetable';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path='/Navbar'  element={<NavBar/>}/>
      <Route path='/studentLogin' element={<LoginForm/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/sideBar' element={<SideBar/>}/>
      <Route path='/loginOptions' element={<LoginOptions/>}/> 
      <Route path='/teacherLogin' element={<TeacherLogin/>}/>
      <Route path='/studentDash' element={<StudentDashboard/>}/>
      <Route path='/timetable' element={<Timetable/>}/>

    </Routes>
  </Router>,
  document.getElementById('root')
);