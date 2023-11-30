import React, { useEffect } from 'react'
import Navbar from '../components/navbar';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import jwt from 'jsonwebtoken';
const Home = () => {
 
 
    //  useEffect(()=>{
    //         const token =localStorage.getItem('token');
    //         if(token)
    //         {
    //          const user  = jwt.decode(token)
    //          console.log(user)
    //         }
    //  },[]) 
//











    const navigate = useNavigate();

    const navigateToForm = () => {
       
        navigate('/eventform');
      };
    
   
    return (

   <div>

      <Navbar/>
    <div className="home">
     
    <h1>Welcome to the Event Management Website!</h1>
    <p>This website is a one-stop shop for all your event management needs. You can use it to create and manage events, track RSVPs, and sell tickets.
    To get started, simply create an account and then click on the "Create Event" button. You will then be guided through the process of creating your event.
    Once you have created your event, you can start adding guests and tracking RSVPs. You can also sell tickets to your event through the website
    We hope you find this website to be a helpful tool for managing your events. If you have any questions, please do not hesitate to contact us.</p>
     <br />
     <br />
     <br />

     <div className='events'>
       
       <p> If you want to Create your own Event Please Click on the Button Create Events</p>
       
       <Button variant="secondary" onClick={navigateToForm}>
        Create Events
      </Button>
     </div>
     

  </div>

  </div>
    
    

  )
}

export default Home