import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
function PrevButton() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      className="border-black rounded-full hover:text-white hover:bg-black transition-all sm:p-2 p-1 border-2 hover:cursor-pointer disabled:hidden"
    >
      <MdKeyboardArrowLeft />
    </div>
  );
}

export default PrevButton;
