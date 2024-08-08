import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import PrevButton from "../components/PrevButton";
import NexButton from "../components/NexButton";
export const link = "https://commerce-task-omega.vercel.app";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const products = await fetch(`${link}/api/list/get/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const items = await products.json();
      setProducts(items);
    }
    getProducts();
  }, []);

  return (
    <div className="flex w-11/12 mx-auto items-start justify-start gap-4 flex-wrap my-10 group">
      {/* <Card /> */}
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={2}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 2,
          },
        }}
        spaceBetween={50}
        className="mySwiper"
      >
        {products.map((product) => (
          // <ProductCard product={product} />
          <SwiperSlide>
            <Card product={product} />
          </SwiperSlide>
        ))}
        <div className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 px-2 -translate-y-1/2 flex items-center justify-between w-full z-10 transition-all -translate-x-1/2">
          <PrevButton />
          <NexButton />
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
