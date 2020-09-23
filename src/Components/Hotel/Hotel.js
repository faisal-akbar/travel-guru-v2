import React, { useContext } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import './Hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import hotelData from '../../fakeData/hotelData';
import placeData from '../../fakeData/placeData';
import HotelDetails from '../HotelDetails/HotelDetails';
import MapView from '../MapView/MapView'
import { PlaceContext } from '../../App';
import { useParams } from 'react-router-dom';

const Hotel = () => {
  const {selectedPlace} = useParams()
  // console.log(selectedPlace)

   // Get the placeId from PlaceContext, based on user button clicked on Booking button
    // const [selectedPlace, setSelectedPlace] = useContext(PlaceContext);

  // Find the user selected place
  const findPlace = placeData.find((place) => parseInt(place.placeId) === parseInt(selectedPlace));

  // Filter hotel based on user selected place
  const hotelsFilter = hotelData.filter((hotel) => parseInt(hotel.placeId) === parseInt(selectedPlace));

  // Mark selected place in map
  const marker = {
    "lat":findPlace.lat,
    "lng":findPlace.lng
}

// Send the hotel information in the HotelDetails component as props
  return (
    
    <Container className='mt-5'>
      <hr />
      <small>252 stays Apr 13-17 3 guests</small>
      <h2>Stay in {findPlace.name}</h2>
      <Row className='d-flex justify-items-center align-items-center'>
        <Col md={8}>
          {hotelsFilter.map((hotel) => (
            <HotelDetails key={hotel.hotelId} hotel={hotel}></HotelDetails>
          ))}
        </Col>
        
        <Col md={4}>
          <h4 className="text-center">Location Map</h4>
          <MapView marker={marker}></MapView>
        </Col>
      </Row>
    </Container>

  );
};

export default Hotel;
