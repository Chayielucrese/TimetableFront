import {React, useState} from "react";



export default IconClick =()=>{

    const {clicked, setClick} = useState(false)
    const handleClick=()=>{
        setClick(!clicked)
        return{
            
        }
    }
}