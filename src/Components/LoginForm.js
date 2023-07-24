import React, { useState } from "react";
import "./styl.css"

export default function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SubmitForm = (e)=>{
        e.preventDefault()
        console.log("logge in with :", email, password);
        setEmail('')
        setPassword('')
    }
     return(
     <div className="login_main_div">
        <div className="login_div_right"><img src="../Images/Admin-amico.png"/> </div>
        <div className="login_div_left">
           
            
           <form className="loginform" onSubmit={SubmitForm} method="post">
           <div className="login_div_left_logo"></div>
           <span className="reset_pass_name">Institute Africain de L'informatique</span>
                 <input className="login_left_input" type="text" name="matriculation" placeholder="enter matriculation" required /> <br></br>
              <div>
                 {/* <input className="login_left_input" type="text" name="department" placeholder="enter department" required  /> */}
                <select  className="login_left_input"  name="department" >
                <option name="GL" placeholder="enter department"/>
                    <option name="GL">Genie Logiciel</option>
                    <option name="GL">securite et reseaux</option>
                    <option name="GL">software engineering</option>

                    </select> 
                    </div>
                 {/* <a href="/resetPassword">Forgot password?</a> */}
                 <button className="loginbutton" type="submit" ><a href="/studentDash"> SEND    </a></button>

            </form>
        </div>
    </div>
      
   

     )
}