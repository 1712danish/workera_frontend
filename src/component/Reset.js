import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css";



const ResetPassword = () => {
  const history = useHistory();
  const [email,setEmail]= useState("");
  

  const postData =()=>{
    fetch("/reset-password",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
       
      })
    }).then(res=>
      res.json()
     
    ).then(data=>{
      console.log(data);
  
      if(data.error){
          M.toast({html: data.error,classes:"black"})
        }else{
          const value=data.user;
          //console.log(value)
          
         
                    
          history.push("/")
          
          M.toast({html: data.message,classes:"black"})


        }
      
    }).catch(err=>{
      console.log(err);
    })
  }





  return (
    
    <div className="mycard " style={{height:"500px"}}>
      <div className="card card-auth" style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "600px",
          padding: "10px",
        }}>
        <h1 className="brand-logo">Workera</h1>
        <input type="text" placeholder="E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />

        <button
          
          onClick={()=>postData()}
          
          className="btn #3949ab indigo darken-1

        "
          style={{color:"white",width:"170px",alignSelf:"center"}}

          type="submit"
          name="action"
        >
          Reset Password
          
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;


