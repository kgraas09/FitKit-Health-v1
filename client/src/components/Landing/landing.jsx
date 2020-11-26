import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({}) => {
  
  const description = "Welcome to FitKit Health";
  const secondaryDescription = "We make the process of choosing nutritional supplements easier for you!  Fill out a quick profile, sync up your fitness tracker, and we'll take care of the rest.";

  return(
    <div>
      <div id="background"> 
        <div id="landing-page" class="col-sm-4">
          <div className="landing-description">{description}</div>
          <div className="landing-sec-description">{secondaryDescription}</div>
          <div className="button-placement">
          <Link to="/login">
            <button type="button" id="landing-button"> Let's Begin </button> 
          </Link>
          </div>
        </div>      
      </div>
    </div>
  )
};

export default LandingPage;