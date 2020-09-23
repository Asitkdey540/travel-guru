import React from 'react';

const HotelDetail = (props) => {

    const { img, title, specification, features, ratings, totalRating, price } = props.hotel;
    return (
        <div className="hotel-info d-flex my-4 align-items-lg-center">
            <div className="mr-4">
                <img src={img} style={{ maxWidth: '270px' }} alt="" />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>
                    {specification.guest} guest,
                    {specification.rooms} rooms,
                    {specification.beds} beds,
                    {specification.bathrooms} bathrooms
                </p>
                <p>{features[0]}</p>
                <p>{features[1]}</p>
                <p className="rating-style d-flex">
                    <small>
                        <strong>{ratings}({totalRating})</strong>
                    </small>
                    <strong>${price}</strong>
                </p>
            </div>
        </div>
    );
};

export default HotelDetail;