// import next Iimage
import Image from "next/image";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";

const Slider = ({ clients }) => {
  return (
    <Swiper
      breakpoints={{
        268: {
          width: 345,
          slidesPerView: 1,
          spaceBetween: 10,
          slidesOffsetBefore: 30,
        },
        964: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className="testimonialSlider"
    >
      {clients.map((client, idx) => {
        // destructure clients
        const { message, image, name } = client;
        return (
          <SwiperSlide key={idx}>
            <div className="bg-white h-[360px] drop-shadow-primary rounded-[10px] px-[50px] pt-[60px] pb-[40px] flex flex-col justify-between">
              {/* message */}
              <p className="font-light leading-[30px]">{message}</p>
              {/* name & image */}
              <div className="flex items-center gap-x-5">
                <Image src={image} width={60} height={60} alt="" />
                <span className="font-semibold"> {name}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
