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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const products = await fetch(`${link}/api/list/get/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const items = await products.json();
      setProducts(items);
      setLoading(false);
    }
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div class="max-w-screen-lg me-auto catalog-product grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-8 py-8 xmd:w-4/5  w-11/12 mx-auto">
          <div class="border border-gray-200 p-4">
            <div class="animate-pulse space-y-2">
              <div class="bg-gray-200 h-48"></div>
              <div class="flex-1 space-y-2">
                <div class="h-16 bg-gray-200 full"></div>
                <div class="space-x-2 flex">
                  <div class="h-8 bg-gray-200 w-full"></div>
                  <div class="h-8 bg-gray-200 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-gray-200 p-4">
            <div class="animate-pulse space-y-2">
              <div class="bg-gray-200 h-48"></div>
              <div class="flex-1 space-y-2">
                <div class="h-16 bg-gray-200 full"></div>
                <div class="space-x-2 flex">
                  <div class="h-8 bg-gray-200 w-full"></div>
                  <div class="h-8 bg-gray-200 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-gray-200 p-4">
            <div class="animate-pulse space-y-2">
              <div class="bg-gray-200 h-48"></div>
              <div class="flex-1 space-y-2">
                <div class="h-16 bg-gray-200 full"></div>
                <div class="space-x-2 flex">
                  <div class="h-8 bg-gray-200 w-full"></div>
                  <div class="h-8 bg-gray-200 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Home;
