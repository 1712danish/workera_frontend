import React from "react";
import { Link } from "react-router-dom"
const name = localStorage.getItem("name");


function Home() {
  return (
    <div >
      <header
        className=" w3-center banner"
        style={{ padding: "128px 16px", textAlign: "center" }}
      >
        <h1 className="w3-xlarge" style={{ color: "white", fontWeight: "bold" }}>
          Register and be the change you wish to see around you.

        </h1>

        {!name ? <a className="waves-effect #3949ab indigo darken-1 waves-light btn-large" ><Link to="/signup"><b style={{ color: "white" }}>SignUp Now</b></Link></a> :
          <a className="waves-effect #3949ab indigo darken-1 waves-light btn-large" ><Link to="/refer"><b style={{ color: "white" }}>Refer Event</b></Link></a>



        }

      </header>
      <div
        className="w3-container w3-content w3-center w3-padding-64"
        style={{ maxWidth: "800px" }}
        id="band"
      >
        <h2 className="w3-wide">Orator in Action</h2>
        <p className="w3-opacity">
          <i>We love to help.</i>
        </p>
        <p className="w3-justify" style={{ fontSize: "25px", textAlign: "center" }}>
          We are transforming the organisation, Sustainability, and Registering
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
          Inspiring youth and helping them to develop their social skills via providing 
          them a real organisation culture which amplifies their personal and core skills 
          to attain their personal as well as professional goals. We empower students to 
          track, measure and communicate with an impact which helps them to take initiatives 
          and equipped them with the desired skills which make them industry relevant.
          </p>

          <p>
          <b>Some of well known events by Orator: </b><br />
          1.<b> Grant marathon</b> (15th Aug 2019)<br />  
          2. <b>Women marathon</b> (15th Aug 2018)<br />  
          3. <b>Industrial visit in GNA</b><br />
          4. <b>Voice of vertos</b><br />
          5. <b>Art beat </b><br />
          6.  <b>Parliamentary debate </b><br />
          7. <b>Seize the Trophy </b><br />
           and many more
          </p>
        </div>

        <div className="w3-quarter w3-margin-bottom">
          <div className="w3-card w3-white">
            <img
              src={require("../assets/independance.jpeg")}
              alt="Snow"
              style={{ width: "100%", height: "220px" }}
            />
            <div className="w3-container" style={{ textAlign: "center", margin: "15px" }} >
              <b><h3>Run for Fortune event</h3></b>

            </div>
          </div>
        </div>

        <div className="w3-quarter w3-margin-bottom">
          <div className="w3-card w3-white">
            <img
              src={require("../assets/work2.jpeg")}
              alt="Snow"
              style={{ width: "100%", height: "220px" }}
            />
            <div className="w3-container" style={{ textAlign: "center", margin: "15px" }} >
              <b><h3>Quizmania</h3></b>

            </div>
          </div>
        </div>

        <div className="w3-quarter w3-margin-bottom" >
          <div className="w3-card w3-white">
            <img
              src={require("../assets/industrial.jpeg")}
              alt="Snow"
              style={{ width: "100%", height: "220px" }}
            />
            <div className="w3-container" style={{ textAlign: "center", margin: "15px" }} >
              <b><h3>Industrial visit</h3></b>

            </div>
          </div>
        </div>

        <div className="w3-quarter w3-margin-bottom" >
          <div className="w3-card w3-white">
            <img
              src={require("../assets/sql.jpeg")}
              alt="Snow"
              style={{ width: "100%", height: "220px" }}
            />
            <div className="w3-container" style={{ textAlign: "center", margin: "15px" }} >
              <b><h3>Lets play with Sql</h3></b>

            </div>
          </div>
        </div>

        <div className="w3-quarter w3-margin-bottom">
          <div className="w3-card w3-white">
            <img
              src={require("../assets/Art.jpeg")}
              alt="Snow"
              style={{ width: "100%", height: "220px" }}
            />
            <div className="w3-container" style={{ textAlign: "center", margin: "15px" }} >
              <b><h3>Art-beat</h3></b>

            </div>
          </div>
        </div>


        <div className="w3-quarter w3-margin-bottom">
          <div className="w3-card w3-white">
            <img
              src={require("../assets/personality.jpeg")}
              alt="Snow"
              style={{ width: "100%", height: "220px" }}
            />
            <div className="w3-container" style={{ textAlign: "center", margin: "15px" }} >
              <b><h3>Personality development</h3></b>

            </div>
          </div>
        </div>

        

             </div>





      <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
        <div className="w3-quarter">
          <span className="w3-xxlarge">14+ </span>
          <br />Sponsors
  </div>
        <div className="w3-quarter">
          <span className="w3-xxlarge">55+</span>
          <br />Events Done
  </div>
        <div className="w3-quarter">
          <span className="w3-xxlarge">1500+</span>
          <br />Happy participants
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
