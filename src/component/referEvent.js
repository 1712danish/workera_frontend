import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

function Enter() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [url,setUrl] = useState("");

  useEffect(()=>{
    if(url){
      fetch("/referevent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          name,
          description,
          organisation,
          date,
          photo:url
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html:data.error,classes:"black"});
          } else {
            M.toast({ html: data.message,classes:"black" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  },[url])

  function myPost() {
    

    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","goodera");
    data.append("cloud_name","danish1712");

    

    fetch("https://api.cloudinary.com/v1_1/danish1712/image/upload",{
      method:"post",
      body:data

    }).then(res=>
      res.json()).then(
        data=>{
          if(!data){
            M.toast({ html: "Please provide all the details",classes:"black"});
      
          }
          if(!data.url){
        
            M.toast({ html: "Please provide all the details",classes:"black"});
          
        }
          setUrl(data.url)
          
        }
      ).catch(err=>{
        console.log(err);
      })
      

    
  }
  return (
    <div className="div-1">
      <div
        class="card"
        style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "600px",
          padding: "10px",
        }}
      >
        <h2>Didn't find your event? Refer here.</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Organisation"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
        />
        <input
          type="date"
          className="datepicker"
          placeholder="dd/mm/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <textarea
        className="materialize-textarea"
          
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div class="file-field input-field">
          <div class="btn #3949ab indigo darken-1">
            <span style={{color:"white"}}>Upload Image</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>

        <button
          onClick={() => myPost()}
          className="btn #3949ab indigo darken-1

        "
          style={{color:"white",width:"170px",alignSelf:"center"}}
          type="submit"
          name="action"
        >
          Refer Event
        </button>
      </div>
    </div>
  );
}

export default Enter;
