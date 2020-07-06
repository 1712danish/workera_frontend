import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const userName = localStorage.getItem("name");
const email = localStorage.getItem("email");

function Profile() {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/showprofile", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then(res => res.json())
            .then((result) => {
                setData(result);
            });


    }, [])

    return (
        <div style={{
            padding: "15px",
            marginTop: "10px",



            display: "flex",

            borderBottom: "2px solid gray",
        }}
        >
            <div className="card "
                style={{


                    width: "30%",
                    height: "500px",
                    textAlign: "center"

                }}>
                <div className="#3949ab indigo darken-1">
                    <img
                        style={{

                            marginTop: "20px",
                            height: "70%",
                            width: "70%",
                            borderRadius: "40px",
                        }}
                        src="https://www.clipartkey.com/mpngs/m/146-1461473_default-profile-picture-transparent.png"
                    />
                </div>

                <div style={{
                    marginTop: "15px",
                    marginBottom: "30px"

                }}>
                    <h4 style={{ textAlign: "center" }}>{userName}</h4>
                    <p style={{ textAlign: "center" }}>{email}</p>


                </div>

                <div style={{
                    marginBottom: "50px"
                }}>
                    {!userName ? (
                        <button

                            className="btn waves-effect #3949ab indigo darken-1"
                            type="submit"
                            name="action"

                        >
                            <Link to="/signin">
                                <b style={{ color: "white" }}>Login</b>
                            </Link>
                        </button>
                    ) : (
                            <button

                                onClick={() => {
                                    localStorage.clear();

                                    history.push("/signin");

                                    window.location.reload(false);
                                    M.toast({ html: "Logged Out", outDuration: "500", classes: "black" })
                                }}
                                className="btn waves-effect #3949ab indigo darken-1"
                                type="submit"
                                name="action"
                                style={{ color: "white" }}
                            >
                                Logout
                            </button>
                        )}


                </div>
            </div>
            <div className="card" style={{

                width: "60%",
                height: "500px",
                textAlign: "center",
                marginLeft: "15px",





                borderBottom: "2px solid gray",
            }}>
                <h1 style={{ marginTop: "30px" }}><b>Volunteered Events</b></h1>
                <div className="row" style={{ display: "flex" }}>
                    {

                        data && data[0] && data.map((item) => {

                            
                            return (!userName?<h3 style={{alignSelf:"center"}}>Login</h3>:<div className="card col-s" style={{ marginTop: "25px", marginLeft: "25px", padding: "10px", backgroundColor: "grey", width: "100px" }}><h3>{item.volunteeredTo.name}</h3></div>);
                        })}

                </div>

            </div>


        </div>

    )

}

export default Profile;