import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='position' >

          <p className='caro-text'>
            EMPOWERING MINDS, BRIGHTENING FUTURES.
            YOUR JOURNEY STARTS HERE.          </p>


          <a href="/about">

            <button className='know-more'> KNOW MORE </button>
          </a>
          <a href="/contact">

            <button className='contact-us'> CONTACT US </button>

          </a>


        </div>

        <div className='test'>

          <img className='caro-image' src="images/SlidePictures/brightness/image (1).jpg" alt=" school" />


        </div>

      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            A TRADITION OF EXCELLENCE, A FUTURE OF PROMISE.
            YOUR FUTURE STARTS NOW. ENROLL TODAY.          </p>


          <a href="/about">

            <button className='know-more'> KNOW MORE </button>
          </a>
          <a href="/contact">

            <button className='contact-us'> CONTACT US </button>

          </a>

        </div>


        <img className='caro-image' src="images/SlidePictures/brightness/image (2).jpg" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
EDUCATION IS NOT EXPENSIVE. DO NOT TRY IGNORANCE.          </p>

          <a href="/about">

            <button className='know-more'> KNOW MORE </button>
          </a>
          <a href="/contact">

            <button className='contact-us'> CONTACT US </button>

          </a>


        </div>

        <img className='caro-image' src="images/SlidePictures/brightness/image (4).jpg" alt=" school" />
      </SwiperSlide>



      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
          EXPERIENCE THE DIFFERENCE. SCHEDULE A TOUR.
          JOIN OUR COMMUNITY OF LEARNERS.          </p>

          <a href="/about">

            <button className='know-more'> KNOW MORE </button>
          </a>
          <a href="/contact">

            <button className='contact-us'> CONTACT US </button>

          </a>


        </div>

        <img className='caro-image' src="images/SlidePictures/brightness/image2.jpg" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
INVEST IN YOUR WARD TODAY. ENROLL WITH EXRADELLENUM          </p>
          <a href="/about">

            <button className='know-more'> KNOW MORE </button>
          </a>
          <a href="/contact">

            <button className='contact-us'> CONTACT US </button>

          </a>


        </div>

        <img className='caro-image' src="images/SlidePictures/brightness/image3.jpg" alt=" school" />
      </SwiperSlide>





    </Swiper>

  )
}


export default Carousel;