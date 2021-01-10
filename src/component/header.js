import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";



function Header() {

 
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:"9999"}}>
      <Link to="/" className="navbar-brand">
        <h2>Workera</h2>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse white" id="navbarSupportedContent"  >


        <ul className="navbar-nav mr-auto "  >
          <li>
            <Link to="/oportunities">oportunities</Link>
          </li>
          <li>
            <Link to="/refer">Refer Event</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
          <Link to="/profile">Profile</Link>

          </li>



        </ul>
      </div>






    </nav>
  );
}

export default Header;


{/* <nav className="navbar navbar-expand-sm bg-light">
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Workera
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/oportunities">oportunities</Link>
          </li>
          <li>
            <Link to="/refer">Refer Event</Link>
          </li>
            

          <li>
            <Dropdown className="col s12 m2">
              <Dropdown.Toggle
                variant="success"
                className="#3949ab indigo darken-1"
                id="dropdown"
              >
                <b>Profile</b>
              </Dropdown.Toggle>

              <Dropdown.Menu
                
                style={{
                  backgroundColor: "white",
                  width:"20%",
                  height:"700px"
                  
                }}
              >
                <Dropdown.Item >
                  <h4 style={{ textAlign: "center" }}>{name}</h4>
                  <p style={{ textAlign: "center" }}>{email}</p>
                </Dropdown.Item>
                <Dropdown.Item  className="overflow-auto">
                  <p>
                    <b>Registered Events</b>
                  </p>
                  {
                    
                  data&&data[0]&&data.map((item) => {
                      
                        
                       return <div>{item.RegisteredTo.name}</div>;
                    })}
                </Dropdown.Item>
                <Dropdown.Item></Dropdown.Item>
                <Dropdown.Item style={{ textAlign: "center" }}>
                  {!name ? (
                    <button
                      
                      className="btn waves-effect #3949ab indigo darken-1"
                      type="submit"
                      name="action"
                    >
                      <Link to="/signin">
                        <b>Login</b>
                      </Link>
                    </button>
                  ) : (
                    <button
                      
                      onClick={() => {
                        localStorage.clear();
                        M.toast({html: "Logged Out"})
                        history.push("/signin");
                        window.location.reload(false);
                      }}
                      className="btn waves-effect #3949ab indigo darken-1"
                      type="submit"
                      name="action"
                    >
                      Logout
                    </button>
                  )}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav> */}




