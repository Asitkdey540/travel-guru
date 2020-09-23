import React from 'react';
import { Link } from 'react-router-dom';
import './TravelPlace.css'


const TravelPlace = (props) => {

    const {id, img, title} = props.detail;

    return (
        <div className="col-4">
            <Link to={`/booking/${id}`}>
                <div className="img-style">
                    <img src={img} style={{ maxWidth: "100%" }} alt="" />
                    <h5>{title}</h5>
                </div>
            </Link>
        </div>
    );
};

export default TravelPlace;