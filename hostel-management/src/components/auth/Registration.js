import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form ,Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const[email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [Rollno, setRollNo] = useState("");
  const [branch, setBranch] = useState("");

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8001/register',{Rollno,name,password,branch,contact,email})
    .then(res => {
      if(res.data.valid){
        navigate('/');
      }
      else toast.error("Incorrect syntax");
    })
    .catch(err => {
      toast.error("Error occurred");
    })      
  }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Register </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSchNo">
            <Form.Control
              type="scholar_no"
              placeholder="Roll No"
              onChange={(e) => setRollNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBranch">
            <Form.Control
              type="branch"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Control
              type="contact"
              placeholder="Contact no"
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicpassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account?  <Link to="/login" className="btn btn-outline-success">Log In</Link>
      </div>
      <ToastContainer/>
    </>
  );
};
export default Registration;