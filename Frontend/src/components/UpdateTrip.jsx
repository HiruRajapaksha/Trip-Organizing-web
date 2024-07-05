import React, { useState, useEffect } from 'react';
import EventService from '../services/TripService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTrip = (props) =>  {
    const navigate = useNavigate();
    const { tripsId } = useParams();
    const [state, setState] = useState({
        tripId: '',
        tripTitle: '',
        tripDescription: '',
        startDate: '',
        endDate: '',
        tripDestination: '',
        tripBudget: '',
        tripOrganizer: ''
    });
console.log(tripsId)
    useEffect(() => {
        const getUserId = async () => {
            try {
                const response = await EventService.getRequestByID(tripsId);
                const trip = response.data;
                console.log(trip)
                setState({
                    tripId: trip.tripId,
                    tripTitle: trip.tripTitle,
                    tripDescription: trip.tripDescription,
                    startDate: trip.startDate,
                    endDate: trip.endDate,
                    tripDestination: trip.tripDestination,
                    tripBudget: trip.tripBudget,
                    tripOrganizer: trip.tripOrganizer
                });
            } catch (error) {
                console.log(error);
            }
        };

        getUserId();
    }, [tripsId]);

    const saveRequest = (e) => {
        e.preventDefault();

        const trip = {
            tripId: state.tripId,
            tripTitle: state.tripTitle,
            tripDescription: state.tripDescription,
            startDate: state.startDate,
            endDate: state.endDate,
            tripDestination: state.tripDestination,
            tripBudget: state.tripBudget,
            tripOrganizer: state.tripOrganizer
        };

        EventService.updateRequest(trip, tripsId)
            .then((res) => {
                alert('Trip Successfully Updated!!!');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleInputChange = (trip) => {
        const { name, value } = trip.target;
        setState({ ...state, [name]: value });
    };

    const cancel = () => {
        navigate('/adderequest');
    };

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 mt-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Update Trip</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="tripId" className="form-label">
                                        Trip ID
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="tripId"
                                        id="tripId"
                                        placeholder="Enter Trip Id"
                                        value={state.tripId}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tripTitle" className="form-label">
                                        Trip Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="tripTitle"
                                        id="tripTitle"
                                        placeholder="Enter Trip Title"
                                        value={state.tripTitle}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tripDescription" className="form-label">
                                        Trip Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="tripDescription"
                                        id="tripDescription"
                                        placeholder="Enter Trip description"
                                        value={state.tripDescription}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="startDate" className="form-label">
                                        Trip Start Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="startDate"
                                        id="startDate"
                                        placeholder="Enter Start date"
                                        value={state.startDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="endDate" className="form-label">
                                        Trip End Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="endDate"
                                        id="endDate"
                                        placeholder="Enter End date"
                                        value={state.endDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tripDestination" className="form-label">
                                        Trip Destination
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="tripDestination"
                                        id="tripDestination"
                                        placeholder="Enter Trip Destination"
                                        value={state.tripDestination}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tripBudget" className="form-label"> Trip Budget </label>
                                    <input type="number" className="form-control" name="tripBudget" id="tripBudget" placeholder="Enter trip Budget" value={state.tripBudget} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tripOrganizer" className="form-label"> Trip Organizer </label>
                                    <input type="text" className="form-control" name="tripOrganizer" id="tripOrganizer" placeholder="Enter the Trip Organizer" value={state.tripOrganizer} onChange={handleInputChange}  />
                                </div>

                                

                                <button type="button" className="btn btn-success" onClick={saveRequest}>
                                    Update
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={cancel}
                                    style={{ marginLeft: "17px" }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateTrip;
