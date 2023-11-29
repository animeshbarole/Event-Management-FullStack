import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CustomCard = ({ title, imageSrc, content, date, time,venue }) => {


    const handleDelete= ()=>{
    alert("The form is Deleted");
    }

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
      <Button variant="primary" className="card-button card-button-update" onClick={handleDelete}>
      Update
    </Button>
    <Button variant="danger" className="card-button" onClick={handleUpdate}>
    <FontAwesomeIcon icon={faTrash} fixedWidth /> Delete
    </Button>
      </Card.Body>
    </Card>
    </Col>
    
   
  );
};

export default CustomCard;
