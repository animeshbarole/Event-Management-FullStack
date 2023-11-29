import React from 'react'
import CustomCard from '../components/customcard'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';




const  YourEvents = () => {

  
       
    const navigate = useNavigate();

    const navigateToForm = () => {
       
        navigate('/eventform');
      };
    
   

       
    const cardData = [
        {
          title: 'Arijit Concert',
          imageSrc: 'https://w0.peakpx.com/wallpaper/97/713/HD-wallpaper-arjith-singh-bollywood-singer.jpg',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          date: '2023-11-30',
          time: '19:00:00',
          venue:'Kalani Nagar, Indore MP',
        },
    ]

     
    const currentDate = new Date();

    // Sort the cards based on the time difference from the current date and time
    const sortedCards = cardData.sort((a, b) => {
      const dateA = new Date(a.date + ' ' + a.time);
      const dateB = new Date(b.date + ' ' + b.time);
  
      // Calculate the time difference in milliseconds
      const timeDifferenceA = Math.abs(dateA - currentDate);
      const timeDifferenceB = Math.abs(dateB - currentDate);
  
      return timeDifferenceA - timeDifferenceB;
    });
    

     
  return (
    <div>
        <div className='eventCard'>
         <h1>Adding Your Eventes that are Active</h1>
         <Row xs="auto" className="g-4">
        {sortedCards.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            content={card.content}
            date={card.date}
            time={card.time}
            venue={card.venue}
          />
        ))}
         </Row>
         </div> 
        
       <div className=''>  
         <h2>Add More Events</h2>
         <Button variant="secondary" onClick={navigateToForm}>
            Create Events
         </Button>
         </div>
    </div>
  )
}

export default YourEvents