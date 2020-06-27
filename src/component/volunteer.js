import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css";


const Volunteer = () => {
  const history = useHistory();
  

  const postData =()=>{
    fetch("/volunteer",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body:JSON.stringify({
        
      })
    }).then(res=>
      res.json()
     
    ).then(data=>{
      console.log(data);
  
      if(data.error){
          M.toast({html: data.error,classes:"black"})
        }else{
        //   localStorage.setItem("jwt",data.token);
        //   localStorage.setItem("user",JSON.stringify(data.user));
          M.toast({html:data.message,classes:"black"})
          
          history.push("/")
          

        }
      
    }).catch(err=>{
      console.log(err);
    })
  }





  return (
    <div className="mycard">
      <div className="card card-auth" style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "600px",
          padding: "10px",
        }}>
        <h1 className="brand-logo">Goodera</h1>
        <h3>Please click the button to Volunteer!!</h3>
        <button
          onClick={()=>postData()}
          className="btn waves-effect #9fa8da indigo lighten-3"
          type="submit"
          name="action"
        >
          Volunteer
          
        </button>
        
      </div>
    </div>
  );
};

export default Volunteer;
