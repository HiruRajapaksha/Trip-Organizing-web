import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/map.json';

const Home = () => {

  return (
    <div>
      
        <h1 className='display-3 fw-bold text-center pt-5 pl-5 pr-5 ml-5' style={{marginLeft: '0px'}}>Trip Advising and Organizing System</h1>

        <div className="container p-5">
            <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: '700px', marginLeft: '250px'}}/>
        </div>

    </div>
  );
}

export default Home;
