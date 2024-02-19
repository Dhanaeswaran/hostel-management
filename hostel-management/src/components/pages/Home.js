import React, { useEffect } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';  

import home from '../../images/home.ico';
import books from '../../images/books.ico';
import gym from '../../images/gym.ico';
import games from '../../images/games.ico';
import kitchen from '../../images/kitchen.ico';
import wifi from '../../images/wifi.ico';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import  './Home.css';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quer = new URLSearchParams(location.search);
  const message = quer.get('message');
  useEffect(() => {
    if(message) {
        setTimeout(toast.success(message,{
            autoClose: 5000,
        }),3000);
    }
  },[message]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8001/')
    .then( res => {
        if(!res.data.valid) navigate('/login');
    })
    .catch( err => {console.log("Error in cooki"+err);})
  },[])
  let f1={
    textAlign:"center",
    marginTop:"8px"
  }
  
  return (
    <>
    <div className="home" >
    </div>
    <section className="cont  d-flex flex-column justify-content-center align-content-center  ">
                <div className="container text-center mt-4 ">
                    <h1 className="shadowHeading fw-semibold text-white pk">
                        KONGU HOTELS
                    </h1>
                </div>

                <div className="row p-3">
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={home} alt="content" />
                                <h2 className="pk text-gray-900 font-medium title-font mx-1 mb-2 my-2" >LARGE ROOMS</h2>
                                <p className="leading-relaxed text-base" >2 Bed Along With Cupboard and Table in Each Room - Total 1500+ Rooms Available.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={kitchen} alt="content" />
                                <h2 className="pk text-gray-900 font-medium title-font mx-1 mb-2 my-2">KITCHEN</h2>
                                <p className="leading-relaxed text-base">Serving Hygienic Food To Each Student. Taking Care of Health.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={gym} alt="content" />
                                <h2 className="pk text-gray-900 font-medium title-font mx-1 mb-2 my-2">GYM</h2>
                                <p className="leading-relaxed text-base">We understand that high quality gym equipment and accessories are 
                                    must!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-3">
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={wifi} alt="content" />
                                <h2 className="pk text-gray-900 font-medium title-font mx-1 mb-2 my-2">Wi-Fi</h2>
                                <p className="leading-relaxed ">High Speed Internet Connection Available in Campus for Each Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={games} alt="content" />
                                <h2 className="pk text-gray-900 font-medium title-font mx-1 mb-2 my-2">GAMES</h2>
                                <p className="leading-relaxed text-base">Indoor and Outdoor Games Available Like Carrom, Chess, Volleyball, Badminton
                                    Cricket etc.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <ToastContainer
            pauseOnFocusLoss = {false}/>
    </>
  );
};
export default Home;
