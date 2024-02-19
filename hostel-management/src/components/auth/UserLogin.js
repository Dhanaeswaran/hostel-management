import React, { useEffect, useState } from"react";
import{Link, useNavigate} from "react-router-dom";
import{Form}from "react-bootstrap";
import{Button}from "react-bootstrap";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UserLogin=()=>{
  const navigate = useNavigate();
  const [Rollno,setRollno] = useState("");
  const [password,setpassword] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get('http://localhost:8001/logout');
  },[])

  const handeler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8001/login',{Rollno,password})
    .then( res => {
        toast.promise(new Promise((resolve, reject) => {
        if(res.data)  navigate(`/?message=${encodeURIComponent('Login successful')}`);
        else reject();
        }),
        {
          pending:"Loding.......",
          error: "Login unsuccessfully",
        })
      })
      .catch(err =>{ toast.error("Error")})
  }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Login </h2>
        <Form onSubmit = {handeler}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Roll No" name = "Rollno" onChange={e => {
              setRollno(e.target.value);
            }}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicpassword">
            <Form.Control type="password" placeholder="Password" name = "userpassword" onChange={e => {
              setpassword(e.target.value);
            }}/>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr/>

      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account?  <Link to="/signUp"  className="btn btn-outline-success">
          Register
        </Link>
      </div>
      <ToastContainer/>
    </>
  );
}
export default UserLogin;