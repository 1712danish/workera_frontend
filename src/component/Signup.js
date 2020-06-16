import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css";

const Signup = () => {
  const history = useHistory();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const postData=()=>{
    
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })

    }).then(res=>
      res.json()
     
      
    ).then(data=>{
      console.log(data)

     
      if(data.error){
      M.toast({html: data.error})
      }else{
        M.toast({html: data.message})
        history.push("/signin")
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
        <h1 className="brand-logo">Workera</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder="E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={()=>postData()}
          className="btn waves-effect  #9fa8da indigo lighten-3"
          type="submit"
          name="action"
        >
          Signup
          
        </button>
        <h6><Link to="/signin">Already have an account?</Link></h6>
      </div>
    </div>
  );
};

export default Signup;
