import React from "react";
import {Link} from "react-router-dom"
const name = localStorage.getItem("name");


function Gallery() {
    
  return (
    <div style={{padding:"5px",marginRight:"5px"}}>
    <div class="row">

    

    <div class="w3-third">
      <img class="zoom" src={require("../assets/g10.jpeg")} style={{width:"100%",padding:"5px"}}  alt="Canoeing again" />
      <img class="zoom" src={require("../assets/g11.jpeg")} style={{width:"100%",padding:"5px"}}  alt="A girl, and a train passing" />
      <img class="zoom" src={require("../assets/g12.jpeg")} style={{width:"100%",padding:"5px"}}  alt="What a beautiful day!" />
    </div> 

    <div class="w3-third">
      <img class="zoom" src={require("../assets/g4.JPG")} style={{width:"100%",padding:"5px"}}  alt="Quiet day at the beach. w3-thirdd, but beautiful" />
      <img class="zoom" src={require("../assets/g5.JPG")} style={{width:"100%",padding:"5px"}}  alt="Waiting for the bus in the desert" />
      <img class="zoom" src={require("../assets/g6.JPG")} style={{width:"100%",padding:"5px"}}  alt="Nature again.. At its finest!" />
    </div>
    
    <div class="w3-third">
      <img class="zoom" src={require("../assets/g7.JPG")} style={{width:"100%",padding:"5px"}}  alt="Canoeing again" />
      <img class="zoom" src={require("../assets/g8.JPG")} style={{width:"100%",padding:"5px"}}  alt="A girl, and a train passing" />
      <img class="zoom" src={require("../assets/g9.JPG")} style={{width:"100%",padding:"5px"}}  alt="What a beautiful day!" />
    </div>
    
  </div>
  
  





    </div>
  );
}

export default Gallery;

