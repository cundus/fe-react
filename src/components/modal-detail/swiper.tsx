import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { IThreadImage } from "../../types/thread";
import { Scrollbar } from "swiper/modules";

type Props = {
   images: IThreadImage[];
};

export const SwiperComponent: React.FC<Props> = ({ images }) => {
   return (
      <Swiper
         scrollbar={{
            hide: true,
         }}
         modules={[Scrollbar]}
         className="mySwiper"
      >
         {images.map((image) => (
            <SwiperSlide key={image.id}>
               <img
                  src={image.url}
                  style={{
                     width: "100%",
                     maxHeight: "100vh",
                     objectFit: "contain",
                  }}
               />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
