import React from "react";

// import './App.css'
import NumbOne from "../Components/NumberOne"
import NumbTwo from '../Components/NumberTwo'
import NumbThree from '../Components/NumberThree'
import Carousel from '../Components/ImageCarousel'
import Navbar from '../Components/NavBar'
import Card from '../Components/Testimonials'
import Card2 from '../Components/AboutUs'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import { ContactUs } from '../Components/Form'
import CarouselTwo from "../Components/CarouselTwo";



function Home() {
    return (
        <div>
            {/* 
            <div className="background" style={{
                height: "200px",
                textAlign: "center"
            }} >
     
            </div> */}



            <NumbOne />


            <NumbThree />

            <Navbar />

            <Carousel />


            <Card />

            <h2 style={{ fontWeight: 'bold', textAlign: 'center', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}> About Us  </h2>

            <Card2 />

            <br>

            </br>



            <h2 style={{ fontWeight: 'bold', textAlign: 'center', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}> Locate Us  </h2>

            <br>
            </br>


            <Map />

{/* 
            <div className="background" style={{
                backgroundImage: 'url(images/SlidePictures/WhatsApp Image 2024-10-16 at 12.31.12 PM (1).jpeg)',
                // height: "200px",
                textAlign: "center"
            }} >

                <CarouselTwo />

                <div style={{
                    backgroundColor: "red",
                    height: ' 200px'
                }}>
                    you
                </div>

                <CarouselTwo />


            </div> */}



            {/* <NumbTwo /> */}


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


            {/* <ContactUs /> */}













        </div>
    )
}


export default Home