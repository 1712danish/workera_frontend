import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

function Oportunities() {
  const [data, setData] = useState([]);
  const [dateResult, setDate] = useState("");
  useEffect(()=>{
    if(!dateResult){
      fetch("/showevent", {})
        .then((res) => res.json())
        .then((result) => {
          // console.log(typeof(result))
          setData(result);
        });
      }
  
  },[])
  

  

  function showAll(){
    fetch("/showevent", {})
    .then((res) => res.json())
    .then((result) => {
      // console.log(typeof(result))
      setData(result);
    });

  }

  
  function postData(){
    
    fetch("/bydate", {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        dateResult
        
      })
    })
      .then((res) => res.json()).then(result=>{
        if(result.length!== 0){
          
        setData(result);
        }else{
          M.toast({html: "No result found",classes:"black"})

        }
      })
      
  }  

  return (
    <div className="div-1">
      <h3
        style={{
          color: "white",
          padding: "5px",
          marginLeft: "30px",
          fontSize: "50px",
        }}
      >
        Explore volunteering opportunities
      </h3>

      <div className="row">
      <div className="col s" style={{ marginLeft: "30px", display: "flex" }}>
          
          <button
            onClick={() => showAll()}
            className=" #3949ab indigo darken-1 btn"
            
            style={{ marginLeft: "10px",color:"white"}}
          >
            Show All
          </button>
          <input
            type="date"
            value={dateResult}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "150px",marginLeft:"15px" }}
          />
          <button
            onClick={() => postData()}
            className=" #3949ab indigo darken-1  btn"
            style={{ marginLeft: "10px",color:"white" }}
          >
            Search
          </button>
        </div>
       
        
      </div>
      
      {data.map((item) => {
        return (
          <div
            
            style={{
              backgroundColor:"white",
              borderRadius:"10px",
              display:"flex",
              padding: "15px",
              marginTop: "10px",
              marginBottom:"20px",
              maxWidth: "900px",
              marginLeft: "30px",
              

              borderBottom: "2px solid gray",
            }}
          >
            <div>
              <img
                style={{
                  marginTop:"45px",
                  height: "200px",
                  width: "200px",
                  borderRadius: "20px",
                }}
                src={item.photo}
              />
            </div>
            <div style={{ padding: "0px", marginLeft: "30px" }}>
              <h4>{item.name}</h4>
              <b>Organisation: </b>
              {item.organisation} <br />
              <p>
                <i className="tiny material-icons">date_range</i> {item.date}
              </p>
              <p>
                <b>Description: </b>
                {item.description}
              </p>
              <hr />
              <button
                onClick={() => {
                  fetch("/eventInfo", {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      data: item,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      //console.log(data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className="btn waves-effect waves-light #9fa8da indigo lighten-3
              
        "
                type="submit"
                name="action"
              >
                <Link to="/volunteer">Volounteer</Link>
              </button>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}

export default Oportunities;
