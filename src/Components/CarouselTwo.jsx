import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';




function CarouselTwo() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            autoplay={true}
            pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}

        // style={{
        //     marginBottom:"20px",
        //     backgroundColor:"red"
        // }}
        >






            <SwiperSlide>

                {/* <div> */}
                <h3 style={{
                    textAlign: "center",
                    // height: '200px',
                    color: "white",
                    paddingTop: "100px",
                    margin: "20px 0 10px",
                    lineHeight: "30px",
                      fontFamily: "Arvo, serif",



                }}>"I'VE MADE LIFELONG FRIENDS AT THIS SCHOOL AND FEEL
                    LIKE I BELONG. THE TEACHERS ARE SUPPORTIVE AND CARE ABOUT
                    MY WELL-BEING. I'VE EXPLORED MY PASSIONS THROUGH EXTRACURRICULAR
                    ACTIVITIES AND AM GRATEFUL FOR THE INCLUSIVE ENVIRONMENT."             </h3>

                <p style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "100px",
                    paddingBottom: "50px",
                    margin: "20px 0 10px",
                    fontFamily: 'Lato, sans-serif',
                    fontWeight:"bolder"






                }}>
                    Adewunmi Adesewa
                </p>
                {/* </div> */}



            </SwiperSlide>




            <SwiperSlide>

                <div>
                    <h3 style={{
                        textAlign: "center",
                        // height: '200px',
                        color: "white",
                        paddingTop: "100px",
                        margin: "20px 0 10px",
                        lineHeight: "30px",
                        fontFamily: "Arvo, serif",


                    }}>                "I STRUGGLED ACADEMICALLY WHEN I FIRST
                        ARRIVED. THE TEACHERS' SUPPORT AND ENCOURAGEMENT
                        HELPED ME OVERCOME MY DOUBTS. I'VE IMPROVED SIGNIFICANTLY
                        AND AM NOW CONFIDENT IN MY ABILITIES, THANKS TO THE SCHOOL'S
                        RESOURCES AND OPPORTUNITIES."
                    </h3>

                    <p style={{
                        textAlign: "center",
                        color: "white",
                        paddingTop: "100px",
                        paddingBottom: "50px",
                        margin: "20px 0 10px",
                        fontFamily: 'Lato, sans-serif',
                        fontWeight:"bolder"







                    }}>
                        Ibidunni Omolewa                </p>
                </div>



            </SwiperSlide>


            <SwiperSlide>

                <div>
                    <h3 style={{
                        textAlign: "center",
                        // height: '200px',
                        color: "white",
                        paddingTop: "100px",
                        margin: "20px 0 10px",
                        lineHeight:"30px",
                        fontFamily: "Arvo, serif",




                    }}>                      "I'VE MADE LIFELONG FRIENDS AT THIS SCHOOL AND
                        FEEL LIKE I BELONG. THE TEACHERS ARE SUPPORTIVE AND CARE ABOUT MY WELL-BEING.
                        I'VE EXPLORED MY PASSIONS THROUGH EXTRACURRICULAR ACTIVITIES AND AM GRATEFUL
                        FOR THE INCLUSIVE ENVIRONMENT."
                    </h3>

                    <p style={{
                        textAlign: "center",
                        color: "white",
                        paddingTop: "100px",
                        paddingBottom: "50px",
                        margin: "20px 0 10px",
                        fontFamily: 'Lato, sans-serif',
                        fontWeight:"bolder"








                    }}>
                        lucas jude
                    </p>
                </div>



            </SwiperSlide>

            <SwiperSlide>

                <div>
                    <h3 style={{
                        textAlign: "center",
                        color: "white",
                        paddingTop: "100px",
                        margin: "20px 0 10px",
                        lineHeight:"30px",
                        fontFamily: "Arvo, serif",





                    }}>                "THIS SCHOOL OFFERS A VARIETY OF ACADEMIC PROGRAMS
                        AND EXTRACURRICULAR ACTIVITIES. THE TEACHERS ARE PASSIONATE AND CREATE
                        ENGAGING LEARNING EXPERIENCES.
                        I'VE PARTICIPATED IN FIELD TRIPS AND RESEARCH PROJECTS, WHICH HAVE
                        BROADENED MY HORIZONS. THE DIVERSE STUDENT BODY HAS ENRICHED MY EDUCATION."                 </h3>


                    <p style={{
                        textAlign: "center",
                        color: "white",
                        paddingTop: "100px",
                        paddingBottom: "50px",
                        margin: "20px 0 10px",
                        fontFamily: 'Lato, sans-serif',
                        fontWeight:"bolder"


                        




                    }}>
                        Emmanuel chwukwudi                </p>
                </div>



            </SwiperSlide>








        </Swiper>

    )
}


export default CarouselTwo;