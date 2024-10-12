import React from "react";
import Hamburger from 'hamburger-react'
import { useState } from "react";





function Navbar() {


    const [isOpen, setOpen] = useState(false)

    return (
        <div className="Navbar">


            <div className="navbar">
                <a href="#home">HOME</a>
                <a href="#news">ABOUT US</a>
                <a href="#contact">OUR GALLERY</a>
                <a href="#about">SCHOOLS</a>
                <a href="#about">SCHOOL VIDEO</a>
                <a href="#about">CONTACT US</a>
                <a href="#about">SCHOOL PORTAL</a>

            </div>

            <div className="ham">
                <Hamburger className="ham" toggled={isOpen} toggle={setOpen} />


            </div>


            {/* <div className="navbar-2" style={{ display: isOpen ? 'block' : 'none' }}>
                <a className= "nav-link" href="#home">HOME</a>
                <a className= "nav-link" href="#news">ABOUT US</a>
                <a className= "nav-link" href="#contact">OUR GALLERY</a>
                <a className= "nav-link" href="#about">SCHOOLS</a>
                <a className= "nav-link" href="#about">SCHOOL VIDEO</a>
                <a className= "nav-link" href="#about">CONTACT US</a>
                <a className= "nav-link" href="#about">SCHOOL PORTAL</a>
            </div> */}

            <div className="toggle" style={{ display: isOpen ? 'block' : 'none', }}>


                <ul className="nav-2-menu">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#news">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">OUR GALLERY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">SCHOOLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">SCHOOL VIDEO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">CONTACT US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">SCHOOL PORTAL</a>
                    </li>
                </ul>

            </div>




        </div>
    )
}

export default Navbar;