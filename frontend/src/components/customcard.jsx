import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const CustomCard = ({ title, imageSrc, content, date, time,venue,eventID }) => {


  

 
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4001/api/events/${eventID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Event deleted successfully');
        window.location.reload();
        // Call the parent component's onDelete callback to update the state
      } else {
        const data = await response.json();
        alert(`Failed to delete event: ${data.error}`);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

    const handleUpdate= ()=>{
        alert("The form is Updated");
        }
     

 return (

    
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Venue: {venue}</ListGroup.Item>
        <ListGroup.Item>Date: {date}</ListGroup.Item>
        <ListGroup.Item>Time: {time}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" className="card-button card-button-update" onClick={handleUpdate}>
      Update
    </Button>
    <Button variant="danger" className="card-button" onClick={handleDelete}>
    <FontAwesomeIcon icon={faTrash} fixedWidth /> Delete
    </Button>
      </Card.Body>
    </Card>
    </Col>
    
   
  );
};

export default CustomCard;
