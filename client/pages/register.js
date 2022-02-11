import { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [name, setName] = useState("sushita");
    const [email, setEmail] = useState("jkjdw@gmail.com");
    const [password, setPassword] = useState("sushmita");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password });
        const {data} = await axios.post(`http://localhost:8001/api/register`);
        
        console.log("REGISTER RESPONSE",data);
    };

    return ( <>
        <h1 className = "jumbotron text-center bg-primary square"> Register </h1>  
        <div className = "container col-md-4 offset-md-4 pb-5"> <from onSubmit = { handleSubmit}>
        <input type = "text"
        className = "form-control mb-4 p-4"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        placeholder = "Enter name"
        required/>
        <input type = "email"
        className = "form-control mb-4 p-4"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        placeholder = "Enter email"
        required/>
        <input type = "password"
        className = "form-control mb-4 p-4"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        placeholder = "Enter password"
        required />

        <button type = "submit"
        className = "btn btn-block btn-primary"> Submit </button> 
        </from> 
        </div> 
        </>
    );
};

export default Register;