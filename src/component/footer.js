import React from "react";
import {Link} from "react-router-dom"


function Footer(){
    return(
        <footer className="page-footer #ffffff white">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="grey-text">Workera</h5>
                <p className="grey-text">Volunteer and be the change you wish to see around you.</p>
                <p className="grey-text"><b>Phone:</b> +91 8318540122, +91 7408146010</p>
                <p className="grey-text"><b>E-mail: </b> workera@gmail.com </p>

              </div>
              <div className="col l4 offset-l2 s12">
                <h6 className="grey-text">Links</h6>
                <ul>
                  <li><Link className="grey-text " to="#">Home</Link></li>
                  <li><Link className="grey-text " to="/oportunities">Oportunities</Link></li>
                  <li><Link className="grey-text " to="/refer">Refer</Link></li>
                  <li><Link className="grey-text " to="#!">About us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright #263238 blue-grey darken-4">
            <div class="container">
            © 2020 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
    )
}

export default Footer;