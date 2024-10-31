import React from "react";

import ContactUs from "../Components/Form";
import NumbOne from "../Components/NumberOne";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Map from "../Components/Map"
import ContactForm from "../Components/Form-two";
import FooterTwo from "../Components/Footer2";
// import CalendarComponent from "../Components/Calendar";


function ApplyForm() {
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
                SEND US A MESSAGE AND GET YOUR WARD REGISTERED NOW!
            </h2>



            <div className="contact-us-div">

                <ContactForm />


            </div>


            <h2 style={{ textAlign: 'center', color: '#747474' }}>
                WE ARE HERE            </h2>


            <Map />



            <FooterTwo />


            {/* <CalendarComponent /> */}

            <a
                href="https://wa.link/99zl5j"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
            >
                <img style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '2px',
                    width: '50px',
                    // Add any other desired styles here
                }}
                    src="images/SlidePictures/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png
"
                    alt="WhatsApp Chat"
                    className="whatsapp-icon"
                />
            </a>


        </div>
    )
}

export default ApplyForm;