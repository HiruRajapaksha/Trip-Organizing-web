import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import TripService from '../services/TripService';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ListTripRequests = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  const editRequest = (id) => {
    navigate(`/updaterequest/${id}`);
  };

  // Delete Request
  const deleteHandler = (id) => {
    TripService.deleteRequest(id)
      .then(() => {
        alert('The Trip has been Deleted Successfully !!');
        setTrips(trips.filter(trip => trip.tripsId !== id));
      })
      .catch((error) => {
        console.error('Error Deleting Trip !!' + error);
      });
  }


  //Report Generation
  const handleGenerate = () => {
    const doc = new jsPDF();

    doc.text("Trips Report", 20,8);
    // Create a table with autotable
    doc.autoTable({
        head: [
            ["Trip ID", "Trip Title", "Trip Description", "Start Date" ,"End Date", "Trip Destination", "Trip Budget", "Trip Organizer"]
        ],
        body: trips.map(trip => [trip.tripId, trip.tripTitle, trip.tripDescription, Moment(trip.startDate).format('YYYY-MM-DD'), Moment(trip.endDate).format('YYYY-MM-DD'), trip.tripDestination, trip.tripBudget, trip.tripOrganizer]),
    });

    doc.save('tripReport.pdf');
}

  useEffect(() => {
    TripService.getRequests()
      .then((res) => {
        setTrips(res.data);
      });
  }, []);


  return (
    <div>
      <h2 className="text-center pt-5 pl-5">Manage All Trips</h2>
      <br />
      <div className="row justify-content-end" style={{width: '110%'}}>
        <div className="col-12">
        <table className="table table-striped table-bordered table-hover mb-1 custom-table" style={{ width: '100%', borderRadius: '20px 0px 0px 0px'}}>
            <thead className="table-dark">
              <tr>
                <th style={{ borderRadius: '15px 0px 0px 0px', width: '7%' }}>Trip ID</th>
                <th>Trip Title</th>
                <th>Trip Description</th>
                <th style={{ width: '8%' }}>Start Date</th>
                <th style={{ width: '8%' }}>End Date</th>
                <th>Trip Destination</th>
                <th style={{ width: '8%' }}>Trip Budget</th>
                <th>Trip Organizer</th>

                <th className='pr-2' style={{ borderRadius: '0px 15px 0px 0px',width: '10%' }}>Actions <button type="button" className="btn btn-secondary m-2" onClick={() => handleGenerate()}><i className="fa fa-print"></i></button></th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip.tripsId}>
    
                  <td>{trip.tripId}</td>
                  <td>{trip.tripTitle}</td>
                  <td>{trip.tripDescription}</td>
                  <td>{Moment(trip.startDate).format('YYYY-MM-DD')}</td> 
                  <td>{Moment(trip.endDate).format('YYYY-MM-DD')}</td>
                  <td>{trip.tripDestination}</td>
                  <td>{trip.tripBudget}</td>
                  <td>{trip.tripOrganizer}</td>

                  <td>
                    <div className="d-flex justify-content-between mx-2">
                      <button className="btn btn-success" onClick={() => editRequest(trip.tripsId)}>
                        <i className="fa fa-pencil"></i>
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteHandler(trip.tripsId)} style={{ marginLeft: '5px' }} >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTripRequests;
