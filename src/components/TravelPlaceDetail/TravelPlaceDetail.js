import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeDataForHome';


const TravelPlaceDetail = () => {
    const history = useHistory();
    const handleDestinationRoute = () => {
        history.push("/destination");
    }

    const { id } = useParams()
    const placeDtail = fakeData.find(place => place.id === id)
    const { title, shortDetail } = placeDtail
    return (
        <main className="main d-flex align-items-center">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="mb-md-0 mb-5">
							<h1>{title}</h1>
							<p>{shortDetail}</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="booking-form">
							<div>
								<div className="form-group">
									<label>Origin</label>
									<input type="text" className="form-control" placeholder="e.g Dhaka" />
								</div>
								<div className="form-group">
									<label>Destination</label>
									<input type="text" className="form-control" placeholder="e.g Sajek" />
								</div>
								<div className="form-group row">
									<div className="col-6">
										<label htmlFor="date-input">From</label>
										<input type="date" className="form-control" id="dateFrom"/>
									</div>
									<div className="col-6">
										<label htmlFor="dateTo">To</label>
										<input type="date" className="form-control" id="dateTo"/>
									</div>
								</div>
								<button onClick={handleDestinationRoute} type="submit" className="btn btn-warning btn-block">Start Booking</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
    );
};

export default TravelPlaceDetail;