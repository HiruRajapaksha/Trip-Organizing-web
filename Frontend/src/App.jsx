import './App.css';
import ManageAllEvents from './components/ManageAllTrips';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEvent from './components/AddTrip';
import UpdateEvent from './components/UpdateTrip';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div style={{ height: '100vh' }}>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requests" element={<ManageAllEvents />} />
            <Route path="/addrequest" element={<AddEvent />} />
            <Route path="/updaterequest/:tripsId" element={<UpdateEvent />} />
            <Route path="/updaterequest" element={<UpdateEvent />} />
          </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
