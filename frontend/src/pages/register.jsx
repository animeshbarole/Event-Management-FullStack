import React from 'react'

import {Link} from 'react-router-dom';


const register = () => {

    
const onSubmit = ()=>{
      
  
     

    alert("Form is Submitted");
    console.log("Form is submitted")
}
  return (
    <div>
    <div className = "formContainer">
        <div className='formWrapper'>
       <span className='logo'>Event Management</span>
       <span className='title'>Regiter</span>

            <form onSubmit={onSubmit} >

                

            <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
             
               
                <input type="password" placeholder='password' />
               
                <button>Sign in</button>
             
            </form>
            <p>Do you have an Account ?  <Link to={"/login"}>Login</Link></p>
        </div>

    </div>
    </div>
  )
}

export default register