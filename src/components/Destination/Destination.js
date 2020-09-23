import React from 'react';
import hotelDetail from '../../fakeData/hotelData';
import HotelDetail from '../HotelDetail/HotelDetail';

const Destination = () => {
    return (
        <div>
            <div className="destination container">
                <div className="top-section text-left pt-3">
                    <h4>252 stays Apr 13-17 3 guests</h4>
                    <h3>Stay in Cox’s Bazar</h3>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="md-lg-0 mb-4">
                            {
                                hotelDetail.map(hotels =><HotelDetail hotel={hotels}></HotelDetail>)
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Destination;