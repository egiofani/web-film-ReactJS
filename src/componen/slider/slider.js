import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import './slider.css';

import {getMovie} from '../../api'

import slide_image from "./assets/images/img_1.jpg"
import { useEffect, useState } from 'react';

const Slider = () => {

  const [PopularMovie, setPopularMovie] = useState([])

  useEffect(() => {
    getMovie().then((result) =>{
      setPopularMovie(result)
    })
  }, [])

  
  

  return (
    <div className="">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop = {true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate : 0,
            stretch: 0,
            depth : 100,
            modifier:2.5,
          }
        }
        pagination={{el: '.swiper-pagination', clickable:true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable:true,
        }}
        modules={[EffectCoverflow,Pagination,Navigation]}
        className="swiper_container"
      >
        
      {
     PopularMovie.map((movie, i) =>{
      return(
        <SwiperSlide>
          <img key={i} src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="slider image"/>
        </SwiperSlide>
      )
    })
  }
       

        


        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className='swiper-pagination'></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Slider;
