import React from "react";


function NumbOne() {


    const show = ["come home", "you are good", "finr man"]

    let randomIndex = Math.floor(Math.random() * show.length);

    return (
        <div className="NumbOne">

            <div className="content">

                <div style={{
                    // width:"20%",
                    display: "flex",
                    justifyContent: "flex-start"
                }}>

                    <p className="content-one">  Latest News: </p>

                    <marquee direction="right" scrollamount="4" style={{
                        // width: "100px"
                    }}>
                        <p className="content-one">

                            We are Open                        </p>
                    </marquee>

                </div>



                <div className="content-two">

                    <i class='fa fa-facebook'></i>
                    <i class='fa fa-twitter'></i>
                    <i class='fa fa-instagram'></i>
                    <i class='fa fa-linkedin'></i>

                </div>
            </div>

        </div>
    )
}

export default NumbOne;