import React, { useState,useEffect } from 'react'
import logo from "./img/dhanalogo.jpeg";
import "./navigator.css";

const Navigator = () => {

    const [changetop,setChangetop]=new useState("");

 
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setChangetop("fixed-top");
            } else {
                setChangetop("");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
  <div className={changetop}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3">
        <div className="container-fluid ">
        <div className='ms-4'>
            <img src={logo}alt="logo" width={270} height={70} />
        </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#"><b>Home</b></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <button className='btn btn-primary'>join Course</button>
                </li>
            </ul>
         </div>
    </nav>
</div>
  )
}

export default Navigator