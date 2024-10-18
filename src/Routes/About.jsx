import React from "react";

import Navbar from "../Components/NavBar";
import NumbOne from "../Components/NumberOne";
import Footer from "../Components/Footer";

function About() {
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
                ABOUT
            </h2>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding:'3%'

            }}>
                ABC School is a premier educational institution dedicated to nurturing young minds and fostering a lifelong love of learning. With a strong emphasis on academic excellence, character development, and extracurricular activities, ABC School provides a comprehensive and enriching educational experience.

                Our school is committed to creating a supportive and inclusive environment where students can thrive and reach their full potential. We believe in empowering students to become critical thinkers, problem-solvers, and compassionate individuals who are prepared to make a positive impact on the world.

                ABC School offers a rigorous curriculum that aligns with the latest educational standards. Our experienced and dedicated faculty are passionate about teaching and inspiring students to develop a deep understanding of various subjects. We also provide a wide range of extracurricular activities, including sports, arts, and clubs, to help students explore their interests and develop essential skills.
            </p>


            <Footer />

            {/* <a href='https:/wa.me/+2348138021900?text+hello' target='blank'>   comem hee </a> */}


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


        </div >

    )
}

export default About;