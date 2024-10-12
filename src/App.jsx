import React from 'react'
// import './App.css'
import NumbOne from "./Components/NumberOne"
import NumbTwo from './Components/NumberTwo'
import NumbThree from './Components/NumberThree'
import Carousel from './Components/ImageCarousel'
import Navbar from './Components/NavBar'
import Card from './Components/Testimonials'

function App() {

    return (
        <>
            <div>



                <NumbOne />

                <NumbTwo />

                <NumbThree />

                <Navbar />

                <Carousel />


                <Card />

                <h2 style={{ fontWeight:'bold', textAlign:'center', fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif'}}> Our Current Achievements & Awards


                </h2>

                <NumbTwo />








            </div>

        </>
    )
}

export default App
