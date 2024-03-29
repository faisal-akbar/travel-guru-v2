import React, { useEffect, useState, useContext } from 'react';
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import './PlaceDetails.css';
import placeData from '../../fakeData/placeData';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PlaceContext, UserContext } from '../../App';
// ============================================================================================

const PlaceDetails = () => {
  // Get placeId based on user "Booking" button
  const { placeId } = useParams();
  // console.log('place Id', placeId)

  // find the clicked place for the details place information
  const booking = placeData.find((id) => id.placeId === placeId);
  //  console.log('details page', booking)

  // Context from app.js
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // SetSelected Place for later use in Hotel Component
  // const [selectedPlace, setSelectedPlace] = useContext(PlaceContext);
  // setSelectedPlace(placeId);
  

  // check empty field with react-hook-form
  const { handleSubmit } = useForm();

  // Handle "Start Booking" based on user login status
  const history = useHistory();
  const onSubmit = () => {
     history.push(`/hotel-details/${placeId}`);
   };

  return (
    <Jumbotron className='hero d-flex align-items-center text-center'>
      <Container>
        <Row className='d-flex justify-items-center align-items-center'>
          <Col md={6} className='p-3 text-left'>
            <h1 className='place-title'>{booking.name}</h1>
            <p>{booking.fullDescription}</p>
          </Col>

          <Col md={6}>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className='booking-form shadow mb-5 bg-white rounded text-left'
            >
              <Form.Group controlId='formOrigin'>
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  name='origin'
                  type='text'
                  placeholder='Origin'
                  defaultValue='Dhaka'
                  required
                />
              </Form.Group>
              <Form.Group controlId='formDestination'>
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  name='destination'
                  type='text'
                  placeholder='Destination'
                  defaultValue={booking.name}
                  required
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId='fromDate'>
                  <Form.Label>From</Form.Label>
                  <Form.Control name='fromDate' type='date' required />
                </Form.Group>

                <Form.Group as={Col} controlId='toDate'>
                  <Form.Label>To</Form.Label>
                  <Form.Control name='toDate' type='date' required />
                </Form.Group>
              </Form.Row>
              
              <Button style={{ width: '100%' }} variant='warning' type='submit'>
                Start Booking
              </Button>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default PlaceDetails;
