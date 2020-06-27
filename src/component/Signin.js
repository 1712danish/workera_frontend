import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css";



const Signin = () => {
  const history = useHistory();
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

  const postData =()=>{
    fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(res=>
      res.json()
     
    ).then(data=>{
      console.log(data);
  
      if(data.error){
          M.toast({html: data.error,classes:"black"})
        }else{
          const value=data.user;
          console.log(value)
          
          localStorage.setItem("jwt",data.token);
          localStorage.setItem("user",JSON.stringify(data.user));
          localStorage.setItem("name",JSON.stringify(value.name));
          localStorage.setItem("email",JSON.stringify(value.email));

                    
          history.push("/")
          
          window.location.reload(false);
          M.toast({html: "signed in succesfully",classes:"black"})


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
        <input type="text" placeholder="E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />

        <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button
          
          onClick={()=>postData()}
          
          className="btn #3949ab indigo darken-1

        "
          style={{color:"white",width:"170px",alignSelf:"center"}}

          type="submit"
          name="action"
        >
          Login
          
        </button>
        <h6><Link to="/signup">Don't have an account?</Link></h6>
      </div>
    </div>
  );
};

export default Signin;


