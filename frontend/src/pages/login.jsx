import React from 'react'






const login = () => {

    
const onSubmit = ()=>{
      

     

    alert("Form is Submitted");
    console.log("Form is submitted")
}
  return (
    <div>
    <div className = "formContainer">
        <div className='formWrapper'>
       <span className='logo'>SEE Chat</span>
       <span className='title'>Login</span>

            <form onSubmit={onSubmit} >

                
                <input type="email" placeholder='email' />
             
               
                <input type="password" placeholder='password' />
               
                <button>Sign in</button>
             
            </form>
            <p>you don't have an Account ?<>Register</></p>
        </div>

    </div>
    </div>
  )
}

export default login