import React,{useState} from "react";
import {Link,useHistory,useParams} from "react-router-dom"
import M from "materialize-css";



const NewPassword = () => {
  const history = useHistory();
  const [password,setPassword] = useState("");
  const {token}=useParams();
  console.log(token);

  const postData =()=>{
    fetch("/new-password",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        token,
        password
      })
    }).then(res=>
      res.json()
     
    ).then(data=>{
      console.log(data);
  
      if(data.error){
          M.toast({html: data.error,classes:"black"})
        }else{
          
                    
          history.push("/")
          
       
          M.toast({html: data.message,classes:"black"})


        }
      
    }).catch(err=>{
      console.log(err);
    })
  }





  return (
    <div >
    <div className="mycard " style={{height:"500px"}}>
      <div className="card card-auth" style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "600px",
          padding: "10px",
        }}>
        <h1 className="brand-logo">Workera</h1>

        <input type="password" placeholder="New password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button
          
          onClick={()=>postData()}
          
          className="btn #3949ab indigo darken-1

        "
          style={{color:"white",width:"200px",alignSelf:"center"}}

          type="submit"
          name="action"
        >
          Update password
          
        </button>
      </div>
    </div>
   
    </div>
  );
};

export default NewPassword;


