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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>



          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/USE 1.avif" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>


          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>


        <img className='caro-image' src="images/SlidePictures/USE 2.avif" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>

          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/USE 3.avif" alt=" school" />
      </SwiperSlide>



      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>

          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/USE 4.avif" alt=" school" />
      </SwiperSlide>
    </Swiper>

  )
}


export default Carousel;