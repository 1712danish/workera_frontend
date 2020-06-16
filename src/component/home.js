import React from "react";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
      <header
        className="w3-panel w3-center  #7986cb indigo lighten-2"
        style={{ padding: "128px 16px",textAlign:"center" }}
      >
        <h1 className="w3-xlarge">
          Volunteer and be the change you wish to see around you.

        </h1>
        <a className="waves-effect #3949ab indigo darken-1 waves-light btn-large" ><Link to="/signup"><b style={{color:"white"}}>SignUp Now</b></Link></a>
        
      </header>
      <div
        className="w3-container w3-content w3-center w3-padding-64"
        style={{ maxWidth: "800px" }}
        id="band"
      >
        <h2 className="w3-wide">Workera in Action</h2>
        <p className="w3-opacity">
          <i>We love to help.</i>
        </p>
        <p className="w3-justify" style={{fontSize:"25px",textAlign:"center"}}>
          We are transforming the organisation, Sustainability, and Volunteering
          ecosystem, by ensuring that there is proper flow of work and
          information, while also engaging students effectively.
        </p>
        
      </div>

      <div
        className="w3-row-padding w3-padding-64 #757575 grey darken-1"
        id="work"
      >
        <div className="w3-quarter" style={{ color: "white" }}>
          <h2>Our Work</h2>
          <p>
          Inspiring global impact through volunteering and giving programs,
          Workera provides technology that amplifies students engagement and 
          drives social impact. We empower organisations to track, measure and 
          communicate the impact of their volunteering initiatives.
          </p>
        </div>

        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Snow"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>Orator</h3>
              <p>Organised events and workshops for Orator</p>
              
            </div>
          </div>
        </div>

        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Snow"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
            <h3>Orator</h3>
              <p>Organised events and workshops for Orator</p>
            </div>
          </div>
        </div>

        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Snow"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
            <h3>Orator</h3>
            <p>Organised events and workshops for Orator</p>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
}

export default Home;
