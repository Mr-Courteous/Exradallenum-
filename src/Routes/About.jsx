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
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>
                Exradallenum is a premier educational institution dedicated to nurturing young minds and fostering a lifelong love of learning. With a strong emphasis on academic excellence, character development, and extracurricular activities, Exradallenum provides a comprehensive and enriching educational experience.

                Our school is committed to creating a supportive and inclusive environment where students can thrive and reach their full potential. We believe in empowering students to become critical thinkers, problem-solvers, and compassionate individuals who are prepared to make a positive impact on the world.

                Exradallenum offers a rigorous curriculum that aligns with the latest educational standards. Our experienced and dedicated faculty are passionate about teaching and inspiring students to develop a deep understanding of various subjects. We also provide a wide range of extracurricular activities, including sports, arts, and clubs, to help students explore their interests and develop essential skills.
            </p>





            <h2 style={{ textAlign: 'center', color: '#747474' }}>
                OUR VISION
            </h2>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>

                To be a leading primary school, recognized for academic excellence, character development, and a strong sense of community.

            </p>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>
                To create lifelong learners who are confident, curious, and compassionate.
                Secondary School:

            </p>
            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>                    To be a premier secondary school that empowers students to become innovative thinkers, ethical leaders, and global citizens.


            </p>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>                    To provide a transformative educational experience that prepares students for a successful future.


            </p>



            <h2 style={{ textAlign: 'center', color: '#747474' }}>
                OUR MISSION
            </h2>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>

                To provide a nurturing and stimulating learning environment that fosters a love of learning.


            </p>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>
                To equip young learners with the knowledge, skills, and values needed to succeed in life.



            </p>
            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>                  To cultivate a strong sense of community and belonging.




            </p>

            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>                  To inspire students to reach their full potential through a rigorous academic program and diverse extracurricular opportunities.

            </p>



            <p style={{
                lineHeight: '30px', color: '#747474', fontFamily: "Pacifico", textAlign: 'center', padding: '3%'

            }}>           To prepare students for higher education and future careers by developing critical thinking, problem-solving, and communication skills

            </p>

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