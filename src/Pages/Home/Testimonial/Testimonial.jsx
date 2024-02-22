import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="md:mx-8 my-3">
      <SectionTitle
        heading={"Testimonial"}
        subHeading={"---What Our Clients Say---"}
      />
      <Swiper
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center">
              <Rating
                style={{ maxWidth: 200 }}
                value={review.rating}
                readOnly
              />
              <h3 className="mt-5 text-3xl">
                <FaArrowDown />
              </h3>
              <div className="w-3/5 mx-auto pt-8 pb-16 text-center">
                <p>{review.details}</p>
                <h3 className="text-3xl ">{review.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
