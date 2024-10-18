import React from "react";

import ContactUs from "../Components/Form";
import NumbOne from "../Components/NumberOne";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

function ContactUss() {
    return (
        <div>

            <NumbOne />


            <Navbar />

            <div style={{

                marginTop: '7px',
                fontFamily: "Pacifico",
                fontWeight: '500',
                color: '#405cf5',
                fontSize: '20px',
                textAlign: 'center'
            }}>
                <p
                > Exradallenum Academy </p>

            </div>


            <h2 style={{ textAlign: 'center', color: '#747474' }}>
                SEND US A MESSAGE
            </h2>


            <div className="contact-us-div">

            <ContactUs />


            </div>



            <Footer />


        </div>
    )
}

export default ContactUss;