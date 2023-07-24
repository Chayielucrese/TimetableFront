import react from 'react'

export default function LoginOptions(){
    return (

        <div className='loginOptions_main_div'>
        
            <h1 className='tittle'>Login As?</h1>
          <div className='loginOptions_main_div1'>
                <a href='/studentLogin' >STUDENT</a>
          </div>
        <div className=' loginOptions_main_div2' >
        <a href='/teacherLogin' > TEACHER </a>
          </div>
          <div className=' loginOptions_main_div3' >
          <a href='/adminLogin' >ADMIN </a>
          </div>
          
        </div>
    )
}