import React, { useState } from "react";
import "./styl.css"



export default function ResetPassword(){

const [email, setEmail] = useState('');

const handleSubmit=(e)=>{
    e.preventDefault()

    setEmail('');
}


return(
    <div className="image-div">
          <h1 className="form_heading">reset password</h1>
    <div className="setpassword_main_div">
        
<form className=" setpassword_main_div_form" onSubmit={handleSubmit} method="post">
    <div className="form_img"></div>
    <span className="reset_pass_name">Institute Africain de L'informatique</span>
    <input className="reset_input" type="email" name="email"  placeholder="enter registered email"/> 
    <button className="reset_but" type= "submit" >SUBMIT</button>
    <button className="reset_but2" type= "submit" ><a  className = 'reset' href="/studentlogin">LOGIN</a></button>
</form>''


    </div>
    </div>
)

}