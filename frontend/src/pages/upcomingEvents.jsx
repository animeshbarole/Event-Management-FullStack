import React from 'react'
import CustomCard from '../components/customcard';

import Row from 'react-bootstrap/Row';


const upcomingEvents = () => {
    const cardData = [
      {
        title: 'Arijit Concert',
        imageSrc: 'https://w0.peakpx.com/wallpaper/97/713/HD-wallpaper-arjith-singh-bollywood-singer.jpg',
        content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        date: '2023-11-30',
        time: '19:00:00',
        venue:'Kalani Nagar, Indore MP',
      },
      {
        title: 'BirthDay Party Event',
        imageSrc: 'https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg',
        content: 'This is the Event to Invite my Friends into Birthday',
        date: '2023-11-29',
        time: '15:30:00',
        venue: 'Indore ,MP'
      },
      {
        title: 'BirthDay Party Event',
        imageSrc: 'https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg',
        content: 'This is the Event to Invite my Friends into Birthday',
        date: '2023-11-29',
        time: '15:30:00',
        venue: 'Indore ,MP'
      },
      // Add more card data as needed
    ];

 
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
    );
  };
export default upcomingEvents