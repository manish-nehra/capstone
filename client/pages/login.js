import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("ryanstripeseller@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/user");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
   <>
    <div className="mt-4" style={{width:"100%"}}>
  <div className="row no-gutters">
    <div className="col-12 col-md-6 " >
     <img src="signup.png"style={{  width:"90%" }} />
    </div>
    <div className="col-12 col-md-6    " >
      <div className="card-body mt-5"> 
         <h1  className=' text-center container col-md-8  pb-5' style={{marginTop:"7%",
                        marginRight:"37%", 
                        padding:"2%",
                        borderRadius:"2% 2%",
                        width:"54%",
                          backgroundImage: "linear-gradient(to right, #FFFFC2 ,   #C3FDB8)" ,
                          fontFamily:"'Akshar', sans-serif " }}> Login </h1>
        <div className ="container col-md-7  pb-5 ml-5" > 
        <form onSubmit ={handleSubmit}>
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
        required/>
        <div className="d-grid gap-2">
        <button type ="submit"className ="btn btn-block btn-success btn-lg"
        disabled={!email||!password || loading}> {loading? <SyncOutlined spin /> : "Submit"} 
        </button> 
        </div>  
        </form>
         <p className='text-center pt-3'>
            Not yet registered?{" "}
            <Link href="/register">
                <a>Register</a>
            </Link>
        </p>
		
		<p className='text-center'>
            <Link href="/forgot-password">
                <a className="text-danger">Forgot password</a>
            </Link>
        </p>
		
		
        </div>
        </div>
    </div>
  </div>
</div>
       
         </>
  );
};

export default Login;
