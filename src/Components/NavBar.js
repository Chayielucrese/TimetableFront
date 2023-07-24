import "./styl.css";
import "./icon.css";

export default function FirstDashBoard() {
  return (
    <div className="main_dash_div">
      <div className="main_dash_right">
        <div className="main_dash_right1"></div>
        <div className="main_dash_right2">
          <a href="add Teacher"> Add Teacher</a> <br></br>
          <a href="Teacher Details">Teacher Details</a>
          <br></br>
          <a href="add Teacher"> Add Teacher</a>
          <br></br>
        </div>
        <div className="main_dash_right3">
          <a href="add Teacher"> Add Teacher</a> <br></br>
          <a href="Teacher Details">Teacher Details</a>
          <br></br>
          <a href="add Teacher"> Add Teacher</a>
          <br></br>
        </div>
        <div className="main_dash_right4">
          <a href="add Teacher"> Add Teacher</a> <br></br>
          <a href="Teacher Details">Teacher Details</a>
          <br></br>
          <a href="add Teacher"> Add Teacher</a>
          <br></br>
        </div>
        <div className="main_dash_right5">
          <a href="add Teacher"> Add Teacher</a> <br></br>
          <a href="Teacher Details">Teacher Details</a>
          <br></br>
          <a href="add Teacher"> Add Teacher</a>
          <br></br>
        </div>
        <div className="main_dash_right6">hello</div>
      </div>
      <div className="main_dash_left">
        {/* <i class="fa-sharp fa-solid fa-user bell-icon"></i>
    <i class="fa-solid fa-magnifying-glass bell-icon"></i> */}
        <div className="bell-icon1">
          <div className="msg">
            {" "}
            <i class="fas fa-envelope msg-icon"></i>
          </div>
          <div className="bell">
            {" "}
            <i className="fas fa-bell bell-icon"></i>
          </div>
          <div className="user">
            {" "}
            <i class="fas fa-user user-icon"></i>{" "}
          </div>
          <div className="three_dots">
            <i class="fas fa-ellipsis-v three_dots-icon"></i>
          </div>
        </div>
      </div>
      <div className=" main_dash_middle">
        <div className="main_dash_middle1"> Active Teachers</div>
        <div className="main_dash_middle1">Pending Teachers</div>
        <div className="main_dash_middle1">Bardges</div>
        <div className="main_dash_middle1">Work Certificate</div>
        <div className="main_dash_middle1">Contracts</div>
        <br></br>
      </div>
    </div>
  );
}
