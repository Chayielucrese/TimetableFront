import React, { useState } from "react";
import './css/teacherLogin.css'

export default function TeacherLogin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SubmitForm = (e)=>{
        e.preventDefault()
        console.log("logge in with :", email, password);
        setEmail('')
        setPassword('')
    }
     return(
     <div className="login_main_div1">
        <div className="login_div_right1"><img src="../Images/Admin-amico.png"/> </div>
        <div className="login_div_left1">
           
            
           <form className="loginform1" onSubmit={SubmitForm} method="post">
           <div className="login_div_left_logo1"></div>
           <span className="reset_pass_name">Institute Africain de L'informatique</span>
                 <input className="login_left_input1" type="email" name="email" placeholder="enter email" required /> <br></br>
                 <input className="login_left_input1" type="password" name="password" placeholder="enter password" required /><br></br>
                 <a href="/resetPassword">Forgot password?</a>
                 <button className="loginbutton1" type="submit" >SEND</button>

            </form>
        </div>
    </div>
      
   

     )
}