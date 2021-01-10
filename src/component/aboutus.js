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
                   Some of well known events by Workera: <br />
                    1. Grant marathon (15th Aug 2019) . <br />
                    2. Women marathon (15th Aug 2018) . <br />
                    3. Industrial visit in GNA automobile parts manufacturing.<br />
                    4. Voice of vertos<br />
                    5. Art beat <br />
                    6.  Parliamentary debate <br />
                    7. Seize the Trophy  and many more<br />
                </p>
            </div>



            <div className="w3-container" style={{ padding: "128px 16px", id: "team" }}>
                <h2 className="w3-center">Our Group</h2>

                <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
                    <h2 className="w3">Founder & CEO's</h2>


                    <div className="w3-col l3 m6 w3-Left-bottom">
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/Md. Ashil.jpeg")} alt="Mike" style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Md. Ashil</h3>
                                <p className="w3-opacity">Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom" >
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/ceo.jpg")} style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Manish Kumar Singh</h3>
                                <p className="w3-opacity">CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/Himani.jpeg")} alt="Jane" style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Himani Bhatiya</h3>
                                <p className="w3-opacity">Co-CEO</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w3-col l3 m6 w3-Left-bottom">
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/danish.jpeg")} alt="Mike" style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Danish Ali</h3>
                                <p className="w3-opacity">Web Designer, Backened developer</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
                <h2 className="w3">Managers</h2>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={require("../assets/event-manager.png")} alt="Mike" style={{ width: "100%", height: "350px" }} />
                            <div className="w3-container">
                                <h3>Rakesh Mishra</h3>
                                <p className="w3-opacity">Event Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={require("../assets/financial.jpeg")} alt="Mike" style={{ width: "100%", height: "350px" }} />
                            <div className="w3-container">
                                <h3>Akhilesh Singh</h3>
                                <p className="w3-opacity">Data Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={require("../assets/Ayush Rathi.jpeg")} alt="Mike" style={{ width: "100%", height: "350px" }} />
                            <div className="w3-container">
                                <h3>Ayush Rathi</h3>
                                <p className="w3-opacity">Marketing Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={require("../assets/atul.jpeg")} alt="Mike" style={{ width: "100%", height: "350px" }} />
                            <div className="w3-container">
                                <h3>Atul Kalyan</h3>
                                <p className="w3-opacity">Content Manager</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={require("../assets/Gagandeep Kaur.jpeg")} alt="Mike" style={{ width: "100%", height: "350px" }} />
                            <div className="w3-container">
                                <h3>Gagandeep Kaur</h3>
                                <p className="w3-opacity">Strategy Manager</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
                    <h2 className="w3">Technical Team</h2>


                    
                    <div className="w3-col l3 m6 w3-Left-bottom">
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/danish.jpeg")} alt="Mike" style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Danish Ali</h3>
                                <p className="w3-opacity">Web Designer, Backened developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-Left-bottom">
                        <div className="w3-card" style={{ marginLeft: "auto", justifyContent: "auto" }} >
                            <img src={require("../assets/saurabh.jpeg")} alt="Mike" style={{ width: "100%", height: "400px" }} />
                            <div className="w3-container">
                                <h3>Saurabh Kumar</h3>
                                <p className="w3-opacity">Database handler</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )

}

export default AboutUs