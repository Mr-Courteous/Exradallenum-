import React from "react";
import ContactUs from "./Form";


// React
import { motion } from "framer-motion"

// React Server Components
// import * as motion from "framer-motion/client"

function Footer() {
    return (
        <div>
            <div>
                {/* <p className="footer-logo"> Exradallenum  Academy</p> */}

            </div>






            <div className="footer-div">



                <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5} }}
                        viewport={{amount: 1 }}
                >

                    <p className="footer-head-div">
                        CONTACT US
                    </p>

                    <ContactUs />
                </motion.div>
                <motion.div
                      initial={{ opacity: 0, }}
                      whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5} }}
                      viewport={{amount: 1 }}

                >
                    <p className="footer-head-div">
                        OUR ADDRESS

                    </p>

                    <p className="footer-address">
                        11, FAMUYIWA ESTATE,
                    </p>
                    <p className="footer-address">
                        ARIGBAJO,
                    </p>


                    <p className="footer-address">
                        OGUN STATE.
                    </p>
                    <p className="footer-head-div">
                        EMAIL AND PHONE NUMBER

                    </p>
                    <p className="footer-address">
                        08060735432, 07064382018

                    </p>

                    <p className="footer-address">
                        EXRADALLENUM@YAHOO.COM
                    </p>


                </motion.div>


                <motion.div

                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.5} }}
                    viewport={{amount: 1 }}

                >


                    <p className="footer-head-div">
                        SOCIAL MEDIA
                    </p>


                    <div className="content-two">

                        <i class='fa fa-facebook'></i>
                        <i class='fa fa-twitter'></i>
                        <i class='fa fa-instagram'></i>
                        <i class='fa fa-linkedin'></i>

                    </div>


                </motion.div>

            </div>


            <div>


                <p className="footer-logo"> &#169;Exradallenum  Academy {new Date().getFullYear()}  </p>
                <p className="courteous">
                    developed by COURTEOUS: 08138021900
                </p>

            </div>


        </div >


    )
}



export default Footer;