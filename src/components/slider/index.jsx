import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";

const Index = ({option = [],renderItem}) => {
    console.log(option)
    return (
        <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {
            option.map((x,i) => (
               <SwiperSlide key={`swiper-slider-${i}`}>
                 {renderItem(x,i)}
               </SwiperSlide> 
            ))
        }
        </Swiper>
    );
}

export default Index;
