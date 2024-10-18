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


          <a href="/withUS">

          <button className='know-more'> KNOW MORE </button>
</a>
          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/WhatsApp Image 2024-10-16 at 12.31.12 PM (1).jpeg" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>


          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>


        <img className='caro-image' src="images/SlidePictures/WhatsApp Image 2024-10-16 at 12.31.12 PM.jpeg" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>

          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/WhatsApp Image 2024-10-16 at 12.31.13 PM (2).jpeg" alt=" school" />
      </SwiperSlide>



      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>

          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/WhatsApp Image 2024-10-16 at 12.31.14 PM (1).jpeg" alt=" school" />
      </SwiperSlide>


      <SwiperSlide>

        <div className='position'>

          <p className='caro-text'>
            BRILLIANT STUDENTS
          </p>

          <button className='know-more'> KNOW MORE </button>

          <button className='contact-us'> CONTACT US </button>

        </div>

        <img className='caro-image' src="images/SlidePictures/WhatsApp Image 2024-10-16 at 12.31.15 PM (2).jpeg" alt=" school" />
      </SwiperSlide>




      
    </Swiper>

  )
}


export default Carousel;