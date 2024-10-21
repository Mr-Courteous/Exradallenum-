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
            navigation
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >






            <SwiperSlide>

                <di>
                    <p style={{
                        textAlign: "center",
                        height: '200px',

                    }}>
                        writing
                    </p>
                </di>



            </SwiperSlide>



            <SwiperSlide>




            </SwiperSlide>

            <SwiperSlide>

                <di>
                    <p>
                        playing
                    </p>
                </di>



            </SwiperSlide>


            <SwiperSlide>

                <di>
                    <p>
                        eating
                    </p>
                </di>



            </SwiperSlide>

            <SwiperSlide>

                <di>
                    <p>
                        reading
                    </p>
                </di>



            </SwiperSlide>








        </Swiper>

    )
}


export default CarouselTwo;