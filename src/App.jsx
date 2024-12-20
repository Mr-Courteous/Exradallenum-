import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact';
import ApplyForm from './Routes/Apply';



function App() {

    return (

        <>


            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="apply-now" element={<ApplyForm />} />
                </Routes>
            </Router>


        </>
    )
}

export default App

