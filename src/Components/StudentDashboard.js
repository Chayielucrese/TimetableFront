import React from "react"
import './studentDash.css'
export default function StudentDashboard(){
    return(
        <div>

        <header>
        <div className="navbar">
            <a href="index.html" className="active">
                <span className="material-icons-sharp">home</span>
                <h3>Home</h3>
            </a>
            <a href="timetable.html" onclick="timeTableAll()">
           
                <h3> week Time Table</h3>
            </a> 
          
            <a href="password.html">
                <span class="material-icons-sharp">password</span>
                <h3>Change Password</h3>
            </a>
            <a href="#">
                <span clasclassNames="material-icons-sharp" onclick="">logout</span>
                <h3>Logout</h3>
            </a>
        </div>

        <div id="profile-btn">
            <span className="material-icons-sharp">person</span>
        </div>
       
          </header>
    <div className="container">
        <aside>
            <div className="profile">
                <div className="top">
                    <div className="profile-photo">
                        <img src="./images/profile-1.jpg" alt=""/>
                    </div>
                    <div className="info">
                        <p>Hey, <b>Alex</b> </p>
                        <small className="text-muted">Matricule</small>
                    </div>
                </div>
                <div className="about">
                    <h5>Speciality</h5>
                    <p>SOFTWARE ENGINEERING</p>
                    <h5>DOB</h5>
                    <p>29-Feb-2020</p>
                    <h5>Contact</h5>
                    <p>237678564322</p>
                    <h5>Email</h5>
                    <p>yann35@gmail.com</p>
                    <h5>Address</h5>
                    <p>Awae</p>
                </div>
            </div>
        </aside>
        <main>
            <h1>Teacher on Duty</h1>
            <div className="subjects">
                <div className="eg">
                <div className="profile-photo1">
                        <img src="./images/profile-1.jpg" alt=""/>
                    </div>
                    <h3>Engineering Graphics</h3>
                   
                </div>
                <div className="mth">
                <div className="profile-photo1">
                        <img src="./images/profile-1.jpg" alt=""/>
                    </div>
                    <h3>Mathematical Engineering</h3>
                   
                  
                </div>
                <div className="cs">
                <div className="profile-photo1">
                        <img src="./images/profile-1.jpg" alt=""/>
                    </div>
                    <h3>Computer Architecture</h3>
                  
                  
                </div>
                <div className="cg">
                <div className="profile-photo1">
                        <img src="./images/profile-1.jpg" alt=""/>
                    </div>
                    <h3>Database Management</h3>
                   
                   
              
                </div>
                <div className="net">
                <div className="profile-photo1">
                        <img src="./images/profile-1.jpg" alt=""/>
                    </div>
                    <h3>Network Security</h3>
                      </div>
            </div>

            <div className="timetable" id="timetable">
                <div>
                    <span id="prevDay">&lt;</span>
                    <h2>Today's Timetable</h2>
                    <span id="nextDay">&gt;</span>
                </div>
                <span className="closeBtn" onclick="timeTableAll()">X</span>
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


     <div className="right">
            <div className="announcements">
                <h2>Announcements</h2>
                <div className="updates">
                    <div className="message">
                        <p> <b>Academic</b> Summer training internship with Live Projects.</p>
                        <small claclassNamess="text-muted">2 Minutes Ago</small>
                    </div>
                    <div className="message">
                        <p> <b>Co-curricular</b> Global internship oportunity by Student organization.</p>
                        <small className="text-muted">10 Minutes Ago</small>
                    </div>
                    <div className="message">
                        <p> <b>Examination</b> Instructions for Mid Term Examination.</p>
                        <small className="text-muted">Yesterday</small>
                    </div>
                </div>
            </div>

            <div className="leaves">
                <h2>Teachers Alerts</h2>
                <div className="teacher">
                    <div className="profile-photo"><img src="./images/profile-2.jpeg" alt=""/></div>
                    <div className="info">
                        <h3>The Professor</h3>
                        <small className="text-muted">Full Day</small>
                    </div>
                </div>
                <div className="teacher">
                    <div className="profile-photo"><img src="./images/profile-3.jpg" alt=""/></div>
                    <div className="info">
                        <h3>Lisa Manobal</h3>
                        <small className="text-muted">Half Day</small>
                    </div>
                </div>
                <div className="teacher">
                    <div className="profile-photo"><img src="./images/profile-4.jpg" alt=""/></div>
                    <div className="info">
                        <h3>Himanshu Jindal</h3>
                        <small className="text-muted">Full Day</small>
                    </div>
                </div>
            </div>

        </div>
    </div>

       <script src="timeTable.js"></script>
       <script src="app.js"></script>
    </div>

   
)}