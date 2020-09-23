import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData/fakeDataForHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import TravelPlace from '../TravelPlace/TravelPlace';
import './Home.css'

const Home = () => {
    const history = useHistory()
    const travelCard = fakeData;
    const [slideDetail, setSlideDetail] = useState(travelCard)

    const handleBooking = () => {
        history.push(`/booking/${travelCard[0].id}`);
    }

    return (
        <main className="main d-flex align-iteam-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="detail mb-md-0 mb-5">
                            <h1>Sajek</h1>
                            <p>Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills...</p>
                            <Button onClick={handleBooking} variant="warning">
                                Booking <i className="fas fa-arrow-right"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="main-images">
                            <div className="detail row">
                                {
                                    slideDetail.map(details => <TravelPlace detail={details}></TravelPlace>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;