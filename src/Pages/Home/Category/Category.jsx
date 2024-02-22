import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div className="my-8">
     <SectionTitle heading={"Order Online"} subHeading={"---From 11.00am to 10.00pm---"} />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-2xl md:text-4xl uppercase text-center -mt-14 text-white">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-2xl md:text-4xl uppercase text-center -mt-14 text-white">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-2xl md:text-4xl uppercase text-center -mt-14 text-white">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-2xl md:text-4xl uppercase text-center -mt-14 text-white">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-2xl md:text-4xl uppercase text-center -mt-14 text-white">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
