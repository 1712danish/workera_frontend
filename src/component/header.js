import React, { useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import M from "materialize-css";

const name = localStorage.getItem("name");
const email = localStorage.getItem("email");

function Header() {

  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("/showprofile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then(res=> res.json())
      .then((result) => {
        setData(result);
      });
  

  },[])
  
  return (
    <nav>
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
                    <b>Volunteered Events</b>
                  </p>
                  {
                    
                  data&&data[0]&&data.map((item) => {
                      
                        
                       return <div>{item.volunteeredTo.name}</div>;
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
    </nav>
  );
}

export default Header;
