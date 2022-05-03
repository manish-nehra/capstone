import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
// import user from "../../server/models/user";

const Register = () => {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const {state:{user},} = useContext(Context);
	
	const router = useRouter();
	
	useEffect(() =>{
		if(user !== null) router.push("/");
	}, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password });
        try{
            setLoading(true);
        const {data} = await axios.post(`/api/register`,{
            name,
            email,
            password,
        });
        
        toast.success('Registeration Sucessful. Please login ');
        setName("");
        setEmail("");
        setPassword("");
        setLoading(false);  
        // console.log("REGISTER RESPONSE",data);
    }catch(err){
        toast.error(err.response.data);
        setLoading(false);
    }
};

    return ( 
    <>
     <div className="mt-4" style={{width:"100%"}}>
  <div className="row no-gutters">
    <div className="col-12 col-md-5 ">

      <div className="card-body mt-5 "> 
        <h1  className='text-center container pb-4' style={{marginTop:"7%",
                        marginLeft:"27%",
                        padding:"2%",
                        borderRadius:"2% 2%",
                         width:"63%",
                          backgroundImage: "linear-gradient(to left, #FFFFC2 ,   #C3FDB8)" ,
                          fontFamily:"'Akshar', sans-serif " }}> Register</h1>
         <div className ="container col-md-8 offset-md-3 pb-5"  > 
        <form onSubmit ={handleSubmit}>
        <input type ="text"
        className ="form-control mb-4 p-4"
        value ={name}
        onChange ={(e) => setName(e.target.value) }
        placeholder = "Enter name"
        required/>
        <input type = "email"
        className = "form-control mb-4 p-4"
        value = {email}
        onChange = {(e) => setEmail(e.target.value) }
        placeholder = "Enter email"
        required/>
        <input type = "password"
        className = "form-control mb-4 p-4"
        value = {password}
        onChange = {(e) => setPassword(e.target.value) }
        placeholder = "Enter password"
        required />
        <div className="d-grid gap-2">
        <button type ="submit"className ="btn btn-block  btn-success btn-lg"
        disabled={!name || ! email ||!password|| loading}> {loading? <SyncOutlined spin /> : "Submit"} </button> 
        </div>       

        </form> 
        <p className='text-center p-3'>
            Already registered?{" "}
            <Link href="/login">
                <a>Login</a>
            </Link>
        </p>
        </div> 
             </div>
        
   
    </div>
     <div className="col-12 col-md-6 ">
        <img src="Register.png" style={{ marginTop:"10%", width:"100%" }}/>
          </div>
  </div>
</div>
        </>
    );
};

export default Register;