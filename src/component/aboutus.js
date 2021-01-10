import React from "react"
import { Link } from "react-router-dom"


function AboutUs() {
    return (
        <div>
            <div
                className="w3-container w3-content w3-center w3-padding-64"
                style={{ maxWidth: "1000px", backgroundColor: "white", marginTop: "50px", borderRadius: "10px" }}
                id="band"
            >
                <h2 className="w3-wide">What is Workera?</h2>
                <p className="w3-opacity">
                    <i>We love to help.</i>
                </p>
                <p className="w3-justify" style={{ fontSize: "25px", textAlign: "center" }}>
                    <b>"Workera"</b> is an organization functioning under the aegis of student welfare,
                Lovely Professional University. Organization tries to connect the young leaders.
                 It is devoted to rising leaders among our communities around the globe.
                  Through independently-organized Leadership events and workshops meant to inspire public speaking,
                   prompt innovation and create professional connections.<br />
                   
                </p>
            </div>



            
                <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
                    <h2 className="w3">Technical Team</h2>


                    
                    <div className="w3-col l3 m6 w3-Left-bottom">
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/danish.jpeg")} alt="Mike" style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Danish Ali</h3>
                                <p className="w3-opacity">Frontend & Backened developer</p>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        

    )

}

export default AboutUs