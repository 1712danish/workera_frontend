import React from "react";
import {Link} from "react-router-dom"

const name = localStorage.getItem("name");


function Home() {
  return (
    <div>
      <header
        className=" w3-center banner"
        style={{ padding: "128px 16px",textAlign:"center" }}
      >
        <h1 className="w3-xlarge" style={{color:"white",fontWeight:"bold"}}>
          Volunteer and be the change you wish to see around you.

        </h1>

        {!name?<a className="waves-effect #3949ab indigo darken-1 waves-light btn-large" ><Link to="/signup"><b style={{color:"white"}}>SignUp Now</b></Link></a>:
                <a className="waves-effect #3949ab indigo darken-1 waves-light btn-large" ><Link to="/refer"><b style={{color:"white"}}>Refer Event</b></Link></a>



        }
        
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



      <div className="w3-container" style={{padding:"128px 16px",id:"team"}}>
  <h2 className="w3-center">THE TEAM</h2>
  <p className="w3-center w3-large">The ones who runs this company</p>
  <div className="w3-row-padding w3-grayscale" style={{marginTop:"64px"}}>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sGAaaqdPmvdLwCE2Ym3d6DiFM_HA-JZtDg&usqp=CAU" alt="John" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>John Doe</h3>
          <p className="w3-opacity">CEO & Founder</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sGAaaqdPmvdLwCE2Ym3d6DiFM_HA-JZtDg&usqp=CAU" alt="Jane" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>Anja Doe</h3>
          <p className="w3-opacity">Art Director</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sGAaaqdPmvdLwCE2Ym3d6DiFM_HA-JZtDg&usqp=CAU" alt="Mike" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>Mike Ross</h3>
          <p className="w3-opacity">Web Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sGAaaqdPmvdLwCE2Ym3d6DiFM_HA-JZtDg&usqp=CAU" alt="Dan" style={{width:"100%"}} />
        <div className="w3-container">
          <h3>Dan Star</h3>
          <p className="w3-opacity">Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
  <div className="w3-quarter">
    <span className="w3-xxlarge">14+</span>
    <br />Partners
  </div>
  <div className="w3-quarter">
    <span className="w3-xxlarge">55+</span>
    <br />Projects Done
  </div>
  <div className="w3-quarter">
    <span className="w3-xxlarge">89+</span>
    <br />Happy Clients
  </div>
  <div className="w3-quarter">
    <span className="w3-xxlarge">150+</span>
    <br />Meetings
  </div>
</div>




    </div>
  );
}

export default Home;
