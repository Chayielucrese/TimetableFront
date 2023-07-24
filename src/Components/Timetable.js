
import React from 'react'

export default function Timetable() {
  return (
  <div>
        <header>
        <div className="logo">
            <img src="./images/logo.png" alt=""/>
            <h2>U<span className="danger">M</span>S</h2>
        </div>
        <div className="navbar">
            <a href="index.html">
                <span className="material-icons-sharp">home</span>
                <h3>Home</h3>
            </a>
            <a href="timetable.html" className="active" onclick="timeTableAll()">
                <span className="material-icons-sharp">today</span>
                <h3>Time Table</h3>
            </a> 
            
            <a href="password.html">
                <span className="material-icons-sharp">password</span>
                <h3>Change Password</h3>
            </a>
            <a href="#">
                <span className="material-icons-sharp">logout</span>
                <h3>Logout</h3>
            </a>
        </div>
        <div id="profile-btn" style={{display: "none;"}}>
            <span claclassNamess="material-icons-sharp">person</span>
        </div>
        <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
        </div>
        
    </header>

    <main style={{margin:" 0;"}}>
        <div className="timetable active" id="timetable">
            <div>
                <span id="prevDay">&lt;</span>
                <h2>Today's Timetable</h2>
                <span id="nextDay">&gt;</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Room No.</th>
                        <th>Subject</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </main>

  </div>
  )
}

